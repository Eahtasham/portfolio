import { SiteShell } from "@/components/site-shell";
import { Hero } from "@/components/sections/hero";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Education } from "@/components/sections/education";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Blog } from "@/components/sections/blog";
import { profile, socialLinks } from "@/data/portfolio";

export default function Home() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://eahtasham.xyz/#person",
    "name": profile.name,
    "jobTitle": profile.role,
    "url": "https://eahtasham.xyz",
    "email": profile.email,
    "image": `https://eahtasham.xyz${profile.avatar}`,
    "description": profile.bio,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kolkata",
      "addressRegion": "West Bengal",
      "addressCountry": "India",
    },
    "sameAs": socialLinks
      .filter((link) => !link.url.startsWith("mailto:"))
      .map((link) => link.url),
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": "University of Calcutta",
      },
    ],
    "knowsAbout": [
      "Software Engineering",
      "AI Automation",
      "Full Stack Development",
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "MySQL",
      "Java",
      "Python",
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Connect2Learn",
    },
  };

  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "mainEntity": {
      "@id": "https://eahtasham.xyz/#person",
    },
    "description": `Professional developer portfolio and profile of ${profile.name}.`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />
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
    </>
  );
}
