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
- One component per file, PascalCase filename matching the component. Exception: `src/components/ui/icons.tsx` holds the whole inline SVG icon set (`GitHubIcon`, `MailIcon`, …, plus the `socialIcons` map). Add new icons there, not as separate files.
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
- Off-site links and PDFs (the CV in public/) get `{...externalLinkProps(href)}` from `lib/externalLink.ts`: new tab, `rel="noopener noreferrer"`, and `aria-describedby` pointing at the hidden "(opens in a new tab)" note rendered once in layout.tsx. mailto and `#anchor` links are left alone.
- Contact links live once in `site.contacts`, each with an `icon` key into `socialIcons`; `ui/SocialLinks` renders them icon-only in the hero header and footer, and the Contact section renders them as text.
- `site.description` feeds the meta description and the share image only (not shown on the page); keep it under ~160 characters. The hero's on-page text is `site.summary`.
- `site.url` (metadataBase for absolute share links) uses Vercel's `VERCEL_PROJECT_PRODUCTION_URL` and falls back to localhost; on another host the fallback must be the real domain.

## Design

- Minimal, modern, confident. Generous spacing, strong type hierarchy, max content width.
- Colors, fonts and spacing are CSS variables in globals.css. No hardcoded values in components.
  --bg #0a0a0a, --surface #141414, --border #27272a,
  --text #f5f5f5, --text-muted #a1a1aa, --accent #c8f31d, --glow #2a3214 (olive top-left radial wash)
- Accent color only for primary button, links and small highlights.
- Buttons are pills: filled accent with dark text (primary), outlined with an arrow (secondary). Height follows the input device, not the screen: 56px by default for touch, `pointer-fine:h-12` (48px) for mouse and trackpad. On phones the hero buttons sit side by side in a two-column grid.
- The hero name is the largest text on the page: 48px, `lg` 60px, `xl` 80px. Section titles stay below it (36px, `lg` 48px).
- The hero is not full-screen: it flows from the nav with a fixed gap. Pinning content to the bottom of the screen pushed the buttons off laptop screens and left a large gap on tall ones.
- Avoid purple/indigo gradients and generic template looks.

## Animation

- None until asked. Later: CSS first, play once, subtle, only to guide attention or give feedback.
- Always respect prefers-reduced-motion.

## Quality

- Semantic HTML, keyboard navigation, visible focus states, WCAG AA contrast.
- next/image for images.
