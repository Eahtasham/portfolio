import { blog } from "@/data/portfolio";

export type Post = {
  title: string;
  brief: string;
  url: string;
  slug: string;
  publishedAt: string;
  readTimeInMinutes: number | null;
};

function decode(s: string): string {
  return s
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;|&apos;/g, "'")
    .trim();
}

function tag(block: string, name: string): string {
  const m = block.match(new RegExp(`<${name}>([\\s\\S]*?)</${name}>`));
  return m ? decode(m[1]) : "";
}

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Hashnode's free GraphQL API was moved to a paid plan, so we read the
 * publication's public RSS feed instead (https://<host>/rss.xml).
 */
export async function getPosts(first = 6): Promise<Post[]> {
  try {
    const res = await fetch(`https://${blog.hashnodeHost}/rss.xml`, {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; PortfolioBot/1.0)",
        Accept: "application/rss+xml, application/xml, text/xml",
      },
      next: { revalidate: 3600 },
    });

    if (!res.ok) return [];

    const xml = await res.text();
    const blocks = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].map((m) => m[1]);

    return blocks.slice(0, first).map((block) => {
      const link = tag(block, "link");
      const content = tag(block, "content:encoded");
      const description = tag(block, "description");
      const text = stripHtml(content || description);
      const words = text.split(/\s+/).filter(Boolean).length;

      return {
        title: tag(block, "title"),
        brief: stripHtml(description || content).slice(0, 200),
        url: link,
        slug: tag(block, "guid") || link,
        publishedAt: tag(block, "pubDate"),
        readTimeInMinutes: words > 0 ? Math.max(1, Math.round(words / 200)) : null,
      };
    });
  } catch {
    return [];
  }
}
