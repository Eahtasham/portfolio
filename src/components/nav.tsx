"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { useCommandMenu } from "@/components/command-palette";
import { profile } from "@/data/portfolio";

const LINKS = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
] as const;

export function Nav() {
  const { setOpen } = useCommandMenu();
  const [isMac, setIsMac] = useState(false);

  useEffect(() => {
    setIsMac(/mac/i.test(navigator.platform));
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background sm:bg-background/85 sm:backdrop-blur-md">
      <nav className="mx-auto flex h-14 max-w-2xl items-center justify-between gap-3 border-x border-border px-5 sm:px-7">
        <div className="flex items-center gap-0.5 text-sm">
          {LINKS.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="rounded-md px-2 py-1.5 text-muted transition-colors hover:bg-subtle hover:text-foreground sm:px-2.5"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md px-2 py-1.5 text-muted transition-colors hover:bg-subtle hover:text-foreground sm:px-2.5"
          >
            Résumé
          </a>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open command menu"
            className="flex h-9 items-center gap-2 rounded-lg border border-border bg-card pl-2.5 pr-2 text-sm text-muted transition-colors hover:bg-subtle"
          >
            <Search className="size-4" />
            <span className="hidden sm:inline">Search</span>
            <kbd className="ml-1 hidden rounded border border-border bg-subtle px-1.5 py-0.5 font-mono text-[10px] sm:inline">
              {isMac ? "⌘" : "Ctrl"} K
            </kbd>
          </button>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
