import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/portfolio";

const PREVIEW = 4;

export function Projects() {
  const visible = projects.slice(0, PREVIEW);

  return (
    <Section
      id="projects"
      title="Projects"
      action={
        projects.length > PREVIEW && (
          <Link
            href="/projects"
            className="inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-foreground"
          >
            All {projects.length}
            <ArrowRight className="size-3.5" />
          </Link>
        )
      }
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {visible.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>

      {projects.length > PREVIEW && (
        <div className="mt-6 flex justify-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium transition-colors hover:bg-subtle"
          >
            Show more
            <ArrowRight className="size-4" />
          </Link>
        </div>
      )}
    </Section>
  );
}
