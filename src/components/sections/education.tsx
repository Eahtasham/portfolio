import Image from "next/image";
import { Section } from "@/components/ui/section";
import { education } from "@/data/portfolio";

export function Education() {
  return (
    <Section id="education" title="Education">
      <div className="flex flex-col gap-4">
        {education.map((edu) => (
          <article
            key={edu.id}
            className="flex gap-3.5 rounded-xl border border-border bg-card p-4 transition-colors hover:border-ring"
          >
            {edu.logo ? (
              <span className="flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-border bg-white">
                <Image
                  src={edu.logo}
                  alt={`${edu.institution} logo`}
                  width={28}
                  height={28}
                  className="size-7 object-contain"
                />
              </span>
            ) : (
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-foreground text-sm font-bold text-background">
                {edu.institution.charAt(0)}
              </span>
            )}

            <div className="min-w-0 flex-1">
              <div className="flex flex-col gap-x-4 gap-y-0.5 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-semibold leading-tight">{edu.degree}</h3>
                <p className="shrink-0 text-sm text-muted sm:text-right">
                  {edu.year}
                </p>
              </div>
              <div className="flex flex-col gap-x-4 gap-y-0.5 sm:flex-row sm:items-baseline sm:justify-between">
                <p className="text-sm text-muted">
                  {edu.institution} · {edu.location}
                </p>
                <p className="shrink-0 text-sm text-muted sm:text-right">
                  GPA {edu.gpa}
                </p>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                {edu.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
