# Dr. Mandeep Sagar — Design Bible

> A single source of truth for the brand, the interface, the motion, the copy, and the engineering. Everything in the codebase conforms to this document. If a screen disagrees with this document, the screen is wrong.

**Project:** Personal brand and patient-education site for Dr. Mandeep Sagar — Vascular & Neuro Interventional Radiologist.
**Voice:** Documentary, calm, technically precise. Never salesy. Never theatrical. Never fabricated.
**Aesthetic:** Cinematic dark, premium medical, sentence-case editorial. 95% dark / white / blue / grey. 5% red — and only inside vessels.

---

## Table of contents

1. Brand principles (60 rules)
2. Typography system (Poppins-only)
3. Color tokens
4. Spacing system
5. Border radius
6. Elevation, shadow, glass
7. Motion system
8. Grid & responsive
9. Photography direction
10. Video direction
11. 3D style guide
12. Icon system
13. Buttons
14. Inputs & forms
15. Component library
16. Cursor system
17. Interactive system
18. Scroll choreography
19. Medical storytelling copy
20. Educational copy
21. Accessibility rules
22. Performance rules
23. Engineering architecture
24. Token reference (CSS)

---

## 1. Brand principles

These rules apply to every screen, every component, every commit. Treat them as guardrails, not suggestions.

1. **Sentence case is the default.** Headlines, buttons, navigation, card titles — all sentence case. Uppercase is reserved for: small section labels (≤12px), statistics, navigation accents, timeline markers, mono-style technical chips.
2. **One brand colour, one accent.** Never more than two accent colours on a single view. Blue is the brand. Red is reserved for blood. Everything else is dark, white, or grey.
3. **Red is anatomy, never UI.** `--blood` may only appear inside SVG vessel fills, blockage diagrams, and clot illustrations. It must never appear on a button, link, badge, border, or text.
4. **The 95/5 rule.** A given view is at least 95% dark/white/blue/grey. Red is the remaining ≤5%, only inside vessels.
5. **No fabricated facts.** No invented credentials, statistics, testimonials, awards, affiliations, patient counts, or success rates. Unverified bio facts render as visible `[to be confirmed]` placeholders.
6. **No fabricated testimonials.** The testimonials section does not exist until real ones are supplied with attribution and consent.
7. **No before/after deception.** The angiography comparison is labelled as a representational stand-in until real, anonymised cases are provided.
8. **Educational, not promotional.** Copy explains. It does not sell. It does not promise outcomes.
9. **Quote restraint.** A quote from Dr. Sagar appears at most once per page.
10. **One H1 per page.** Always.
11. **Maximum 72 characters per paragraph line.** Long paragraphs are wrapped to ≤900px content width.
12. **No section exceeds 1480px outer container.** Editorial reading copy maxes at 720px.
13. **Headlines animate once on first reveal.** They never animate again on re-scroll. Body text never animates.
14. **Motion is invitation, not noise.** If an animation does not improve comprehension or emotion, it is removed.
15. **Reduced motion is honoured.** `prefers-reduced-motion: reduce` disables parallax, scan reveal, 3D loops, particles, and scroll-driven choreography.
16. **Dark background is non-negotiable.** The site is dark. There is no light mode toggle. The dark is `#050B16`, not pure black.
17. **No drop shadows on text.** Text uses opacity and weight for hierarchy.
18. **One drop shadow style, used sparingly.** Surfaces use the elevation tokens defined in §6, not ad-hoc shadows.
19. **Borders are 1px and translucent.** `rgba(255,255,255,0.06–0.15)`. No hairline borders thicker than 1px on UI.
20. **Glass is restrained.** Backdrop blur is used at most once per viewport (navigation only, by default).
21. **No emojis in product UI.** Icons are Lucide only.
22. **No exclamation marks in body copy.** Calm voice.
23. **No ALL CAPS in body copy.** Only in §2 micro-labels.
24. **Numerals use tabular figures.** Statistics align vertically.
25. **Punctuation is en-dash for ranges, em-dash for clauses.** Never two hyphens.
26. **Curly quotes only.** `"like this"`, never `"like this"`.
27. **First word of a CTA is a verb.** "Book consultation", "Explore treatments", "Read condition".
28. **CTAs never end with a period.** Buttons are commands, not sentences.
29. **Links are not blue underlined. They are white with an animated underline on hover.** Blue is reserved for accent, glow, and vessel-related visuals.
30. **Body copy stays at 15–17px.** Never smaller than 13px on desktop.
31. **Mobile body copy is 15–16px minimum.** Never smaller than 14px.
32. **Touch targets are 44×44px minimum.** Always.
33. **Hover states require a matching focus state.** Every one.
34. **Focus rings are a 2px ring in `--accent` with 4px offset.** Never removed.
35. **Skeletons are never red, never animated faster than 1200ms.** Calm.
36. **Empty states explain, never apologise.** "Nothing matched. Try a broader term."
37. **Errors are sentence-case, not technical.** No stack traces in user UI.
38. **Loading is silent.** The ECG loader runs once per session via sessionStorage.
39. **Cursor takes over only on `pointer: fine`.** Touch and reduced-motion users see the native cursor.
40. **Cinematic moments stay below 1400ms.** Anything longer feels broken.
41. **Hero is single-viewport (100dvh).** It does not push below-fold content into ambiguity.
42. **Each chapter is a single intent.** If a section needs two intents, it is two sections.
43. **Chapter labels are persistent.** `Chapter 0X · Name` in `text-label` on every scene.
44. **The doctor's portrait is editorial, not stock.** Direct gaze. No smile. Studio rim light. White coat optional but never costume-coded.
45. **No medical jargon without translation.** Every term has a plain-language gloss within two sentences.
46. **Conditions never list survival rates or odds.** Patient-facing pages do not quantify risk.
47. **Procedures are described as stories, not steps.** Beats, not bullets.
48. **The recovery timeline is descriptive, not prescriptive.** Use "most patients", never "you will".
49. **The patient journey speaks in second-person plural where possible.** "What happens to you" frames the experience.
50. **The doctor speaks in third person on bio.** First-person only inside a single attributed quote.
51. **WhatsApp / phone / address are live or absent.** No placeholder digits like `+ ` or `+91-xxxx-xxxx`.
52. **External links open in the same tab unless they leave the medical context.** Telephone and WhatsApp URIs are `tel:` / `https://wa.me/`.
53. **Every route has unique meta.** Title, description, OG title, OG description. Never reuse the homepage tags on deep routes.
54. **Every image has alt text.** Decorative images use `alt=""`, not missing alt.
55. **Charts and diagrams have a written caption.** A diagram without a caption is incomplete.
56. **3D is suspended when off-screen.** R3F runs `frameloop="demand"` and pauses on IntersectionObserver hide.
57. **Particles are limited.** Max 30, max 4px, max 0.5 opacity.
58. **No autoplay video with sound.** Ever.
59. **No carousel as the primary nav.** Carousels are gallery-only.
60. **When in doubt, remove.** Premium feels empty before it feels busy.

