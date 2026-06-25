
# Dr. Mandeep Sagar — Cinematic Personal Brand Site

A documentary-style website. Not a clinic page. Eight chapters that flow like a Netflix opening sequence: Arrival → Blood → Disease → Precision → Treatment → Recovery → Trust → Consultation.

## Design system (locked tokens)

**Palette**
- `--bg`: `oklch(0.12 0.02 250)` (#050B16 deep navy-black)
- `--bg-elev`: `oklch(0.16 0.03 250)`
- `--ink`: `oklch(0.98 0.005 250)` (near-white)
- `--ink-dim`: `oklch(0.72 0.02 250)`
- `--accent`: `oklch(0.72 0.18 235)` (electric medical blue, used for glows, vessels, scan reveal)
- `--accent-soft`: `oklch(0.55 0.12 235)`
- `--blood`: `oklch(0.55 0.20 25)` — used ONLY inside vessels, blocked arteries, clot diagrams. Never as brand color.
- Rule enforced in `src/styles.css` via `@theme inline`. 95% dark/white/blue/grey, 5% red.

**Typography**
- Display: **Fraunces** (variable serif, optical sizing) for huge editorial headlines — Apple keynote weight feel.
- UI / body: **Inter Tight** for navigation, body, microcopy.
- Mono accent: **JetBrains Mono** for tiny technical labels (anatomy callouts, procedure step indices).
- Loaded via `<link>` in `src/routes/__root.tsx` head (per Tailwind v4 rule), referenced through `--font-display` / `--font-sans` / `--font-mono` tokens.
- Headlines clamp from `clamp(3rem, 8vw, 9rem)`; tracking slightly negative; max two lines.

**Motion**
- Default entrance: blur(12px)→0 + opacity 0→1 + y(16px)→0, 600ms, `cubic-bezier(0.16, 1, 0.3, 1)`.
- Hero/accent moments: same curve, 1000ms, with scale 1.02→1.
- Scene transitions: blur + opacity (no large translations).
- Hover lift: 4px, 240ms. Image zoom: 1.04. Button glow on hover.
- Heartbeat pulse: 4s loop, scale 1→1.008→1, opacity 0.98→1.
- All motion respects `prefers-reduced-motion` — replaced by simple opacity fades.

**Spacing & radius**
- 8pt spacing scale. Radii: 8 / 16 / 24 / 32 / 48. Soft shadows only.

## Tech stack additions

- `framer-motion` — primary animation/scroll engine.
- `@react-three/fiber` + `@react-three/drei` + `three` — 3D vascular model.
- `lenis` — smooth scrolling.
- `lucide-react` — minimal iconography (sparingly).

Installed via `bun add` in build mode.

## Route architecture

Per content-site rule: each chapter gets its own route with unique `head()` metadata. The homepage IS the cinematic full-screen experience that scrolls through all chapters (documentary feel), but deep-link routes exist for crawlers and shareable pages.

```
src/routes/
  __root.tsx              -> shell + fonts + Lenis provider + cursor system
  index.tsx               -> Hero + scroll-driven full documentary
  about.tsx               -> Doctor chapter (extended bio, education, fellowships)
  expertise.tsx           -> Specializations
  conditions.tsx          -> Verified conditions list + interactive anatomy
  conditions.$slug.tsx    -> Per-condition deep page (uses real condition list)
  procedures.tsx          -> Procedure storytelling index
  procedures.$slug.tsx    -> Single procedure scroll-story
  resources.tsx           -> Searchable patient education
  contact.tsx             -> Consultation (call / WhatsApp / email / directions)
```

No testimonials route until real testimonials are provided. No fabricated stats.

## Chapter-by-chapter build

### 1. Cinematic Hero (`src/components/hero/`)
- `100dvh`, layered: animated gradient → ambient blue radial → particle field (canvas, ~40 particles, very slow) → Three.js vascular network behind portrait → portrait image (generated stand-in) → headline grid → floating nav.
- **Loading sequence**: 2s black → blue ECG line traces across viewport → fades into hero. Skipped on repeat via sessionStorage.
- **Cursor scan reveal**: portrait area uses a `mask-image: radial-gradient` driven by pointer position to reveal an underlying SVG carotid/cerebral/aortic arch vessel layer. Outside the portrait, the cursor is a small blue ring + dot.
- **Headline**: "RESTORING / BLOOD FLOW." (display serif, 8vw).
- **Sub**: original documentary-tone copy (not a clinic tagline).
- **CTAs**: "Book Consultation" (filled) + "Explore Treatments" (outline).
- **Scroll indicator**: small vertical vessel with blue droplet traveling downward (SVG `pathLength` animation).
- **Exit**: scroll triggers headline fade + portrait y -40px + vessel scale into next chapter (camera-into-body feel).

### 2. Interactive Anatomy (`src/components/anatomy/`)
- R3F scene. Simple procedural vessel network (not a licensed medical mesh): stylized human silhouette built from primitives + animated tube geometries representing aortic arch, carotids, cerebral circle of Willis, abdominal aorta, renal branches, iliacs, femoral, popliteal, tibials.
- Subtle ±12° rotation following pointer (damped).
- Hover regions (invisible meshes over body zones): brain / neck / chest / abdomen / pelvis / legs.
- Right panel (65%) updates with condition info: name, calm explanation, symptoms, treatment summary, "Learn more" link to `/conditions/$slug`.
- Blood-flow shader: emissive blue-white dashes flow along tube curves. Heartbeat pulse every 4s.

### 3. Procedure Storytelling (`src/components/procedures/`)
- Scroll-driven (Framer Motion `useScroll` + `useTransform`) per-procedure chapters: Angioplasty, Thrombectomy, Aneurysm Repair, Varicose Vein Ablation, Uterine Fibroid Embolization, Prostate Artery Embolization (only those actually offered — placeholder slots clearly marked TODO until user confirms).
- Each procedure: 6 scroll beats (blocked → catheter → guidewire → balloon → restoration → recovery). SVG path morphs + opacity tied to scroll progress. No autoplay.
- Voice: documentary tone example provided by user, used verbatim as template.

### 4. Before/After comparison
- Draggable divider between two angiography stand-in images. Hover shows magnifier (CSS `background-image` follows cursor).

### 5. Recovery Timeline
- Horizontal sticky scroll: Procedure → Same Day → Week One → Month One → Normal. Each stage expands while active.

### 6. Patient Journey (Apple-style sticky horizontal)
- Consultation → Imaging → Diagnosis → Procedure → Recovery → Follow-up.

### 7. Doctor Chapter
- Large editorial portrait + sectional storytelling: Education / Training / Fellowships / Current Practice / Publications / Memberships.
- **All facts marked with `data-needs-verification` and rendered with visible "[to be confirmed]" placeholders until the user supplies verified content.** No invented credentials.

### 8. Resources
- Client-side filterable (Fuse.js-lite by simple `includes` to start) — symptoms / conditions / procedures / articles.

### 9. Consultation
- Four large action tiles: Book Appointment / WhatsApp / Call / Directions. Each one-click. No long form.

### 10. Footer
- Minimal. Large display type: "Advanced / Image-Guided / Vascular Care". Small link grid. Copyright.

## Image generation plan

Use the agent `generate_image` tool (premium where text legibility matters) to create cinematic stand-ins, all consistent with palette:
1. Doctor portrait — studio lighting, white coat, dark background, eye contact, no smile, transparent PNG.
2. Hero background still — fluoroscopy/cath lab abstraction, deep navy with blue rim light.
3. Hybrid OT environment shot.
4. Angiography "before/after" pair (stylized, clearly representational).
5. Catheter/guidewire macro.
6. Operating-hands macro.

Saved under `src/assets/`. All marked as stand-ins in code comments. Replaced when user supplies real footage/portrait.

## Accessibility & performance

- `prefers-reduced-motion`: disables 3D animation loop, particles, parallax, scan reveal — falls back to static portrait with vessel SVG underneath at low opacity.
- Keyboard: all interactive anatomy regions reachable via `Tab`; hover panel state mirrored by focus.
- Three.js scene `frameloop="demand"` when off-screen; suspended via IntersectionObserver.
- Images via `<img loading="lazy" decoding="async">` + AVIF/WebP where possible.
- Lighthouse target 95+.

## Custom cursor system

- Desktop only (`pointer: fine`).
- Global component in `__root.tsx`: small blue ring + dot follows pointer with spring.
- Variants set via React context: `default` / `link` (expands) / `cta` (compresses) / `scan` (becomes radial gradient scan over anatomy).

## Content honesty rules (enforced)

- No fabricated testimonials → testimonials section omitted.
- No fabricated credentials → verifiable-fact slots render "[to be confirmed]".
- No invented statistics, awards, or affiliations anywhere.
- Educational copy (disease/procedure explanations) written in the documentary tone the user demonstrated.

## Build order (when approved)

1. Install deps (`framer-motion`, `three`, `@react-three/fiber`, `@react-three/drei`, `lenis`, `lucide-react`).
2. Tokens + fonts in `src/styles.css` and `__root.tsx`.
3. Generate stand-in imagery.
4. Cursor system + Lenis provider + loading ECG.
5. Hero (cinematic, with scan reveal).
6. Interactive anatomy (R3F).
7. Procedure storytelling (one fully built — Angioplasty — others scaffolded).
8. Before/After + Recovery + Patient Journey.
9. Doctor chapter (with verification placeholders).
10. Resources + Consultation + Footer.
11. Per-route deep pages with unique `head()` meta.
12. Reduced-motion + keyboard polish.
13. Build + verify.

## Out of scope for v1 (flagged for later)

- Real medical videos (need user uploads).
- Licensed 3D anatomical mesh (using procedural vessels for now).
- Real testimonials.
- Real bio facts (placeholders until verified).
