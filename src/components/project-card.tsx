import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { GitHubIcon } from "@/components/icons";
import type { Project } from "@/data/portfolio";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-ring">
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block aspect-[16/10] overflow-hidden bg-subtle"
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 640px) 100vw, 320px"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </a>

      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold leading-tight">{project.title}</h3>
          <span className="shrink-0 text-xs text-muted">{project.year}</span>
        </div>
        <p className="mt-0.5 text-xs text-muted">
          {project.role} · {project.category}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-foreground/80">
          {project.description}
        </p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-md bg-subtle px-2 py-0.5 text-xs text-muted"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-4 flex items-center gap-4 pt-1 text-sm">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-medium transition-colors hover:text-accent"
          >
            Live <ArrowUpRight className="size-3.5" />
          </a>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-foreground"
            >
              <GitHubIcon className="size-4" />
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
