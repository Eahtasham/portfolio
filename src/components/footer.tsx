import { profile, socialLinks } from "@/data/portfolio";
import { SocialIcon } from "@/components/icons";

export function Footer() {
  return (
    <footer className="w-full border-t border-border">
      <div className="mx-auto flex max-w-2xl flex-col gap-4 border-x border-border px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-7">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js &
          Tailwind.
        </p>
        <div className="flex items-center gap-1">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="flex size-9 items-center justify-center rounded-lg text-muted transition-colors hover:bg-subtle hover:text-foreground"
            >
              <SocialIcon name={link.icon} className="size-4.5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
