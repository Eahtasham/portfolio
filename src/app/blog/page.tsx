import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { Band } from "@/components/ui/band";
import { PostList } from "@/components/post-list";
import { getPosts } from "@/lib/hashnode";
import { blog } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Blog",
  description: "Writing on web development, AI, and software engineering by Eahtasham Ummam.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog | Eahtasham Ummam",
    description: "Writing on web development, AI, and software engineering by Eahtasham Ummam.",
    url: "https://eahtasham.xyz/blog",
    type: "website",
  },
};

export default async function BlogPage() {
  const posts = await getPosts(20);
  const profileUrl = `https://${blog.hashnodeHost}`;

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Eahtasham Ummam's Blog",
    "description": "Writing on web development, AI, and software engineering by Eahtasham Ummam.",
    "url": "https://eahtasham.xyz/blog",
    "author": {
      "@type": "Person",
      "name": "Eahtasham Ummam",
      "url": "https://eahtasham.xyz",
    },
    "blogPost": posts.map((post) => {
      let dateISO: string | undefined = undefined;
      try {
        if (post.publishedAt) {
          dateISO = new Date(post.publishedAt).toISOString();
        }
      } catch {
        // fallback
      }
      return {
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.brief,
        "url": post.url,
        "datePublished": dateISO,
        "author": {
          "@type": "Person",
          "name": "Eahtasham Ummam",
        },
      };
    }),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <SiteShell>
        <Band topBorder={false} className="px-5 py-8 sm:px-7 sm:py-10">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          Back home
        </Link>

        <h1 className="mt-5 text-2xl font-bold tracking-tight">Blog</h1>
        <p className="mt-1 text-sm text-muted">
          Writing on web development, AI, and building things.
        </p>

        <div className="mt-6">
          {posts.length === 0 ? (
            <p className="text-sm text-muted">
              No posts to show right now.{" "}
              <a
                href={profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground underline underline-offset-4"
              >
                Visit my blog →
              </a>
            </p>
          ) : (
            <PostList posts={posts} />
          )}
        </div>
        </Band>
      </SiteShell>
    </>
  );
}