---

## 2. Typography system

**One typeface: Poppins.** Loaded from Google Fonts with all nine weights (100–900). No serif, no second display face, no mono. Poppins 500 fills the role mono usually plays (small uppercase technical labels).

### 2.1 Loading

```html
<!-- src/routes/__root.tsx <head> -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" />
```

Token in `src/styles.css`:

```css
@theme inline {
  --font-display: "Poppins", ui-sans-serif, system-ui, sans-serif;
  --font-sans:    "Poppins", ui-sans-serif, system-ui, sans-serif;
  --font-mono:    "Poppins", ui-sans-serif, system-ui, sans-serif; /* labels */
}
```

### 2.2 Scale

Every entry locks size + weight + tracking + leading. Use `clamp()` for fluid scale.

| Token | Use | Size (clamp) | Weight | Tracking | Leading |
|---|---|---|---|---|---|
| `display-xxl` | Hero on home, footer mega type | `clamp(56px, 9vw, 96px)` | 700 | -0.04em | 0.95 |
| `display-xl`  | Section heroes, chapter overtitles | `clamp(44px, 6.4vw, 64px)` | 700 | -0.04em | 0.95 |
| `h1`          | Route headers (`/conditions`, `/about`) | `clamp(40px, 5.6vw, 56px)` | 700 | -0.03em | 1.02 |
| `h2`          | Major section titles | `clamp(32px, 4.6vw, 48px)` | 700 | -0.03em | 1.05 |
| `h3`          | Sub-section titles | `clamp(26px, 3.4vw, 36px)` | 600 | -0.02em | 1.1 |
| `section-title` | Editorial section openers | 32px | 600 | -0.02em | 1.15 |
| `procedure-title` | Procedure story title | 28px | 600 | -0.02em | 1.2 |
| `card-title`  | Cards, tiles, list items | 22px | 600 | -0.01em | 1.25 |
| `body-lg`     | Lead paragraph, hero sub | 18px | 400 | 0 | 1.7 |
| `body`        | Default paragraph | 16px | 400 | 0 | 1.65 |
| `small`       | Secondary paragraph | 14px | 400 | 0 | 1.6 |
| `caption`     | Image caption, footnote | 12px | 400 | 0 | 1.5 |
| `button`      | All buttons | 15px | 600 | 0.02em | 1 |
| `nav`         | Navigation items | 15px | 500 | 0.01em | 1 |
| `label`       | Uppercase micro-labels (`Chapter 02 · Anatomy`) | 11px | 500 | 0.25em (UPPERCASE) | 1 |
| `stat`        | Statistics body | 48px | 700 | -0.02em | 1 |
| `stat-xl`     | Hero statistic numerals | 64px | 700 | -0.03em | 1 |
| `timeline`    | Timeline stamp (`Day 0`, `Week 1`) | 13px | 500 | 0.18em (UPPERCASE) | 1 |
| `condition`   | Anatomy panel condition name | 22px | 600 | -0.01em | 1.2 |

### 2.3 Weight philosophy

- **700** — hero headlines, statistics.
- **600** — section titles, card titles, CTAs, navigation accents.
- **500** — nav, labels, timeline stamps, emphasis in body.
- **400** — body copy.
- **300** — supporting / secondary text only.
- **800 / 900** — avoid. Reserved for an extreme hero moment, used at most once on the entire site.
- **100 / 200** — avoid. Too thin against dark backgrounds — reads as smudge.

### 2.4 Case philosophy

- **Sentence case is the default.** "Restoring blood flow." not "RESTORING BLOOD FLOW."
- **Uppercase is reserved for:**
  - `label` micro-labels (`Chapter 02 · Anatomy`)
  - `timeline` stamps (`Day 0`, `Week 1`)
  - Navigation accents (logo tagline only)
  - Statistic suffixes (`MM`, `KG`, `MS`)
- **Title case is forbidden** in body copy and headlines. Sentence case feels more intimate and editorial — the opposite of marketing-brochure.
- **Period at the end of headline** is optional but used consistently per chapter. A headline that ends with a period feels like a documentary cue. Use it where the sentence is declarative: "Restoring blood flow." / "Every procedure, told as a story." / "What happens to you."

### 2.5 Line length & widow control

- Reading paragraphs: max 72 characters per line; use `max-w-[68ch]` or `max-w-2xl`.
- Headlines: max 2 lines; use `<br />` to break manually when needed.
- Avoid orphans (single word on last line) by adjusting `max-w-*` or rewording.

### 2.6 Numerals

```css
font-variant-numeric: tabular-nums;
```

Applied to all statistic, timeline, and pricing surfaces.

---

## 3. Color tokens

All colours defined in OKLCH for perceptual consistency; hex listed for reference. Tokens live in `src/styles.css` under `:root` and are mapped into `@theme inline` for Tailwind utility generation.

### 3.1 Core palette

| Token | Role | OKLCH | Hex (approx) |
|---|---|---|---|
| `--bg`        | Page background | `oklch(0.14 0.02 250)` | `#050B16` |
| `--bg-elev`   | Card / surface elevation | `oklch(0.18 0.025 250)` | `#0A1422` |
| `--bg-elev-2` | Modal, sheet, drawer | `oklch(0.22 0.028 250)` | `#0F1B2D` |
| `--ink`       | Primary text | `oklch(0.98 0.005 250)` | `#F6F8FB` |
| `--ink-dim`   | Secondary text | `oklch(0.72 0.02 250)`  | `#A6B0BD` |
| `--ink-muted` | Tertiary text, captions | `oklch(0.58 0.018 250)` | `#7A8492` |
| `--ink-faint` | Disabled, placeholders  | `oklch(0.42 0.015 250)` | `#586272` |

### 3.2 Accent (Electric medical blue)

