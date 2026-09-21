# Emergency notice and performance optimization

## Goal
Replace the current generic ticker with a two-level bilingual emergency message, then complete a measured performance pass before any further site-wide animation expansion. Preserve the cinematic design, medical content, routes, SEO, imagery, videos, anatomy, navigation, forms, and all 13 procedure stories.

## Verified baseline
- The homepage imports all 15 sections eagerly, including the anatomy, all 13 procedure stories, before/after imagery, videos, FAQs, and consultation content.
- The shared language layer imports both complete English and Malayalam dictionaries on every route. Clinical-language data also statically imports all 14 Malayalam condition guides wherever its shared accessor is used.
- The procedures story currently mounts all 13 SVG scenes, 13 scroll observers, and their many caption/progress transforms together, including scenes far outside the viewport.
- Lenis and the desktop custom cursor each maintain an independent page-lifetime animation frame loop. Hero particles keep animating after leaving view.
- The global reveal system correctly waits for section proximity, but uses blur during every reveal; blur is a repaint-heavy effect.
- Inline videos use posters but still render `<video src>` with `preload="metadata"`, causing media requests before proximity or interaction.
- No responsive `srcset`/`sizes` image system exists. Several images omit intrinsic dimensions or asynchronous decoding; the below-fold doctor portrait is eager.
- Google Fonts currently requests every Poppins weight from 100–900 plus four Malayalam weights.
- Local mobile/desktop baselines show very low layout shift, but development-mode transfers are about 10–10.7 MB per tested route. The large shared Malayalam modules appear even on English routes. These figures will be retained only as comparative development baselines, not presented as production bundle sizes.

## 1. Two-level emergency communication
- Make the ticker a real button/link-like control in the initial server-rendered HTML; no emergency copy will depend on JavaScript to exist.
- Keep a fixed persistent lead phrase and icon, followed by only the compact symptom/action message moving slowly.
- Use the supplied Malayalam compact and expanded wording exactly. Add an equivalent, clinically cautious English version written naturally rather than literally translated.
- On activation, open an accessible high-priority notice containing the complete message, a direct `112` call action, nearest-emergency-department guidance, and an explicit warning not to wait for WhatsApp, email, appointments, or second-opinion replies.
- Support keyboard activation, focus containment/restoration, Escape, descriptive labels, and no routine-booking action inside the emergency notice.
- Make mobile slightly taller with a slower marquee. Pause movement on hover/focus. Under reduced motion, show a static wrapped compact message and retain access to the full notice.

## 2. Reduce initial JavaScript and isolate routes
- Convert below-the-fold homepage sections into explicit lazy boundaries with stable reserved space and near-viewport preloading. Keep the hero and first meaningful section server-rendered and immediately usable.
- Split the 13 procedure scene implementations so only a near-viewport scene module is fetched and mounted; do not bundle every scene into the homepage or procedures index upfront.
- Audit route imports and split heavyweight detail/index content so `/`, `/conditions`, `/procedures`, and unrelated information pages do not pull each other's page-only modules.
- Separate English and Malayalam dictionaries/content into locale-specific lazy chunks while keeping route metadata and initial visible language correct during server rendering.
- Replace broad icon entry imports where necessary with tree-shakeable per-icon imports if production output confirms the current import pattern remains oversized.
- Remove or shorten the first-visit blocking loader so meaningful content is not hidden for 2.2 seconds; preserve its visual signature as a non-blocking introduction if retained.

## 3. Optimize images without changing imagery
- Inventory intrinsic dimensions and rendered sizes for all bundled images.
- Generate appropriately sized WebP/AVIF variants for high-traffic hero, doctor, condition, evidence, and gallery imagery, with JPEG/WebP fallback where needed.
- Add `picture`/`srcset`/`sizes`, explicit width and height or aspect-ratio reservations, and async decoding.
- Prioritize only the actual homepage LCP candidate; lazily load below-fold doctor, condition, evidence, and gallery images.
- Keep the existing crops and presentation at each breakpoint, and compare screenshots to prevent visual regression.

## 4. Defer video bandwidth
- Render poster-only shells initially with reserved aspect ratios and no MP4 `src` request.
- Attach the MP4 source only when the video nears the viewport or the user activates it; retain muted autoplay when visible and pause when hidden.
- Keep reduced-motion and constrained-data users on the poster/control state until explicit play.
- Re-encode the unusually large aneurysm-coiling source while preserving its content and acceptable clinical detail; retain all four real procedure videos.

## 5. Make SVG and scroll effects visibility-aware
- Gate each procedure story before creating its scroll observer, transforms, and SVG scene; keep only the current and adjacent stories active.
- Pause vessel-flow loops and other CSS animation when a scene is hidden or outside the viewport.
- Preserve all 13 unique hand-built scenes, their beat sequence, sticky storytelling, and procedure-detail use.
- Memoize static SVG geometry and reduce duplicated transform subscriptions where this does not alter timing or appearance.
- Gate anatomy motion and nonessential event handling by visibility; retain every hotspot and interaction.

## 6. Reduce continuous rendering work
- Disable Lenis on touch/mobile and reduced-motion environments; verify whether native scrolling is smoother before retaining it elsewhere.
- Pause Lenis when the page is hidden and avoid competing scroll pipelines with procedure stories.
- Stop the custom cursor loop when idle/page-hidden and keep it disabled on touch devices.
- Pause hero particles when offscreen and remove them on reduced-motion/touch when needed; keep the same desktop appearance.
- Replace shared reveal blur with opacity and small composited transforms where visually equivalent; keep one-time near-viewport initialization and restrained timing.
- Localize scroll state so it cannot rerender the whole homepage.

## 7. Font delivery
- Reduce Poppins to weights actually used by the rendered site and retain only required Noto Sans Malayalam weights.
- Keep non-blocking `font-display` behavior and the existing typography, line height, wrapping, and Malayalam readability.

## 8. Verification and reporting
- Record before/after route bundles and network waterfalls for `/`, `/conditions`, `/procedures`, a procedure detail, `/ml`, and a Malayalam condition guide.
- Test mobile at 390×844 with CPU/network throttling representative of a mid-range Android device, plus desktop at 1280×1800.
- Measure first contentful paint, largest contentful paint, cumulative layout shift, interaction responsiveness, transferred bytes, long tasks, and scroll frame stability. Treat local measurements as comparative; use production diagnostics after publishing for real-user/field confirmation.
- Verify ticker initial HTML, modal accessibility, reduced-motion static state, sticky header stacking, mobile menu, forms, videos, anatomy hotspots, all 13 procedure stories, English/Malayalam layouts, and existing 404 behavior.
- Report the confirmed causes, changes, deferred assets, animation changes, retained videos/scenes, and desktop/mobile test results. Do not begin any new animation expansion in this pass.

## Guardrails
- No changes to URLs, canonicals, sitemap, hreflang, structured data, robots, clinical claims outside the supplied emergency copy, existing imagery/content meaning, domain configuration, forms, or valid/404 routing.
- No removal of anatomy, procedure stories, real videos, cinematic styling, or meaningful motion.
