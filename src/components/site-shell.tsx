import type { ReactNode } from "react";
import { CommandProvider } from "@/components/command-palette";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <CommandProvider>
      <div className="flex min-h-dvh flex-col">
        <Nav />
        <main className="flex flex-1 flex-col">
          {children}
          {/* filler keeps the centered side-lines running down to the footer */}
          <div
            aria-hidden
            className="mx-auto w-full max-w-2xl flex-1 border-x border-border"
          />
        </main>
        <Footer />
      </div>
    </CommandProvider>
  );
}