| Token | Role | OKLCH | Hex |
|---|---|---|---|
| `--accent`        | Primary accent | `oklch(0.72 0.18 235)` | `#3DA9FF` |
| `--accent-soft`   | Vessel walls, secondary accent | `oklch(0.55 0.12 235)` | `#2978C8` |
| `--accent-glow`   | Drop shadows, halos | `oklch(0.85 0.16 230)` | `#7FC8FF` |
| `--accent-pressed`| Active button | `oklch(0.62 0.16 235)` | `#2E8DDC` |

### 3.3 Blood (vessels only)

| Token | Role | OKLCH | Hex |
|---|---|---|---|
| `--blood`        | Blood, clot, blockage diagrams | `oklch(0.55 0.20 25)` | `#C73E2F` |
| `--blood-deep`   | Plaque, occlusion | `oklch(0.40 0.16 25)` | `#8A2A1F` |

### 3.4 Surfaces, lines, overlays

| Token | Role | Value |
|---|---|---|
| `--line`            | Default border | `rgba(255,255,255,0.08)` |
| `--line-strong`     | Hover / focus border | `rgba(255,255,255,0.15)` |
| `--divider`         | Section divider | `rgba(255,255,255,0.05)` |
| `--surface-glass`   | Nav glass background | `rgba(5,11,22,0.7)` + `backdrop-blur(16px)` |
| `--surface-card`    | Card background | `rgba(255,255,255,0.02)` |
| `--surface-card-h`  | Card hover | `rgba(255,255,255,0.05)` |
| `--overlay-scrim`   | Modal/drawer scrim | `rgba(5,11,22,0.78)` |
| `--overlay-video`   | Video bottom scrim | `linear-gradient(180deg, transparent 0%, rgba(5,11,22,0.88) 100%)` |
| `--overlay-hero`    | Hero gradient | `linear-gradient(180deg, rgba(5,11,22,0.35) 0%, rgba(5,11,22,0.88) 100%)` |

### 3.5 Gradients

| Token | Use |
|---|---|
| `--grad-vessel`  | Vessel SVG stroke | `linear-gradient(180deg, #7FC8FF 0%, #3DA9FF 100%)` |
| `--grad-radial-blue` | Hero ambient | `radial-gradient(60% 50% at 70% 40%, color-mix(in oklab, var(--accent) 22%, transparent), transparent 70%)` |
| `--grad-fade-bottom` | Section bottom fade | `linear-gradient(180deg, transparent 0%, var(--bg) 100%)` |
| `--grad-card`    | Card sheen | `linear-gradient(135deg, rgba(255,255,255,0.04), transparent 60%)` |

### 3.6 States

| State | Token / treatment |
|---|---|
| Hover | `bg: --surface-card-h`, `border: --line-strong`, lift `translateY(-2px)`, 240ms |
| Pressed | `bg: --accent-pressed`, scale 0.98, 120ms |
| Focus | `outline: 2px solid var(--accent); outline-offset: 3px;` |
| Disabled | `opacity: 0.45`, `cursor: not-allowed`, no hover state |
| Loading | spinner in `--accent`, content `opacity: 0.6`, no interaction |
| Selected | `border: var(--accent)`, `bg: color-mix(in oklab, var(--accent) 8%, transparent)` |

### 3.7 Usage matrix

| Surface | Background | Border | Text |
|---|---|---|---|
| Page | `--bg` | — | `--ink` |
| Card | `--surface-card` | `--line` | `--ink` / `--ink-dim` |
| Card hover | `--surface-card-h` | `--line-strong` | `--ink` |
| Nav (scrolled) | `--surface-glass` | `--line` | `--ink` |
| Button primary | `--ink` | — | `--bg` |
| Button primary hover | `--accent` | — | `--bg` |
| Button secondary | transparent | `--line-strong` | `--ink` |
| Input | transparent | `--line-strong` | `--ink` |
| Input focus | transparent | `--accent` | `--ink` |

---

## 4. Spacing system

8pt baseline, with 4pt half-steps for icons and inputs.

| Token | px | Use |
|---|---|---|
| `space-1`  | 4   | Icon padding, inline gaps between glyph + label |
| `space-2`  | 8   | Tight stacks (label + value) |
| `space-3`  | 12  | Form input inner padding (vertical) |
| `space-4`  | 16  | Default gap between related items |
| `space-5`  | 20  | Card inner padding (small) |
| `space-6`  | 24  | Card inner padding (default) |
| `space-8`  | 32  | Card inner padding (large), stacks within sections |
| `space-10` | 40  | Sub-section spacing |
| `space-12` | 48  | Section block padding (small viewports) |
| `space-16` | 64  | Section block padding (medium) |
| `space-20` | 80  | Section block padding (default desktop) |
| `space-24` | 96  | Hero block padding |
| `space-30` | 120 | Cinematic chapter spacing |
| `space-40` | 160 | Cinematic vertical breath between chapters |

**Rules**

- Section vertical padding default: `py-20` desktop, `py-12` mobile.
- Chapter-to-chapter breath: `py-30` for the documentary sections (Anatomy, Procedures, Recovery, Journey, Doctor, Consultation).
- Card inner padding: `p-6` default; `p-8` for hero cards.
- Stack gap inside cards: `space-y-3` for label/value pairs, `space-y-6` between items.
- Gutter between grid items: `gap-px` for hairline-separated grids (use `bg-[var(--line)]` parent), `gap-4` for separated cards.

---

## 5. Border radius

| Token | px | Use |
|---|---|---|
| `radius-xs`  | 6  | Tags, chips, small badges |
| `radius-sm`  | 8  | Inputs, small buttons |
| `radius-md`  | 12 | Default radius |
| `radius-lg`  | 16 | Buttons (default), inputs |
| `radius-xl`  | 24 | Cards |
| `radius-2xl` | 32 | Hero cards, image frames, video |
| `radius-3xl` | 48 | Modal, drawer, glass panels |
| `radius-full`| 9999 | Pills, avatars, nav, primary buttons |

**Rules**

- Buttons: `radius-full` (pill).
- Cards: `radius-xl` (24px) for content cards, `radius-2xl` (32px) for hero and tile.
- Images & video: `radius-2xl` (32px).
- Inputs: `radius-full` for search, `radius-lg` for form fields.
- Modal / drawer: `radius-3xl` top corners only on mobile sheet.

---

## 6. Elevation, shadow, glass

Surfaces use opacity and border to elevate. Shadow is reserved for portraits, hero images, and floating UI.

