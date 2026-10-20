# Abhay Jain — Power & Analog Leadership

Editorial portfolio website for Abhay Jain, designed for senior executives, board members, investors, government and ecosystem partners, and founders evaluating an advisory or operating conversation.

## Site

- Canonical domain: https://abhayjain.net
- Vercel preview: https://abhay-jain-vercel.vercel.app

## Positioning

This is an executive credibility site, not a blog, content hub, résumé archive, or marketing funnel.

The design prioritizes:

- Fast comprehension within 30–60 seconds
- Clear current focus and operating range
- Curated proof instead of exhaustive history
- High contrast, whitespace, and restrained motion
- Source-backed career and education details, without invented scale or P&L figures
- One professional contact channel: LinkedIn

## Pages

- `/` — current Renesas role, focus, selected experience, selected work, and a single contact CTA
- `/about-me` — concise biography, experience timeline, education, five recognitions, and five curated publications/patent records
- `/about` — permanent redirect to `/about-me`
- `/contact-me` — LinkedIn contact page; no nonfunctional form

The former `/ideas-frameworks` URL permanently redirects to selected work. The source page had no verifiable article archive; the portfolio does not create one.

## Visual system

- Warm paper background: `#F3F0E8`
- Ink: `#14181C`
- Copper accent: `#B4532A`
- Serif display typography paired with a clean sans-serif body face
- Hairline rules and editorial grid instead of card-heavy UI
- Portrait-led hero with a restrained editorial frame
- No decorative looping motion; interactions are limited to subtle hover/focus states

Avoid adding gradients, glassmorphism, particles, 3D scenes, cursor effects, loud parallax, or decorative animation that does not clarify the work.

## Local development

Requirements: Node.js 22+

```bash
npm install
npm run dev
```

The local preview runs at `http://localhost:3000`.

## Verification

```bash
npm run lint
npm run build
```

The project uses the standard Next.js App Router and Vercel's native Next.js build detection.

## Project structure

```text
app/
  page.tsx             Home page and homepage content
  about/page.tsx       About page and selected biography
  about-me/page.tsx    Source-compatible About route
  contact-me/          Source-compatible Contact route
  source-data.ts       Verified source copy, links, images, roles, education, and publications
  globals.css          Design tokens, layout, responsive styles, and motion
  layout.tsx           Metadata and font setup
public/
  Abhay_Jain_profile_pic.jpg    Profile portrait used by the site
  abhay-kalam-clean.webp        Responsive, compressed conversation photo
  favicon.svg          AJ favicon
  robots.txt           Robots policy
  sitemap.xml          Source-compatible route sitemap
```

## Content guardrails

The current Renesas title and India business-building scope are sourced from Renesas’s public speaker biography. Stanford GSB identifies Abhay as an Engagement Manager at McKinsey; the site uses a point-in-time label rather than implying an unverified employment range. Confirm exact employment dates and any P&L, team-size, or business-scale figures with Abhay before adding them. The public email is intentionally omitted until confirmed.

The source material is the existing `abhayjain.net` site, public LinkedIn profile, Renesas’s speaker biography, Stanford GSB, and the original publication, technical paper, patent, and image links. Do not invent dates, metrics, projects, or publication details.

## Handoff notes for Bolt

1. Preserve the source-compatible route structure unless there is a clear content reason to change it.
2. Keep the editorial visual language and locally stored source images.
3. Run `npm run lint` and `npm run build` after changes.
4. Do not change `abhayjain.net` DNS or deployment settings without approval.
5. Before final launch, confirm exact career-date ranges and any publishable business scope or metrics with Abhay.
