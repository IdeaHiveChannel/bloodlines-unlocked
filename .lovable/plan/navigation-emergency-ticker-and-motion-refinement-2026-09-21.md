# Navigation, emergency ticker, and motion refinement

## Scope guardrails
- Preserve all existing URLs, route files, page order, clinical copy, imagery, videos, forms, SEO metadata, structured data, sitemap, hreflang, robots rules, domain settings, and 404 responses.
- Treat this as presentation-layer work only. Existing procedure scroll stories remain intact; shared motion will frame them rather than replace their progress logic.

## 1. Global emergency ticker and header spacing
- Add one compact bilingual emergency ticker above the fixed header on every page, using the approved cautious warning signs and directing visitors to emergency services or the nearest emergency department—not routine WhatsApp or booking.
- Use a restrained single-line marquee with duplicated visual track content for a seamless loop, while exposing the message once to assistive technology.
- Stop continuous movement under `prefers-reduced-motion` and show the complete static message with wrapping when needed.
- Make the ticker and header operate as one fixed stack, including safe-area spacing, correct overlay layering, and updated page/header anchor offsets so no content or sticky condition sub-navigation is obscured.
- Remove the large homepage emergency block once the global ticker is present; retain the detailed emergency notices within urgent condition guides, where expanded guidance remains clinically useful.

## 2. Premium mobile navigation
- Replace the current chip wall with a high-coverage, full-screen mobile overlay built around three readable zones:
  - Primary: About, What I treat, Procedures, Expertise, For patients, Second opinion.
  - Expandable groups: What I treat, Procedures, and For patients reveal their existing child destinations in compact accordions.
  - Actions and language: prominent Book consultation, then WhatsApp and Call, followed by the existing English / മലയാളം control.
- Keep desktop navigation destinations and dropdown content unchanged.
- Add a restrained overlay entrance, staggered group reveal, chevron/row feedback, and subtle item interaction states using the shared motion settings.
- Make the menu accessible: labelled toggle, Escape close, focus containment/restoration, background scroll lock, active/expanded states, close-on-navigation, and mobile touch targets of at least 44px.
- Check Malayalam labels at narrow widths using flexible grid rows and natural wrapping without reducing the established Malayalam type below readable sizes.

## 3. Shared motion architecture
- Create reusable Framer Motion primitives and variants rather than embedding unrelated timings across every page:
  - section/group reveal: opacity plus 20–30px upward movement;
  - text hierarchy: label, heading, supporting copy, then actions;
  - image/figure reveal: opacity plus scale from about 0.97 to 1;
  - list/card stagger: 60–100ms between items;
  - numbered sequence and timeline progression;
  - CTA and related-content reveal without bounce;
  - short route-content transition keyed by pathname, without delaying navigation or interaction.
- Use viewport-triggered, one-time reveals with modest thresholds so content is readable immediately as it approaches the viewport.
- Centralize durations/easing and provide reduced-motion variants that render final states immediately, disable blur/large transforms, and avoid continuous or decorative motion.
- Keep all semantic HTML and server-rendered text in place so animation never hides content from search engines or causes layout shift.

## 4. Apply motion by shared page type
- Home: sequence section headers, anatomy/condition cards, evidence, patient journey, recovery, FAQs, and consultation blocks while preserving the current hero and procedure storytelling behavior.
- Index pages: stagger condition, procedure, expertise, resource, media, and testimonial entries; animate filters/results without changing filtering behavior.
- Condition guides: animate hero hierarchy, key facts, section headings, bullets, numbered diagnosis/approach/recovery lists, figures, evidence comparisons, procedure links, FAQs, related content, and CTA blocks through the shared guide template.
- Procedure pages: animate overview, facts, video wrapper, informational lists, numbered procedure sequence, FAQs, related links, and CTAs; do not alter real video behavior or existing homepage procedure scenes.
- Informational pages: apply the same hierarchy to About, Second opinion, Contact, Patient landing, all four patient-information pages, Privacy, and Terms through their shared and route-level structures.
- Interactive areas: preserve current accordion/tab state logic while adding smooth height/opacity transitions and restrained selection changes.
- Malayalam routes automatically use the same components and variants, with no word-by-word animation and no changes to Malayalam fonts, line-height, or wrapping rules.

## 5. Validation
- Run type/build checks and browser tests on representative English and Malayalam routes.
- Test desktop and narrow mobile widths for ticker/header stacking, no horizontal overflow, readable Malayalam, one-hand menu use, focus and Escape behavior, accordion interaction, sticky guide navigation, anchors, forms, videos, and route changes.
- Test normal and reduced-motion modes, confirm offscreen animations are idle, and verify that existing procedure scroll scenes still respond correctly.
- Recheck valid routes and the existing English/Malayalam 404 cases to ensure status behavior is unchanged.

## Technical notes
- Reuse the existing navigation data, locale-aware links, contact constants, and language switcher; no destinations or contact behavior will be duplicated or redefined.
- Introduce small shared motion/ticker/menu components and update shared templates first, then only add route-level wrappers where a page is not already covered.
- Use transform/opacity animations, reserved dimensions, and lazy-loaded media as currently implemented to protect rendering performance.