| Token | Value |
|---|---|
| `shadow-soft` | `0 12px 30px -12px rgba(0,0,0,0.45)` |
| `shadow-portrait` | `0 30px 60px -10px rgba(0,0,0,0.6)` |
| `shadow-glow-blue` | `0 0 40px -8px color-mix(in oklab, var(--accent) 50%, transparent)` |
| `shadow-card-hover` | `0 20px 40px -20px rgba(0,0,0,0.5)` |

Glass:

```css
backdrop-filter: blur(16px) saturate(140%);
background: var(--surface-glass);
border: 1px solid var(--line);
```

Used on: navigation (when scrolled), modals, drawer sheets.

---

## 7. Motion system

### 7.1 Duration tokens

| Token | ms | Use |
|---|---|---|
| `dur-fast`   | 180 | Hover, micro-interactions, icon state |
| `dur-med`    | 320 | Card lift, accordion, dropdown |
| `dur-slow`   | 700 | Section reveal, image fade-in |
| `dur-hero`   | 1400 | Hero entrance, route hand-off |
| `dur-camera` | 2000 | Cinematic camera moves, intro sequence |

### 7.2 Easing

```css
--ease-out:     cubic-bezier(0.16, 1, 0.3, 1);   /* default */
--ease-in-out:  cubic-bezier(0.65, 0, 0.35, 1);  /* directional */
--ease-emph:    cubic-bezier(0.22, 1, 0.36, 1);  /* hero emphasis */
--ease-snap:    cubic-bezier(0.4, 0, 0.2, 1);    /* button press */
```

### 7.3 Spring (Framer Motion)

```ts
export const spring = {
  soft:    { type: "spring", stiffness: 140, damping: 22, mass: 1 },     // cards
  precise: { type: "spring", stiffness: 280, damping: 30, mass: 0.7 },   // cursor, drag
  cinema:  { type: "spring", stiffness: 60,  damping: 18, mass: 1.4 },   // hero reveal
};
```

### 7.4 Standard reveal

```ts
const reveal = {
  initial: { opacity: 0, y: 16, filter: "blur(12px)" },
  animate: { opacity: 1, y: 0,  filter: "blur(0px)" },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
};
```

Hero version: 1000ms, with `scale: 1.02 → 1`.

### 7.5 Hover lift

```css
transition: transform 240ms var(--ease-out), background 240ms var(--ease-out), border-color 240ms var(--ease-out);
&:hover { transform: translateY(-2px); }
```

### 7.6 Heartbeat

A 4s loop on hero portrait, footer logo, and stat dots:

```css
@keyframes heartbeat {
  0%, 100% { transform: scale(1);    opacity: 0.98; }
  10%      { transform: scale(1.008); opacity: 1;    }
  20%      { transform: scale(1);    opacity: 0.98; }
}
```

### 7.7 Flow

Blue dashed stroke that travels along vessel paths:

```css
@keyframes flow { to { stroke-dashoffset: -200; } }
/* path stroke-dasharray="8 220" animation: flow 4s linear infinite; */
```

### 7.8 Reduced motion

