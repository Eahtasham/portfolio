import { SiteShell } from "@/components/site-shell";
import { Hero } from "@/components/sections/hero";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Education } from "@/components/sections/education";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Blog } from "@/components/sections/blog";

export default function Home() {
  return (
    <SiteShell>
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <About />
      <Contact />
      <Blog />
    </SiteShell>
  );
}
