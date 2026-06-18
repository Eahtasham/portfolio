import { Section } from "@/components/ui/section";
import { about } from "@/data/portfolio";

export function About() {
  const facts: { label: string; value: string }[] = [
    { label: "Age", value: String(about.personal.age) },
    { label: "Nationality", value: about.personal.nationality },
    { label: "Languages", value: about.personal.languages.join(", ") },
    { label: "Hobbies", value: about.personal.hobbies.join(", ") },
  ];

  return (
    <Section id="about" title="About">
      <div className="flex max-w-xl flex-col gap-4 text-[15px] leading-relaxed text-foreground/85">
        <p>{about.summary}</p>
        <p>{about.professional}</p>
      </div>

      <dl className="mt-8 grid grid-cols-2 gap-x-8 gap-y-5">
        {facts.map((f) => (
          <div key={f.label}>
            <dt className="text-xs font-medium uppercase tracking-wide text-muted">
              {f.label}
            </dt>
            <dd className="mt-1 text-sm">{f.value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-8 grid gap-8 sm:grid-cols-2">
        <div>
          <h3 className="mb-3 text-xs font-medium uppercase tracking-wide text-muted">
            Achievements
          </h3>
          <ul className="flex flex-col gap-3">
            {about.achievements.map((a) => (
              <li key={a.title}>
                <p className="text-sm font-medium leading-snug">{a.title}</p>
                <p className="mt-0.5 text-xs leading-relaxed text-muted">
                  {a.description}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-xs font-medium uppercase tracking-wide text-muted">
            Certifications
          </h3>
          <ul className="flex flex-col gap-3">
            {about.certifications.map((c) => (
              <li key={c.name}>
                <a
                  href={c.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium leading-snug underline-offset-4 hover:underline"
                >
                  {c.name}
                </a>
                <p className="mt-0.5 text-xs text-muted">
                  {c.issuer} · {c.year}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