Universal override:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
  }
}
```

In JS: components check `window.matchMedia('(prefers-reduced-motion: reduce)')` and replace scroll-driven motion with simple opacity fades.

---

## 8. Grid & responsive

### 8.1 Breakpoints

| Name | min-width | Use |
|---|---|---|
| `xs` | 0     | Mobile |
| `sm` | 640   | Large phone |
| `md` | 768   | Tablet portrait |
| `lg` | 1024  | Tablet landscape, small laptop |
| `xl` | 1280  | Desktop |
| `2xl`| 1536  | Large desktop |
| `3xl`| 1800  | Ultrawide (custom — outer max stays 1480px) |

### 8.2 Container & gutter

| Viewport | Outer max | Side gutter | Columns | Inter-col gap |
|---|---|---|---|---|
| Mobile (<640) | 100% | 24px | 4 | 16px |
| Tablet (640–1023) | 100% | 40px | 8 | 24px |
| Desktop (≥1024) | 1480px | 40px | 12 | 32px |
| Ultrawide (≥1800) | 1480px | auto | 12 | 32px |

Editorial reading content (route hero copy, condition pages, procedure pages) maxes at `max-w-3xl` (720px) regardless of viewport.

### 8.3 Section anatomy

```
[chapter label]            text-label, --ink-dim
↓ space-6
[chapter headline]         display-xl/h2
↓ space-6
[lead paragraph]           body-lg, max-w-xl, --ink-dim
↓ space-16
[content grid]
↓ space-12
[CTA row]
```

### 8.4 Responsive rules

- Hero portrait stacks below copy on `<lg`.
- Anatomy 2-column → 1-column on `<lg`; SVG stays max-w-[460px] and centres.
- Procedures stacked beats become a single column on `<lg`.
- Journey horizontal scroll becomes vertical stack on `<md`.
- Footer mega type clamps from 96px down to 56px on mobile.
- Mobile navigation collapses into full-screen overlay sheet (already implemented).
- Touch targets enlarge from 36 → 44 px on `<md`.

---

## 9. Photography direction

### 9.1 Doctor portrait (primary)

- **Lens:** 85mm equivalent, f/2.0 — compressed background, soft falloff.
- **Lighting:** key from camera-left at 45°, soft box; rim light from behind-right in `--accent` blue at 5% intensity to suggest medical environment.
- **Wardrobe:** white coat over dark navy shirt; no tie, no badges.
- **Expression:** direct gaze into lens. Neutral mouth. No smile. Calm authority, not gravitas.
- **Background:** deep navy (`--bg` to `--bg-elev` falloff), out of focus.
- **Crop:** chest-up for hero; head-and-shoulders for cards.
- **Post:** -5 highlights, +10 shadows, slight desaturation of skin warmth toward neutral; no orange-teal LUT.

### 9.2 Operating room / hybrid OT

- **Lens:** 24–35mm; environmental.
- **Lighting:** existing OT lights, no flash; ambient blue from monitors.
- **Composition:** shallow DOF on hands or wire, equipment soft-blur background.
- **Action:** mid-procedure, focused, hands on guidewire or catheter hub.

### 9.3 Patient / consultation

- **Avoid stock.** No stock smiling-patient imagery.
- If patient imagery is shown: backs of heads, hands, abstract, never identifying faces without consent.

### 9.4 Equipment / detail

- **Macro,** f/2.8, sharp on catheter tip / stent strut / balloon fold.
- Backgrounds remain dark navy; equipment lit with cool key + warm accent.

### 9.5 Grading

Unified LUT across all imagery: shadows pushed cool (slight blue), midtones neutral, highlights kept clean. No Instagram-style warmth. Reference: Apple iPhone "cinematic" night shots, not fashion editorial.

---

## 10. Video direction

(Until real footage exists, video slots remain represented by stills.)

| Section | Subject | Camera | FPS | Movement | Lighting | Duration | Transition |
|---|---|---|---|---|---|---|---|
| Hero background | Cath lab abstraction, monitors, fluoroscopy plate | Static long lens 50mm | 24 | Slow push 1% per second | Ambient blue + key off-screen | 12s loop | Crossfade 800ms |
| Procedure beats | Catheter macro, balloon inflation, guidewire | Macro 100mm | 24 | Locked, subject moves | Single key, hard rim | 6s/beat | Cut on scroll |
| Doctor chapter | Doctor in OT, gowned, focused on screen | Handheld 35mm | 24 | Subtle breathing motion | OT overhead | 8s loop | Fade to black 600ms |
| Recovery | Patient walking corridor, back-of-head | Tracking dolly 35mm | 24 | Lateral track 0.5m/s | Window daylight | 4s | Crossfade 1200ms |
| Footer | Flow diagram (looping vessel animation) | Synthetic | 60 | Continuous loop | — | 8s | None |

All video: H.265 / VP9, max 3 Mbps, no audio, `loop muted playsinline`.

---

## 11. 3D style guide (React Three Fiber)

The 3D scene is a procedural stylised vascular network, not a licensed anatomical mesh.

- **Material:** `MeshPhysicalMaterial`, base `--accent-soft`, transmission 0.4, roughness 0.6, clearcoat 0.3.
- **Lighting:** key directional from camera-top-left, intensity 0.8; rim from behind in `--accent`, intensity 0.6; ambient `0xffffff` 0.15.
- **Polycount:** under 25k triangles total. Tube geometry segments 32, radial 8.
- **Shadows:** soft contact shadow plane only; no real-time shadow casting.
- **Transparency:** vessel walls 70%, blood-flow shader pulses use additive blend.
- **Animation speed:** flow ribbons at 0.6 units/s; pulse heartbeat synced to 4s loop.
- **Camera:** orthographic-feeling perspective (FOV 24), no roll, ±12° yaw following pointer with 300ms damping.
- **Performance:** `frameloop="demand"`, render on scroll/pointer change only; `IntersectionObserver` pauses when off-screen.

---

## 12. Icon system

- **Library:** Lucide React only. No emoji, no custom one-off SVG icons in UI.
- **Stroke width:** 1.5px default; 2px on size 14 and below.
- **Size:** 14 (inline), 16 (buttons), 20 (cards), 24 (large CTA).
- **Color:** `currentColor` — inherits from text. Accent only on featured icons in CTAs.
- **Hover:** icon shifts 2px in the direction of action (right-arrow → translate-x-1).
- **Animation:** entrance via fade only; no spinning, no bouncing.
- **Approved icon set** (curated):
  - Arrows: `ArrowRight`, `ArrowUpRight`, `ChevronDown`
  - Actions: `Calendar`, `MessageCircle`, `Phone`, `MapPin`, `Search`
  - States: `X`, `Check`, `AlertCircle`, `Info`
  - Nav: `Menu`

Anything outside this list requires justification.

---

## 13. Buttons

### 13.1 Variants

| Variant | Visual | Use |
|---|---|---|
| `primary`  | `bg-ink` white, `text-bg`, hover `bg-accent` | Highest-intent CTA per view (one only) |
| `secondary`| transparent, 1px `--line-strong`, hover `bg-white/5` | Adjacent action |
| `ghost`    | no border, `text-ink-dim`, hover `text-ink` | In-card actions, tertiary |
| `medical-cta` | `bg-accent`, `text-bg`, glow on hover | Pinned consultation CTA (use sparingly) |
| `fab`      | 56px round, `bg-ink`, `text-bg`, fixed bottom-right (mobile) | Persistent contact action |
| `icon`     | square, 36–44px, `bg-transparent` | Toolbar / utility |

### 13.2 States (all variants)

| State | Treatment |
|---|---|
| Default | as defined |
| Hover | colour swap per variant, +2px translateY (primary/secondary), 240ms `ease-out` |
| Pressed | scale 0.98, 120ms `ease-snap` |
| Focus  | 2px `--accent` outline, offset 3px |
| Loading | spinner overlay in `--accent`, button text → `opacity: 0`, click disabled |
| Disabled | `opacity: 0.45`, `cursor: not-allowed`, no hover transform |

### 13.3 Sizing

| Size | Height | Padding-X | Text |
|---|---|---|---|
| `sm`  | 36px | 16px | 13px / 600 |
| `md`  | 44px | 22px | 14px / 600 |
| `lg`  | 52px | 28px | 15px / 600 |
| `xl`  | 60px | 32px | 16px / 600 |

Default for hero CTA: `lg`. Default for in-card: `md`.

### 13.4 Microcopy

- First word is a verb.
- No period.
- Optional trailing icon: `ArrowRight` for forward action, `ArrowUpRight` for external, `Calendar` for booking.

---

## 14. Inputs & forms

(Used on `/contact` once real form is enabled; search input on `/resources` exists today.)

### 14.1 Field anatomy

```
[label]            (label token, --ink-dim, mb-2)
[input]            (radius-lg, 1px --line-strong, py-3 px-4, 15px / 400)
[helper / error]   (caption token, mt-2)
```

### 14.2 States

| State | Treatment |
|---|---|
| Default | border `--line-strong` |
| Focus   | border `--accent`, outline ring 2px `--accent`/30% offset 0 |
| Filled  | border `--line-strong`, value in `--ink` |
| Error   | border `--blood`, helper text `--blood`, no animation |
| Disabled| `opacity: 0.45`, no focus |

### 14.3 Validation (client + server)

- All inputs use Zod schemas. See §23 for shape.
- Real-time validation only after first blur, then on every change.
- Submit triggers full schema validation; errors render inline.

### 14.4 Specialised inputs

- **Search:** `radius-full`, search icon left, clear icon right when filled.
- **Calendar / time picker:** shadcn `Calendar` + custom time list; dark theme tokens.
- **Dropdown / select:** shadcn `Select` styled with `--surface-card`, `--line-strong`.
- **Textarea:** min 4 rows, max 8 rows, auto-grow disabled.

---

## 15. Component library

Each component below is fully specified with props, states, and a single example. All live in `src/components/` and consume tokens.

### 15.1 `Button`

Props: `variant: 'primary' | 'secondary' | 'ghost' | 'medical-cta' | 'fab' | 'icon'`, `size: 'sm' | 'md' | 'lg' | 'xl'`, `loading?: boolean`, `icon?: ReactNode`, `iconPosition?: 'left' | 'right'`, `as?: 'button' | 'a' | typeof Link`.

### 15.2 `GlassCard`

Props: `padding: 'sm' | 'md' | 'lg'`, `interactive?: boolean`. Background `--surface-card`, border `--line`, radius `radius-xl`. Hover (when `interactive`) lifts 2px and bumps border to `--line-strong`.

### 15.3 `Timeline`

Props: `stages: { stamp: string; title: string; body: string }[]`. Horizontal on `≥md`, vertical on `<md`. Stamps in `timeline` token (UPPERCASE), titles `card-title`.

### 15.4 `DoctorCard` / `DoctorChapter`

Props: `portrait: ImageSrc`, `quote?: { text: string; context: string }`, `factSheet: { k: string; v: string }[]`. Portrait left or right, fact-sheet 2×2 grid.

### 15.5 `ProcedureCard` (index list item)

Grid `[80px_1fr_auto]`. Slug code in `label`, name in `card-title`, one-liner in `small --ink-dim`.

### 15.6 `ConditionCard` (anatomy panel & index)

Card showing name + intro + treatments. Hover bumps surface. Click routes to `/conditions/$slug`.

### 15.7 `Section` / `Container`

`Section` wraps each chapter: `<section>` with vertical padding tokens, dark bg, optional top border. `Container` wraps content at `max-w-[1480px]` with side gutters.

### 15.8 `Cursor`

Already implemented (`src/components/cursor.tsx`). Variants: `default`, `link`, `cta`, `scan`. Disabled on coarse pointer and reduced motion.

### 15.9 `Modal` / `Drawer`

shadcn primitives styled with `--surface-card`, `radius-3xl` (top corners on mobile sheet). Scrim `--overlay-scrim`. Animations: fade scrim 240ms, slide content 320ms `ease-out`.

### 15.10 `Navbar`

Already implemented. Pill nav with logo + items + primary CTA. Glass background on scroll.

### 15.11 `Footer`

Already implemented; mega type + 4-column grid + legal row.

### 15.12 `Tabs` / `Accordion`

shadcn primitives, dark tokens. Accordion content uses `accordion-up/down` animation tokens.

### 15.13 `Gallery`

Masonry grid (CSS columns) for images. Each image radius `radius-2xl`. Click opens modal viewer.

### 15.14 `Video`

`<video loop muted playsinline>` wrapped in `radius-2xl` frame with `--overlay-video` bottom scrim. Poster image always set.

### 15.15 `Statistics`

`stat` or `stat-xl` token for the number, `label` token for the descriptor. Tabular numerals. Animated number count-up runs once per session.

### 15.16 `Progress`

A 2px bar in `--accent` over `--line`. Used in procedure scroll-bar (already implemented in `Procedures.tsx`).

### 15.17 `BeforeAfter`

Draggable angiography comparator. Divider line 1px `--accent`, handle 40px circle `--accent`. Labels in `label` token.

### 15.18 `Anatomy`

Interactive body SVG with region hotspots. Hover/focus activates region; right panel updates with conditions list.

### 15.19 `ProcedureStory`

Scroll-driven 6-beat narrative with synced SVG canvas. Each beat fades in 0→1→0 across its window of scroll progress.

### 15.20 `Loader`

ECG line trace, one-shot per session via `sessionStorage`.

---

## 16. Cursor system

Implemented in `src/components/cursor.tsx`. Variants set via `data-cursor` attribute:

- `default` — 28px ring + 4px dot.
- `link` — ring expands to 48px on links.
- `cta` — ring compresses to 16px, dot pulses on CTAs.
- `scan` — 220px radial gradient on the hero portrait scan area.

Disabled when `pointer: coarse` or `prefers-reduced-motion: reduce`.

---

## 17. Interactive system

| Interaction | Default behaviour |
|---|---|
| Hover (fine pointer) | colour, lift, border bump, 240ms |
| Click | scale 0.98, 120ms |
| Focus (keyboard) | 2px `--accent` outline, offset 3px |
| Touch | no hover; tap = direct action; `:active` provides 100ms colour feedback |
| Scroll | Lenis smooth scroll, 0.9× normalised speed; respects reduced motion |
| Pointer leave | revert to default within 240ms |
| Drag (before/after) | 1:1 pointer follow, no inertia |
| Long press / right-click | native browser behaviour (no custom menu) |
| Keyboard nav | `Tab` cycles, `Esc` closes overlays, `Enter`/`Space` activates buttons, arrow keys move tabs/accordions |
| Mobile menu | full-screen sheet, traps focus, `Esc` closes, scroll locked when open |

---

## 18. Scroll choreography

The homepage scroll narrative:

```
Hero (100dvh)
  ↓ Headline fades out, portrait scales 1 → 1.08, background drifts up
