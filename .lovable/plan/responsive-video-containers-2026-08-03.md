# Responsive video containers

Make every video on the site sit inside a single, predictable responsive frame that never overflows the screen — on small phones, on tall/narrow foldables, and in landscape where vertical space is scarce.

## What changes

**Shared video frame component**
- Add one small `MediaFrame` wrapper used by both places videos appear, so the sizing rules live in a single file instead of being copy-pasted.
- Rules: full width of its column, capped at 100% (never wider than the parent), fixed 16:9 aspect ratio, rounded/clipped container, and a height cap that shrinks in landscape (roughly 70% of viewport height in portrait, 55% in short/landscape viewports) so a video can't push the page taller than the screen.
- The video fills the frame with `object-fit: cover` and centred positioning, so no letterbox bars and no stretching at any width.

**Procedure pages (`ProcedureVideo`)**
- Swap the current one-off wrapper for the shared frame. Keeps existing behaviour: autoplay on scroll into view, pause on leave, controls shown when the visitor prefers reduced motion.
- Caption stays below the frame and wraps rather than forcing width.

**Homepage media band (`MediaBand`)**
- Both looping films use the same shared frame, so the two-up grid on desktop and the stacked layout on mobile share identical proportions.
- Grid columns get a minimum width of zero so a video can never force horizontal scrolling on narrow screens.

## Verification
Check the homepage and a procedure page at 320px, 390px, 768px, 1440px, and a landscape phone viewport (844x390) — confirm no horizontal scrollbar and that each video fits within the visible screen height.

## Technical notes
- New file: `src/components/media/MediaFrame.tsx`.
- Uses `aspect-video`, `w-full max-w-full`, `object-cover object-center`, `max-h-[70svh]` with a `landscape:max-h-[55svh]` / short-viewport variant; `svh` units so mobile browser chrome doesn't cause overflow.
- No content, copy, or data changes.
