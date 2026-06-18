"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Section } from "@/components/ui/section";
import { experiences, type Experience as Exp, type Role } from "@/data/portfolio";
import { cn, companySpan, formatDuration } from "@/lib/utils";

export function Experience() {
  // only the most recent company (first in the list) is expanded by default
  const [open, setOpen] = useState<Record<string, boolean>>(() =>
    experiences[0] ? { [experiences[0].id]: true } : {}
  );

  const toggle = (id: string) =>
    setOpen((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <Section id="experience" title="Experience">
      <div className="flex flex-col gap-3">
        {experiences.map((exp) => (
          <ExperienceCard
            key={exp.id}
            exp={exp}
            open={!!open[exp.id]}
            onToggle={() => toggle(exp.id)}
          />
        ))}
      </div>
    </Section>
  );
}

function ExperienceCard({
  exp,
  open,
  onToggle,
}: {
  exp: Exp;
  open: boolean;
  onToggle: () => void;
}) {
  const span = companySpan(exp.roles.map((r) => r.period));
  const summary =
    exp.roles.length > 1
      ? `${exp.roles.length} roles · ${span}`
      : `${exp.roles[0].title} · ${span}`;

  return (
    <article className="overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-ring">
      <div className="flex items-center gap-3 p-4">
        <CompanyLogo logo={exp.companyLogo} company={exp.company} />

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            {exp.companyWebsite ? (
              <a
                href={exp.companyWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="truncate font-semibold decoration-muted/40 underline-offset-4 hover:underline"
              >
                {exp.company}
              </a>
            ) : (
              <span className="truncate font-semibold">{exp.company}</span>
            )}
            {exp.current && (
              <span
                className="size-2 shrink-0 rounded-full bg-blue-500"
                title="Currently working"
                aria-label="Currently working"
              />
            )}
          </div>
          <p className="truncate text-xs text-muted">{summary}</p>
        </div>

        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-label={open ? `Collapse ${exp.company}` : `Expand ${exp.company}`}
          className="-mr-1 flex size-8 shrink-0 items-center justify-center rounded-md text-muted transition-colors hover:bg-subtle hover:text-foreground"
        >
          <ChevronDown
            className={cn(
              "size-4 transition-transform duration-200",
              open && "rotate-180"
            )}
          />
        </button>
      </div>

      {open && (
        <div className="border-t border-border px-4 py-4">
          <ol className="flex flex-col">
            {exp.roles.map((role, i) => (
              <RoleItem
                key={role.title + role.period}
                role={role}
                last={i === exp.roles.length - 1}
              />
            ))}
          </ol>
        </div>
      )}
    </article>
  );
}

function RoleItem({ role, last }: { role: Role; last: boolean }) {
  const duration = formatDuration(role.period);

  return (
    <li
      className={cn(
        "relative pl-5",
        !last && "border-l border-border pb-5"
      )}
    >
      <span
        className={cn(
          "absolute -left-1.25 top-1 size-2.5 rounded-full border-2 border-card",
          role.current ? "bg-blue-500" : "bg-muted"
        )}
      />
      <div className="-mt-0.5">
        <div className="flex flex-wrap items-center gap-x-2">
          <h4 className="text-sm font-semibold">{role.title}</h4>
          {role.current && (
            <span className="rounded-full bg-blue-500/10 px-1.5 py-0.5 text-[10px] font-medium text-blue-500">
              Current
            </span>
          )}
        </div>
        <p className="mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs text-muted">
          <span>{role.type}</span>
          <Sep />
          <span>{role.period}</span>
          {duration && (
            <>
              <Sep />
              <span>{duration}</span>
            </>
          )}
        </p>

        {role.description && (
          <p className="mt-2 text-sm leading-relaxed text-foreground/85">
            {role.description}
          </p>
        )}

        {role.achievements.length > 0 && (
          <ul className="mt-2 flex flex-col gap-1.5">
            {role.achievements.map((a) => (
              <li
                key={a}
                className="flex gap-2 text-sm text-muted before:mt-1.75 before:size-1 before:shrink-0 before:rounded-full before:bg-muted"
              >
                {a}
              </li>
            ))}
          </ul>
        )}

        {role.technologies.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {role.technologies.map((t) => (
              <span
                key={t}
                className="rounded-md border border-border bg-subtle px-2 py-0.5 text-xs text-muted"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </li>
  );
}

function CompanyLogo({ logo, company }: { logo?: string; company: string }) {
  if (logo) {
    return (
      <span className="flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-border bg-white">
        <Image
          src={logo}
          alt={`${company} logo`}
          width={28}
          height={28}
          className="size-7 object-contain"
        />
      </span>
    );
  }
  return (
    <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-foreground text-sm font-bold text-background">
      {company.charAt(0).toUpperCase()}
    </span>
  );
}

function Sep() {
  return <span className="text-border">·</span>;
}