Anatomy
  ↓ Section reveal on enter, anatomy SVG pulses
Procedures (×N, each ~6 viewport heights)
  ↓ Beat-by-beat fade in/out, SVG canvas progress sync
Before / After
  ↓ Static reveal, divider invites drag
Recovery
  ↓ Horizontal grid stagger on enter
Journey (~6 viewport heights)
  ↓ Sticky horizontal scroll across 6 stages
Doctor
  ↓ Portrait reveal, factsheet stagger
Consultation
  ↓ Tile grid scale-in 0.96 → 1
Footer
  ↓ Mega type reveal
```

**Triggers:** `useScroll` with `target` ref and `offset: ["start start", "end start"]` for parallax; `whileInView` with `viewport={{ once: true, margin: "-80px" }}` for reveals. Each beat's progress window is clamped to `[0,1]` and strictly monotonic to satisfy Framer Motion v11 WAAPI.

**Reduced motion:** `useScroll` parallax disabled; reveals become 200ms opacity fades.

---

## 19. Medical storytelling copy

### 19.1 Hero

- **Label:** `Chapter 01 · Arrival`
- **Headline:** `Restoring blood flow.`
- **Sub:** `Advanced vascular and neurointerventional procedures performed through pinpoint incisions, guided by real-time imaging. Greater precision. Faster recovery. Care that meets the disease where it lives.`
- **CTAs:** `Book consultation` (primary), `Explore treatments` (secondary)
- **Microcopy:** `Hover to reveal vascular anatomy.`
- **Scroll cue:** `Scroll`
- **A11y:** `aria-label="Cinematic introduction. Restoring blood flow through image-guided vascular intervention."`

### 19.2 Anatomy

- **Label:** `Chapter 02 · Anatomy`
- **Headline:** `Find where the disease lives.`
- **Sub:** `Move over the body. Each region reveals the conditions treated through image-guided intervention.`
- **Region badge:** `Region · {label}`
- **List header:** `{n} conditions treated here`

### 19.3 Procedures

- **Label:** `Chapter 04 · Intervention`
- **Headline:** `Every procedure, told as a story.`
- **Sub:** `Scroll through each intervention beat by beat. Nothing autoplays — the rhythm is yours.`
- **Beat prefix:** `Beat · 0{n}`

### 19.4 Before / After

- **Label:** `Evidence`
- **Headline:** `Before. After. The same vessel.`
- **Sub:** `Drag the line. The image speaks more than any paragraph.`
- **Tags:** `Before` / `After`
- **Disclaimer footnote:** `Representational stand-ins until anonymised cases are released.`

### 19.5 Recovery

- **Label:** `Chapter 05 · Recovery`
- **Headline:** `Minimally invasive means measurably faster.`
- **Stamps:** `Day 0`, `Day 1`, `Week 1`, `Month 1`, `Month 3+`

### 19.6 Journey

- **Label:** `Patient journey`
- **Headline:** `What happens to you.`
- **Stamps:** `Stage 01–06`

### 19.7 Doctor

- **Label:** `Chapter 06 · The physician`
- **Headline:** `A practice built around image-guided precision.`
- **Quote (single, attributed):** `"The disease is approached where it lives — through the vessel itself."`
- **Disclaimer:** `Verified credentials, fellowships, hospital affiliations and publications will be listed here once supplied. No claims are made on this page without source.`

### 19.8 Consultation

- **Label:** `Chapter 08 · Consultation`
- **Headline:** `When you're ready, the door is one tap away.`
- **Tiles:**
  - `Book appointment` / `Reserve a consultation slot`
  - `WhatsApp` / `Direct message`
  - `Call the clinic` / `Speak to the team`
  - `Directions` / `Find the clinic`

