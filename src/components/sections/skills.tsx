import { Section } from "@/components/ui/section";
import { skills } from "@/data/portfolio";

export function Skills() {
  return (
    <Section id="skills" title="Stack" flush>
      {skills.map((group, i) => (
        <div
          key={group.label}
          className="grid grid-cols-[7.5rem_1fr] border-b border-border last:border-b-0 sm:grid-cols-[12rem_1fr]"
        >
          <div className="flex items-baseline gap-2 border-r border-border px-5 py-4 sm:px-7">
            <span className="text-xs tabular-nums text-muted">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-sm font-medium">{group.label}</span>
          </div>
          <div className="flex flex-wrap items-center gap-1.5 px-4 py-4 sm:px-5">
            {group.items.map((item) => (
              <span
                key={item}
                className="rounded-md border border-border bg-card px-2.5 py-1 text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </Section>
  );
}
