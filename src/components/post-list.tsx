import { ArrowUpRight } from "lucide-react";
import type { Post } from "@/lib/hashnode";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function PostList({ posts }: { posts: Post[] }) {
  return (
    <ul className="flex flex-col divide-y divide-border">
      {posts.map((post) => (
        <li key={post.slug}>
          <a
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-1 py-4"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-medium leading-snug transition-colors group-hover:text-accent">
                {post.title}
              </h3>
              <ArrowUpRight className="mt-0.5 size-4 shrink-0 text-muted transition-colors group-hover:text-accent" />
            </div>
            <p className="line-clamp-2 text-sm text-muted">{post.brief}</p>
            <p className="mt-1 text-xs text-muted">
              {formatDate(post.publishedAt)}
              {post.readTimeInMinutes
                ? ` · ${post.readTimeInMinutes} min read`
                : ""}
            </p>
          </a>
        </li>
      ))}
    </ul>
  );
}