### 19.9 Footer

- **Mega type:** `Advanced, image-guided vascular care.`
- **Disclaimer:** `The information presented is educational. It does not constitute medical advice. Consult a qualified physician for diagnosis and treatment.`
- **Legal:** `© {year} Dr. Mandeep Sagar. All rights reserved.`

### 19.10 Accessibility labels

Every interactive surface declares `aria-label` when its text is not self-describing. Examples:

- Hero portrait scan: `aria-label="Reveal vascular anatomy beneath the portrait. Hover to scan."`
- Anatomy hotspots: `aria-label="Brain region — 2 conditions"`, etc.
- Procedure progress bars: `role="progressbar" aria-valuenow={percent}`.
- Before/After handle: `aria-label="Drag to compare the vessel before and after intervention."`

---

## 20. Educational copy

All condition and procedure copy lives in `src/lib/content.ts`. The current list is the canonical scope. Documentary voice. No statistics, no testimonials, no fabricated outcomes. Each condition has: `name`, `region`, `intro`, `symptoms[]`, `treatments[]`. Each procedure has: `name`, `oneLiner`, `beats[]`.

**Tone guidelines (must match the existing entries):**

- Open with a single calm, true sentence about what the disease is.
- The second sentence describes how image-guided intervention approaches it.
- Symptoms are bullets, in patient language.
- Treatments are the procedure names as they appear on the practice menu.

**Bio facts** in `Doctor` / `/about` render `[to be confirmed]` placeholders until verified content is provided. Slots:

- Medical school + year `[to be confirmed]`
- Residency `[to be confirmed]`
- Fellowship(s) `[to be confirmed]`
- Current hospital affiliation(s) `[to be confirmed]`
- Memberships (e.g. SIR, CIRSE) `[to be confirmed]`
- Publications `[to be confirmed]`

---

## 21. Accessibility rules

1. **WCAG 2.2 AA minimum.** AAA where the cost is zero (text contrast on dark surfaces).
2. **Contrast:** body text `--ink` on `--bg` exceeds 14:1; secondary text `--ink-dim` exceeds 7:1.
3. **Focus visible everywhere.** Never `outline: none` without replacement.
4. **Keyboard parity.** Every hover state has a focus equivalent.
5. **Anatomy hotspots reachable via Tab.** State mirrored between hover and focus.
6. **Custom cursor never hides the native focus ring.**
7. **Reduced motion respected** across particles, parallax, scan, R3F, scroll-driven transforms.
8. **Skip link** at top of root: `Skip to main content`.
9. **Semantic landmarks.** One `<main>` per route. `<nav>`, `<footer>`, `<article>` used correctly.
10. **Form labels** are explicit (`htmlFor`), never placeholder-only.
11. **ARIA only when needed.** Native HTML first; ARIA second.
12. **Images** have meaningful `alt` or `alt=""` if decorative.
13. **Video** has `aria-label` describing content; transcripts where dialogue exists.
14. **Touch targets ≥44×44px.**
15. **Time-based content** (loader, animations) does not block content; ECG loader auto-dismisses at 2.2s and on user interaction.

---

## 22. Performance rules

1. **Lighthouse target ≥95** across Performance, Accessibility, Best Practices, SEO.
2. **Largest Contentful Paint ≤2.5s** on emulated mobile.
3. **Total JS ≤180KB gzipped** on initial route.
4. **Images:** AVIF preferred, WebP fallback. `loading="lazy" decoding="async"`. Explicit `width`/`height`.
5. **Fonts:** preconnect to Google Fonts, single stylesheet, `display=swap`. Subset to Latin if extended unused.
6. **3D scene:** `frameloop="demand"`; suspend on IntersectionObserver hide; max 25k tris.
7. **Particles capped** at 30 elements.
8. **Smooth scroll** (Lenis) disabled on `prefers-reduced-motion`.
9. **Code split** per route (TanStack file-based routing does this).
10. **No client-side analytics** until consent banner exists.
11. **No third-party iframes** above the fold.
12. **Cache headers** set on static assets (handled by the deploy platform).

---

## 23. Engineering architecture

### 23.1 Stack

- TanStack Start v1 (Vite 7, React 19, SSR/SSG capable).
- Tailwind CSS v4 (CSS-first config in `src/styles.css`).
- Framer Motion v11 (downgraded for WAAPI stability; see §7).
- React Three Fiber + drei (suspended off-screen).
- Lenis (smooth scroll).
- Lucide React (icons).

