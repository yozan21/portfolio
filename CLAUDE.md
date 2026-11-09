# Portfolio

Personal portfolio for a full-stack developer. Goal: clear, fast, modern, and easy to restyle later.

## Stack

- Next.js (App Router), TypeScript, Tailwind CSS
- No new dependencies without asking. No CMS, no database.
- Fonts via next/font: Space Grotesk (headings), Geist (body)

## Structure

- Follow this layout. No new top-level folders without asking.
  - src/app: layout.tsx (fonts, metadata), page.tsx (composes sections only), globals.css (tokens)
  - src/components/sections: Hero, Projects, Skills, Contact
  - src/components/ui: shared pieces, only after something is used twice
  - src/content: site.ts, projects.ts, skills.ts (all text, links, data)
  - src/lib: small helpers
- One component per file, PascalCase filename matching the component.
- No inline text or data in JSX. It lives in src/content.
- No barrel files. Use the "@/" import alias.
- Server components by default. Add "use client" only for state/effects, in a small component.
- Split any component that passes ~150 lines.

## Design

- Minimal, modern, confident. Generous spacing, strong type hierarchy, max content width.
- Colors, fonts and spacing are CSS variables in globals.css. No hardcoded values in components.
  --bg #0a0a0a, --surface #141414, --border #27272a,
  --text #ededed, --text-muted #a1a1aa, --accent #34d399
- Accent color only for primary button, links and small highlights.
- Avoid purple/indigo gradients and generic template looks.

## Animation

- None until asked. Later: CSS first, play once, subtle, only to guide attention or give feedback.
- Always respect prefers-reduced-motion.

## Quality

- Semantic HTML, keyboard navigation, visible focus states, WCAG AA contrast.
- next/image for
