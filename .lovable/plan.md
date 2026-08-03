# Real photo, real contact, real animations, and the unfinished pass

## 1. Replace the AI portrait with Dr. Sagar's actual photo

The uploaded transparent PNG/WebP becomes the single portrait used everywhere:

- Hero (right side, scan-reveal over the vessel diagram) — the cut-out with transparent background suits this perfectly.
- Doctor chapter on the homepage and `/about`.

The AI-generated `doctor-portrait.png` is removed. The other stand-ins (cath lab, hands, hybrid OT, angiography stills) stay until real ones are supplied.

## 2. Wire the real contact details

`src/lib/contact.ts` placeholders are replaced with:

- Phone / WhatsApp: 063663 30505 (+91 63663 30505)
- Email: vascularcaredr@gmail.com
- Locations: Kannur (Kerala), Mangalore (Karnataka), Kasaragod (Kerala)
- `verified: true`, so the phone and email display instead of "to be confirmed" text

Every tile, footer line and contact page block that currently says "will appear here once provided" now shows the real details. A three-location block is added to the contact page and footer. No street addresses or clinic hours are invented — only the three cities you gave, with a maps search link per city.

## 3. Add the four procedure animation videos

The uploaded MP4s are placed on the procedures they actually depict:

| Video | Procedure page |
|---|---|
| Aneurysm | `/procedures/aneurysm-coiling` |
| Mechanical thrombectomy | `/procedures/thrombectomy` |
| EVAR 3D animation | `/procedures/aneurysm-repair` |
| Varicose vein treatment | `/procedures/varicose-vein-ablation` |

Each appears as a full-width cinematic panel on its procedure page: muted, looping, autoplay on scroll into view, playsInline, with a poster frame and a caption line. The scroll-driven SVG storyboards stay — the video sits above them as the "see it move" moment. The same four also appear in the Resources library as `Video` entries.

## 4. Expertise timeline (finish the pass)

`/expertise` gains the 14-milestone professional narrative already written in `content.ts`, as a vertical rail: each milestone is a collapsed row (title + meta) that expands on hover/focus to reveal the summary, with a drawn connecting line that fills on scroll. The final milestone, "Patient care today", links to `/testimonials`.

A new `/testimonials` route is created — styled to match the site, currently holding a short honest statement that verified patient stories will be published here, plus a consultation CTA. No fabricated testimonials.

## 5. Resources filter chips + related resources

- `/resources`: filter chips above the search (All · Condition · Procedure · Video · Patient guide · FAQ · Recovery), combined with the existing text search. Videos from step 3 are included.
- Condition detail pages get a "Related" block at the bottom: linked procedures for that condition plus any matching resources, using the existing `resourcesForCondition` helper.

## Technical notes

- The portrait and the four MP4s are uploaded via `lovable-assets` as CDN pointers (`.asset.json`) rather than committed binaries; components import the pointer and use `.url`.
- Video panel is one shared `<ProcedureVideo>` component using an IntersectionObserver to play/pause, respecting `prefers-reduced-motion` (shows the poster frame only).
- Timeline expansion uses framer-motion height/opacity on the existing v11 install; no new dependencies.
- All new copy stays sentence case and uses existing `text-display` / `text-label` tokens per the Design Bible.
