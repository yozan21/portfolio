# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# Portfolio

Personal portfolio for a full-stack developer. Goal: clear, fast, modern, and easy to restyle later.

## Commands

- `npm run dev` / `npm run build` / `npm run start` (port 3000) / `npm run lint`
- Type-check: `npx tsc --noEmit`
- No test suite. Verify with lint, type-check and `npm run build`; the build output marks each route `○` (prerendered) or `ƒ` (per request). All routes are expected to stay `○`.

## Stack

- Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4
- This Next.js version differs from older ones: read the relevant guide in `node_modules/next/dist/docs/` before writing Next-specific code (see AGENTS.md, which `next dev` regenerates).
- No new dependencies without asking. No CMS, no database.
- Fonts via next/font: Outfit (headings: hero name 300, section titles 500), Geist (body)

## Structure

- Follow this layout. No new top-level folders without asking.
  - src/app: layout.tsx (fonts, metadata), page.tsx (composes sections only), globals.css (tokens)
  - src/components/sections: Hero, Projects, Skills, Contact, Footer
  - src/components/ui: shared pieces, only after something is used twice
  - src/content: site.ts, projects.ts, skills.ts (all text, links, data)
  - src/lib: small helpers
  - src/assets/fonts: TTF files for generated images (see Architecture)
- One component per file, PascalCase filename matching the component.
- No inline text or data in JSX. It lives in src/content.
- No barrel files. Use the "@/" import alias.
- Server components by default. Add "use client" only for state/effects, in a small component.
- Split any component that passes ~150 lines.
- Comments: concise header comment per file. TSDoc without {type} braces in .ts files.

## Architecture

- Content-driven: sections render data from src/content. Section headings ("<Label/>" eyebrow, title, summary) come from `site.sections` and render through `ui/SectionHeading`; each section passes an `id` used by its `aria-labelledby`.
- layout.tsx wraps `children` in `<main>` and renders `Footer` after it, so page.tsx stays markup-free.
- Tailwind v4 has no tailwind.config: tokens are CSS variables in `:root` in globals.css, mapped to utilities in `@theme inline` (e.g. `--text-muted` → `text-muted`, `--accent` → `bg-accent`). Heading font and weight are set in the base layer, not per component.
- `cacheComponents: true` in next.config.ts: reading the current time, randomness or the filesystem during prerender fails the route or makes it dynamic. Wrap such work in an async `"use cache"` function (see `Footer` and `lib/loadFont.ts`).
- Share image and favicon are generated with next/og in `app/opengraph-image.tsx` and `app/icon.tsx`. next/og cannot read CSS variables or woff2, so these files repeat the color hex values (keep them in sync with globals.css) and load TTFs from src/assets/fonts through the cached `loadFont`.
- `site.url` (metadataBase for absolute share links) uses Vercel's `VERCEL_PROJECT_PRODUCTION_URL` and falls back to localhost; on another host the fallback must be the real domain.

## Design

- Minimal, modern, confident. Generous spacing, strong type hierarchy, max content width.
- Colors, fonts and spacing are CSS variables in globals.css. No hardcoded values in components.
  --bg #0a0a0a, --surface #141414, --border #27272a,
  --text #ededed, --text-muted #a1a1aa, --accent #c8f31d, --glow #2a3214 (olive top-left radial wash)
- Accent color only for primary button, links and small highlights.
- Buttons are pills: filled accent with dark text (primary), outlined with an arrow (secondary).
- Avoid purple/indigo gradients and generic template looks.

## Animation

- None until asked. Later: CSS first, play once, subtle, only to guide attention or give feedback.
- Always respect prefers-reduced-motion.

## Quality

- Semantic HTML, keyboard navigation, visible focus states, WCAG AA contrast.
- next/image for images.
