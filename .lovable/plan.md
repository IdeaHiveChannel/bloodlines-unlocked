# Dr. Mandeep Sagar — Design Bible & Implementation Plan

Build a single authoritative `DESIGN_BIBLE.md` (~2,000 lines) at the project root, then refactor the codebase to conform to it. Poppins is the sole typeface. Sentence case is the default. Uppercase is reserved for small labels, stats, nav accents, timeline markers.

## Part A — Author `DESIGN_BIBLE.md`

Single source of truth, 18 chapters:

1. **Brand Principles** — 50+ rules (max 2 accents per view, never animate body text, headlines animate once, ≤72 chars per paragraph, ≤900px content width, 95/5 dark-blue/red ratio, no fabricated facts, etc.)
2. **Typography** — Poppins only, weights 100–900, full scale (Display XXL → Caption), letter-spacing, line-height, clamp() values, sentence-case philosophy, usage rules
3. **Color Tokens** — Primary, Secondary, Accent, Glow, Surface, Glass, Stroke, Divider, Shadow, Overlay, Video Overlay, Gradients, Hover, Pressed, Disabled — every value as OKLCH + hex
4. **Spacing Scale** — 4/8/12/16/20/24/32/40/48/64/80/96/120/160 with usage rules per token
5. **Radius** — Cards/Buttons/Inputs/Images/Videos/Modal/Tags/Glass
6. **Motion** — Duration tokens (fast 180 / med 320 / slow 700 / hero 1400 / camera 2000), bezier curves, spring configs, scroll choreography, reduced-motion fallbacks
7. **Grid & Responsive** — Breakpoints (mobile/tablet/desktop/ultrawide), columns, gutters, margins, container max
8. **Photography Direction** — Portrait, OR, conference, patient, equipment: lens, lighting, grading, wardrobe, expression
9. **Video Direction** — Per-section: camera, fps, movement, lighting, duration, transitions
10. **3D Style Guide** — Material, lighting, polycount, shadows, transparency, animation speed
11. **Icon System** — Lucide subset, stroke, weight, hover, animation, color
12. **Component Library** — Specs + props for Button, Glass Card, Timeline, Doctor Card, Procedure Card, Condition Card, Section, Container, Cursor, Modal, Drawer, Navbar, Footer, Tabs, Accordion, Gallery, Video, Statistics, Progress
13. **Buttons & Inputs** — Every variant (primary/secondary/ghost/floating/medical-CTA/FAB/icon) and every state (hover/pressed/loading/disabled/focus); form inputs, validation, calendar, dropdown, time picker
14. **Interactive System** — Hover/scroll/click/touch/keyboard/cursor/mobile behaviors
15. **Scroll Choreography** — Hero → Camera → Anatomy → Body → Procedure → Timeline → Footer, exact triggers and progress mappings
16. **Medical Storytelling Copy** — Hero headline, sub, CTAs, statistics, microcopy, a11y labels for every section
17. **Educational Copy** — Every condition, procedure, timeline stage, tooltip, label, caption (documentary tone, no fabricated stats/testimonials, `[to be confirmed]` placeholders for unverified bio facts)
18. **A11y & Performance** — reduced-motion, keyboard, focus, Lighthouse targets, lazy loading, R3F frameloop rules

## Part B — Refactor codebase to the Bible

After the Bible is written and approved:

1. **Fonts** — Replace Fraunces / Inter Tight / JetBrains Mono with Poppins (100–900) via `<link>` in `__root.tsx`; update `--font-display`, `--font-sans`, `--font-mono` (mono kept only if Bible keeps it; current plan: drop mono, use Poppins 500 for labels)
2. **Tokens in `src/styles.css`** — Add full color, spacing, radius, motion, shadow tokens from Bible; keep OKLCH + map shadcn semantic tokens
3. **Utilities** — Rewrite `text-display`, `text-mono-label`, add `text-display-xxl`, `text-display-xl`, `text-h1…h3`, `text-body-lg`, `text-caption`, `text-stat`, `text-nav` per scale; add motion utilities (`ease-hero`, `dur-camera`, etc.)
4. **Copy rewrite** — Convert every headline in Hero / Anatomy / Procedures / Recovery / Journey / Doctor / Consultation / Footer from current uppercase display to sentence-case per Bible; expand `src/lib/content.ts` with full educational copy table
5. **Component pass** — Update Button, Card, Input variants to Bible specs; ensure all states (hover/pressed/loading/disabled/focus) match
6. **Verify** — Build + visit `/` and each deep route in Playwright at desktop, tablet, mobile to confirm typography scale, color usage, spacing, motion match Bible

## Technical notes

- Single CSS file, all tokens in `@theme inline` in `src/styles.css`
- Poppins via Google Fonts `<link>` (Tailwind v4 rule — no `@import` URL)
- Sentence case enforced in JSX copy, not via `text-transform`
- Red (`--blood`) usage audited: only inside SVG vessel fills
- All animations honor `prefers-reduced-motion`
- No new dependencies expected (already have framer-motion, lenis, R3F, lucide)

## Deliverables

1. `DESIGN_BIBLE.md` — committed at repo root
2. Refactored `src/styles.css`, `src/routes/__root.tsx`, all section components, `src/lib/content.ts`
3. Playwright screenshots verifying conformance

## Out of scope (flagged)

- Real doctor portrait, OR footage, angiography (stand-ins remain until user provides)
- Real bio/credentials (placeholders remain)
- Testimonials (omitted until real ones provided)