### 23.2 Folder map

```
src/
  routes/
    __root.tsx, index.tsx, about.tsx, expertise.tsx,
    conditions.tsx, conditions.$slug.tsx,
    procedures.tsx, procedures.$slug.tsx,
    resources.tsx, contact.tsx
  components/
    hero/ Hero.tsx
    anatomy/ Anatomy.tsx
    procedures/ Procedures.tsx
    sections/ BeforeAfter.tsx, Recovery.tsx, Journey.tsx,
              Doctor.tsx, Consultation.tsx, Footer.tsx
    cursor.tsx, lenis-provider.tsx, loader.tsx, navigation.tsx
    ui/ (shadcn primitives — styled with dark tokens)
  lib/ content.ts, utils.ts
  styles.css
  assets/ (cinematic stand-in imagery)
```

### 23.3 Tailwind v4 conformance

- Single `@import "tailwindcss"` at the top of `src/styles.css`.
- Tokens in `@theme inline`.
- Custom utilities via `@utility` (never `@layer utilities`).
- Custom variants via `@custom-variant`.
- Fonts loaded via `<link>` in `__root.tsx` head, never `@import` URL.

### 23.4 Validation (server functions, when added)

```ts
import { z } from "zod";

export const consultationSchema = z.object({
  name:    z.string().trim().min(1, "Name is required").max(100),
  email:   z.string().trim().email("Enter a valid email").max(255),
  phone:   z.string().trim().min(7, "Phone too short").max(20),
  message: z.string().trim().min(10, "Message too short").max(1000),
});
```

### 23.5 Server runtime constraints

Cloudflare Workers runtime via TanStack Start. No `child_process`, no `sharp`, no `puppeteer`. Use Lovable Cloud (Supabase) for persistence when needed.

### 23.6 Out of scope until provided

- Real doctor portrait, OR footage, angiography stills.
- Real bio facts (placeholders remain).
- Testimonials (omitted).
- Phone numbers, WhatsApp, clinic address (no placeholder digits).

---

## 24. Token reference (CSS)

The full token set lives in `src/styles.css`. Summary:

```css
:root {
  /* Surfaces */
  --bg:          oklch(0.14 0.02 250);
  --bg-elev:     oklch(0.18 0.025 250);
  --bg-elev-2:   oklch(0.22 0.028 250);

  /* Ink */
  --ink:         oklch(0.98 0.005 250);
  --ink-dim:     oklch(0.72 0.02 250);
  --ink-muted:   oklch(0.58 0.018 250);
  --ink-faint:   oklch(0.42 0.015 250);

  /* Accent */
  --accent:         oklch(0.72 0.18 235);
  --accent-soft:    oklch(0.55 0.12 235);
  --accent-glow:    oklch(0.85 0.16 230);
  --accent-pressed: oklch(0.62 0.16 235);

  /* Blood (vessels only) */
  --blood:       oklch(0.55 0.20 25);
  --blood-deep:  oklch(0.40 0.16 25);

  /* Lines */
  --line:          rgba(255,255,255,0.08);
  --line-strong:   rgba(255,255,255,0.15);
  --divider:       rgba(255,255,255,0.05);

  /* Easing */
  --ease-out:    cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
  --ease-emph:   cubic-bezier(0.22, 1, 0.36, 1);
  --ease-snap:   cubic-bezier(0.4, 0, 0.2, 1);

  /* Duration */
  --dur-fast:    180ms;
  --dur-med:     320ms;
  --dur-slow:    700ms;
  --dur-hero:    1400ms;
  --dur-camera:  2000ms;

  /* Radius */
  --radius-xs:  6px;
  --radius-sm:  8px;
  --radius-md:  12px;
  --radius-lg:  16px;
  --radius-xl:  24px;
  --radius-2xl: 32px;
  --radius-3xl: 48px;

  /* Shadow */
  --shadow-soft:       0 12px 30px -12px rgba(0,0,0,0.45);
  --shadow-portrait:   0 30px 60px -10px rgba(0,0,0,0.6);
  --shadow-glow-blue:  0 0 40px -8px color-mix(in oklab, var(--accent) 50%, transparent);
  --shadow-card-hover: 0 20px 40px -20px rgba(0,0,0,0.5);
}
```

Utilities (excerpt):

```css
@utility text-display-xxl { font-family: var(--font-display); font-weight: 700; letter-spacing: -0.04em; line-height: 0.95; font-size: clamp(56px, 9vw, 96px); }
@utility text-display-xl  { font-weight: 700; letter-spacing: -0.04em; line-height: 0.95; font-size: clamp(44px, 6.4vw, 64px); }
@utility text-h1          { font-weight: 700; letter-spacing: -0.03em; line-height: 1.02; font-size: clamp(40px, 5.6vw, 56px); }
@utility text-h2          { font-weight: 700; letter-spacing: -0.03em; line-height: 1.05; font-size: clamp(32px, 4.6vw, 48px); }
@utility text-h3          { font-weight: 600; letter-spacing: -0.02em; line-height: 1.1;  font-size: clamp(26px, 3.4vw, 36px); }
@utility text-card-title  { font-weight: 600; letter-spacing: -0.01em; line-height: 1.25; font-size: 22px; }
@utility text-body-lg     { font-weight: 400; line-height: 1.7;  font-size: 18px; }
@utility text-body        { font-weight: 400; line-height: 1.65; font-size: 16px; }
@utility text-small       { font-weight: 400; line-height: 1.6;  font-size: 14px; }
@utility text-caption     { font-weight: 400; line-height: 1.5;  font-size: 12px; }
@utility text-label       { font-weight: 500; letter-spacing: 0.25em; text-transform: uppercase; font-size: 11px; color: var(--ink-dim); }
@utility text-timeline    { font-weight: 500; letter-spacing: 0.18em; text-transform: uppercase; font-size: 13px; }
@utility text-stat        { font-weight: 700; letter-spacing: -0.02em; line-height: 1; font-size: 48px; font-variant-numeric: tabular-nums; }
@utility text-stat-xl     { font-weight: 700; letter-spacing: -0.03em; line-height: 1; font-size: 64px; font-variant-numeric: tabular-nums; }
```

---

**End of Design Bible.** Any new component, copy block, or motion must trace back to a section above. If a need arises that has no entry, the Bible is updated first, the code second.
