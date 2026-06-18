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
  description: "Writing on web development, AI, and building things.",
};

export default async function BlogPage() {
  const posts = await getPosts(20);
  const profileUrl = `https://${blog.hashnodeHost}`;

  return (
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
  );
}
