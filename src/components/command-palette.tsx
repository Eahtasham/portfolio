"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { Command } from "cmdk";
import {
  ArrowUpRight,
  FileText,
  FolderGit2,
  Mail,
  Monitor,
  Moon,
  Sun,
} from "lucide-react";
import { useTheme } from "next-themes";
import { projects, profile, socialLinks } from "@/data/portfolio";
import { SocialIcon } from "@/components/icons";

export const NAV_SECTIONS = [
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "about", label: "About" },
  { id: "blog", label: "Blog" },
  { id: "contact", label: "Contact" },
] as const;

const GROUP_CLASS =
  "px-1 text-xs font-medium text-muted **:[[cmdk-group-heading]]:px-2 **:[[cmdk-group-heading]]:py-1.5";

const CommandContext = createContext<{ setOpen: (v: boolean) => void } | null>(
  null
);

export function useCommandMenu() {
  const ctx = useContext(CommandContext);
  if (!ctx) throw new Error("useCommandMenu must be used within CommandProvider");
  return ctx;
}

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", `#${id}`);
  } else {
    // section lives on the home page — navigate there
    window.location.href = `/#${id}`;
  }
}

export function CommandProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const { setTheme } = useTheme();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const run = useCallback((fn: () => void) => {
    setOpen(false);
    // let the dialog close before scrolling/navigating
    requestAnimationFrame(fn);
  }, []);

  return (
    <CommandContext.Provider value={{ setOpen }}>
      {children}
      <Command.Dialog
        open={open}
        onOpenChange={setOpen}
        label="Command menu"
        overlayClassName="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
        contentClassName="fixed left-1/2 top-[18%] z-50 w-[92vw] max-w-lg -translate-x-1/2"
      >
        <div className="overflow-hidden rounded-xl border border-border bg-card shadow-2xl">
          <Command.Input
            placeholder="Search sections, projects, links…"
            className="w-full border-b border-border bg-transparent px-4 py-3.5 text-sm outline-none placeholder:text-muted"
          />
          <Command.List className="max-h-80 overflow-y-auto overflow-x-hidden p-2">
            <Command.Empty className="px-3 py-8 text-center text-sm text-muted">
              No results found.
            </Command.Empty>

            <Command.Group
              heading="Navigate"
              className={GROUP_CLASS}
            >
              {NAV_SECTIONS.map((s) => (
                <Item
                  key={s.id}
                  value={`go ${s.label}`}
                  onSelect={() => run(() => scrollToSection(s.id))}
                >
                  <ArrowUpRight className="size-4 text-muted" />
                  <span>Go to {s.label}</span>
                </Item>
              ))}
            </Command.Group>

            <Command.Group
              heading="Projects"
              className={GROUP_CLASS}
            >
              {projects.slice(0, 6).map((p) => (
                <Item
                  key={p.id}
                  value={`project ${p.title} ${p.category}`}
                  onSelect={() => run(() => window.open(p.link, "_blank"))}
                >
                  <FolderGit2 className="size-4 text-muted" />
                  <span className="truncate">{p.title}</span>
                  <span className="ml-auto text-xs text-muted">{p.year}</span>
                </Item>
              ))}
            </Command.Group>

            <Command.Group
              heading="Actions"
              className={GROUP_CLASS}
            >
              <Item
                value="all projects work page"
                onSelect={() => run(() => (window.location.href = "/projects"))}
              >
                <FolderGit2 className="size-4 text-muted" />
                <span>View all projects</span>
              </Item>
              <Item
                value="blog posts writing page"
                onSelect={() => run(() => (window.location.href = "/blog"))}
              >
                <ArrowUpRight className="size-4 text-muted" />
                <span>Read the blog</span>
              </Item>
              <Item
                value="resume cv download"
                onSelect={() => run(() => window.open(profile.resumeUrl, "_blank"))}
              >
                <FileText className="size-4 text-muted" />
                <span>Download Résumé</span>
              </Item>
              <Item
                value="email contact"
                onSelect={() =>
                  run(() => (window.location.href = `mailto:${profile.email}`))
                }
              >
                <Mail className="size-4 text-muted" />
                <span>Send an Email</span>
              </Item>
            </Command.Group>

            <Command.Group
              heading="Social"
              className={GROUP_CLASS}
            >
              {socialLinks
                .filter((l) => l.icon !== "mail")
                .map((l) => (
                  <Item
                    key={l.name}
                    value={`social ${l.name}`}
                    onSelect={() => run(() => window.open(l.url, "_blank"))}
                  >
                    <SocialIcon name={l.icon} className="size-4 text-muted" />
                    <span>{l.name}</span>
                  </Item>
                ))}
            </Command.Group>

            <Command.Group
              heading="Theme"
              className={GROUP_CLASS}
            >
              <Item value="theme light" onSelect={() => run(() => setTheme("light"))}>
                <Sun className="size-4 text-muted" />
                <span>Light</span>
              </Item>
              <Item value="theme dark" onSelect={() => run(() => setTheme("dark"))}>
                <Moon className="size-4 text-muted" />
                <span>Dark</span>
              </Item>
              <Item value="theme system" onSelect={() => run(() => setTheme("system"))}>
                <Monitor className="size-4 text-muted" />
                <span>System</span>
              </Item>
            </Command.Group>
          </Command.List>
        </div>
      </Command.Dialog>
    </CommandContext.Provider>
  );
}

function Item({
  value,
  onSelect,
  children,
}: {
  value: string;
  onSelect: () => void;
  children: ReactNode;
}) {
  return (
    <Command.Item
      value={value}
      onSelect={onSelect}
      className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-sm text-foreground outline-none data-[selected=true]:bg-subtle"
    >
      {children}
    </Command.Item>
  );
}
