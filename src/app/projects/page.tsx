import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { Band } from "@/components/ui/band";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Projects",
  description: "A collection of things I've designed and built.",
};

export default function ProjectsPage() {
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

        <h1 className="mt-5 text-2xl font-bold tracking-tight">Projects</h1>
        <p className="mt-1 text-sm text-muted">
          {projects.length} things I&apos;ve designed and built.
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </Band>
    </SiteShell>
  );
}
