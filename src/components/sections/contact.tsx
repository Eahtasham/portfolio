import { Mail } from "lucide-react";
import { Section } from "@/components/ui/section";
import { contacts } from "@/data/portfolio";
import {
  DiscordIcon,
  GitHubIcon,
  LinkedInIcon,
  TelegramIcon,
  TwitterIcon,
} from "@/components/icons";

const CHANNELS = [
  { label: "Email", value: contacts.email, href: `mailto:${contacts.email}`, Icon: Mail },
  { label: "GitHub", value: "@Eahtasham", href: contacts.github, Icon: GitHubIcon },
  {
    label: "LinkedIn",
    value: "eahtasham-ummam",
    href: contacts.linkedin,
    Icon: LinkedInIcon,
  },
  { label: "Twitter", value: "@Eahtasham_", href: contacts.twitter, Icon: TwitterIcon },
  { label: "Telegram", value: "@Eahtasham", href: contacts.telegram, Icon: TelegramIcon },
  {
    label: "Discord",
    value: contacts.discord,
    href: "https://discord.com/users/",
    Icon: DiscordIcon,
  },
];

export function Contact() {
  return (
    <Section id="contact" title="Get in touch">
      <p className="max-w-xl text-[15px] leading-relaxed text-foreground/85">
        Have a project, a role, or just want to say hi? My inbox is always open —
        I&apos;ll try to get back to you as soon as I can.
      </p>

      <a
        href={`mailto:${contacts.email}`}
        className="mt-5 inline-flex items-center gap-2 rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
      >
        <Mail className="size-4" />
        Say hello
      </a>

      <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {CHANNELS.map(({ label, value, href, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 transition-colors hover:border-ring hover:bg-subtle"
          >
            <span className="flex size-9 items-center justify-center rounded-lg bg-subtle text-muted transition-colors group-hover:text-foreground">
              <Icon className="size-[18px]" />
            </span>
            <span className="min-w-0">
              <span className="block text-xs text-muted">{label}</span>
              <span className="block truncate text-sm font-medium">{value}</span>
            </span>
          </a>
        ))}
      </div>
    </Section>
  );
}
