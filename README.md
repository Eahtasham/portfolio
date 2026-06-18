# Minimal Portfolio

A clean, fast, single‑page developer portfolio built with the Next.js App Router. Content is fully data‑driven, the layout uses a page‑wide grid aesthetic with light/dark theming, and there's a ⌘K command palette for quick navigation.

## Features

- **Single‑page layout** — Hero, Experience, Projects, Skills, Education, About, Contact, and Blog, separated by full‑width grid lines.
- **Experience timeline** — companies with multiple roles (LinkedIn‑style), per‑company collapse, auto‑computed durations, and company logos.
- **Light / dark mode** — system‑aware, toggle in the nav, no flash on load (`next-themes`).
- **⌘K command palette** — fuzzy‑search to jump to sections, open projects, switch theme, or hit social links (`cmdk`).
- **Dedicated routes** — `/projects` (all projects) and `/blog` (all posts).
- **Blog via Hashnode RSS** — pulls the latest posts from your Hashnode publication's public RSS feed, cached hourly.
- **SEO ready** — Open Graph / Twitter metadata driven by your profile data.

## Tech Stack

- [Next.js 16](https://nextjs.org) (App Router) + [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com)
- [next-themes](https://github.com/pacocoursey/next-themes) — theming
- [cmdk](https://cmdk.paco.me/) — command palette
- [lucide-react](https://lucide.dev) — UI icons (brand icons are inline SVGs)

## Getting Started

**Prerequisites:** Node.js 18.18+ (Node 22 recommended) and [pnpm](https://pnpm.io).

```bash
pnpm install      # install dependencies
pnpm dev          # start the dev server at http://localhost:3000
pnpm build        # production build
pnpm start        # serve the production build
pnpm lint         # run ESLint
```

## Project Structure

```
src/
├─ app/
│  ├─ layout.tsx          # root layout, ThemeProvider, SEO metadata
│  ├─ page.tsx            # home page (assembles all sections)
│  ├─ globals.css         # Tailwind v4 + light/dark theme tokens
│  ├─ projects/page.tsx   # all projects
│  └─ blog/page.tsx       # all blog posts
├─ components/
│  ├─ site-shell.tsx      # nav + footer + page grid frame
│  ├─ nav.tsx, footer.tsx
│  ├─ theme-provider.tsx, theme-toggle.tsx
│  ├─ command-palette.tsx # ⌘K menu
│  ├─ icons.tsx           # brand SVGs + social icon map
│  ├─ project-card.tsx, post-list.tsx
│  ├─ ui/                 # Band (full-width grid row) + Section primitives
│  └─ sections/           # hero, experience, projects, skills, education, about, contact, blog
├─ data/
│  └─ portfolio.ts        # ← all content lives here
└─ lib/
   ├─ utils.ts            # cn(), formatDuration(), companySpan()
   └─ hashnode.ts         # Hashnode RSS fetcher
public/images/            # avatar, project shots, company/school logos
```

## Customization

Almost everything is edited in **[`src/data/portfolio.ts`](src/data/portfolio.ts)**:

- `profile` — name, role, bio, location, email, avatar, résumé link.
- `socialLinks` / `contacts` — social and contact channels.
- `experiences` — companies and their roles. Each role has a `period` like `"Jan 2026 – Present"`; durations and the collapsed company span are computed automatically. Use `current: true` for the active role/company.
- `projects` — title, description, tech, links, image, year, etc. The home page previews the first 4; the rest appear on `/projects`.
- `skills` — grouped tech stack rows.
- `education`, `about` — degrees, personal facts, achievements, certifications.
- `blog.hashnodeHost` — your Hashnode host (e.g. `eahtasham.hashnode.dev`).

**Images:** drop files in `public/images/...` and reference them with absolute paths (e.g. `/images/projects/foo.png`). Remote image hosts are allow‑listed in [`next.config.ts`](next.config.ts).

**Theme colors:** tweak the CSS variables in [`src/app/globals.css`](src/app/globals.css) (`--background`, `--foreground`, `--accent`, `--border`, …) under `:root` and `.dark`.

## Blog (Hashnode)

Hashnode moved its public **GraphQL** API to a paid plan, so this project reads the free, public **RSS feed** at `https://<your-host>/rss.xml` instead. Set `blog.hashnodeHost` in `portfolio.ts` and posts populate automatically (2 on the home page, more on `/blog`). The feed is fetched with an hourly `revalidate` cache, and the section falls back to a "visit my blog" link if the feed is unavailable.

## Deployment

Deploy to [Vercel](https://vercel.com/new) (zero‑config) or any host that supports Next.js:

```bash
pnpm build && pnpm start
```

No environment variables are required.
