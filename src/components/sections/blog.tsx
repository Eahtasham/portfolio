import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { PostList } from "@/components/post-list";
import { getPosts } from "@/lib/hashnode";
import { blog } from "@/data/portfolio";

export async function Blog() {
  const posts = await getPosts(2);
  const profileUrl = `https://${blog.hashnodeHost}`;

  return (
    <Section
      id="blog"
      title="Blog"
      action={
        posts.length > 0 && (
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-foreground"
          >
            More
            <ArrowRight className="size-3.5" />
          </Link>
        )
      }
    >
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
    </Section>
  );
}
