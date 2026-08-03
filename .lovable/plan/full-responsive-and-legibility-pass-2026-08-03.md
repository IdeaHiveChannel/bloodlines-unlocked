# Full responsive and legibility pass

The site was built desktop-first: type, spacing and interactive sections are sized for a large screen and only loosely scale down. This pass makes every page behave correctly from a 320px phone to a 49" ultrawide, including foldables, landscape phones, and users browsing at 200% zoom.

## The core problem

Three patterns repeat across almost every page and cause most of the damage:

1. **Headings start too large.** Most headings use a fluid size whose *minimum* is 38–42px. On a 320–390px phone that minimum never shrinks, so headlines wrap into four or five lines and push everything down.
2. **Fixed vertical rhythm.** Nearly every section uses a flat 128px of top and bottom padding regardless of screen. On a phone this wastes half the screen; on a landscape phone it pushes the content out of view entirely.
3. **Full-viewport pinned sections.** The Procedures storyboard and the Patient Journey pin to the full screen height. On a landscape phone or a short laptop window, their content is taller than the screen and gets clipped with no way to scroll it.

Everything below is a systematic fix of these three patterns plus the specific components that break outside them.

## What changes

### 1. Global type and spacing scale (`src/styles.css`)

- Rebuild every typography utility so its lower bound is genuinely small: display sizes bottom out around 28–32px instead of 44–56px, headings around 22–26px, body at 15–16px. Upper bounds stay as they are so large screens are unaffected.
- Switch sizes from px to rem so browser zoom and OS text-size settings scale the layout instead of breaking it.
- Add a shared responsive section-padding utility (roughly 64px mobile → 96px tablet → 128px desktop) and apply it in place of the hardcoded `py-32` in all ten sections.
- Raise the small "eyebrow" label from 11px with wide letter-spacing to 12px with tighter spacing on mobile, and lift its colour one step for contrast against the near-black background.
- Add a landscape-phone rule (short viewport) that further compresses vertical padding.

### 2. Homepage sections

- **Hero** — reduce the headline floor, stack the subheading and calls to action in a single column below 480px, make both buttons full-width and at least 44px tall, and use dynamic viewport height so mobile browser chrome doesn't crop it.
- **Transition passage** — narrow the measure and reduce the oversized padding on phones.
- **Anatomy map** — currently a side-by-side map and detail panel. Below the tablet breakpoint this becomes a stacked layout: the body map on top at a contained size, the region detail (conditions, procedures, read more) beneath it, with the region chips scrollable and each hotspot given a 44px touch area.
- **Conditions gateway** — collapse the two-column editorial grid to one column on phones and reduce the entry title size.
- **Procedures storyboard** — replace the full-screen pin with a height-aware version: it pins only when the viewport is tall enough, and falls back to normal stacked scrolling on short/landscape screens. Storyboard illustrations get a contained aspect ratio instead of filling the screen.
- **Evidence slider** — stack the image above the case notes on phones, make the case selector a horizontally scrollable row, enlarge the drag handle to a comfortable touch size, and add keyboard control (arrow keys) for accessibility.
- **Recovery, Journey, Physician, Consultation, Footer** — single-column stacking on phones, reduced heading sizes, and the same pin fix for Journey as for Procedures. Footer link columns go from four across to two on phones.

### 3. Inner pages

Same treatment applied to `/about`, `/philosophy`, `/expertise`, `/conditions`, `/conditions/:slug`, `/procedures`, `/procedures/:slug`, `/diseases/:slug`, `/resources`, `/testimonials`, `/contact`:

- Page heading floors reduced; hero padding scaled.
- Card grids go 1 column (phone) → 2 (tablet) → 3 (desktop) consistently.
- The disease-guide sticky chapter navigation becomes a properly scrollable strip with edge fades and no layout shift on phones.
- Long tables and code-like blocks get horizontal scroll containers rather than overflowing the page.

### 4. Navigation

- Header height and logo shrink on phones; the menu button gets a 44px target.
- The open mobile menu uses dynamic viewport height, scrolls internally when the list is longer than the screen, and traps focus while open.
- Add the tablet range (768–1024px) to the mobile-menu breakpoint so the desktop link row never crowds.

### 5. Ultrawide and very large screens

- Keep the existing 1480px content cap, and add a wider cap only for full-bleed media so nothing stretches edge to edge on a 3440px or 3840px display.
- Add generous side gutters above 1920px so text lines never exceed a comfortable reading measure.

### 6. Contrast and accessibility

- Audit every muted text colour against the near-black background and lift any that falls under WCAG AA; the dimmest greys used for captions are the main offenders.
- Ensure all interactive elements meet 44×44px on touch, have visible focus rings, and that the custom cursor never hides a real cursor on touch or hybrid devices.
- Add `alt` text where missing on the case and portrait images, and give the slider and region map proper labels.

### 7. Verification

Render each page at 320, 360, 375, 390, 412, 430, 768, 834, 1024, 1280, 1366, 1440, 1920, 2560 and 3440px wide, plus two landscape-phone heights and a 200% zoom pass, capturing screenshots and checking for horizontal overflow, clipped text, and collapsed sections. Fix anything the sweep reveals before reporting done.

## Technical notes

- All work stays in `src/styles.css`, the section/route components, and `navigation.tsx`. No content, data or routing changes.
- Fluid sizing uses `clamp()` in rem; breakpoints follow Tailwind defaults with an added `xs` (~430px) for the phone/large-phone split.
- `h-screen` is replaced with `h-dvh`/`min-h-dvh` throughout; pinned scroll sections gain a `(min-height: 640px)` guard.
- Verification runs headless Chromium against the local dev server at each width; screenshots are kept out of the project tree.
