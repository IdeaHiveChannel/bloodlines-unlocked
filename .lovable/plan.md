# Smart Header: Hide on Scroll Down, Show on Scroll Up

## Goal
Make the fixed top header hide when the user scrolls down, and reappear as soon as the user scrolls back up. This frees screen space while preserving instant access to navigation.

## Implementation

### 1. Scroll-direction detection in `src/components/navigation.tsx`
- Add state for `hidden` (boolean) alongside the existing `scrolled` state.
- Track `lastScrollY` in a ref to compare with `window.scrollY` inside the existing passive scroll listener.
- Use a small threshold (≈10 px) to ignore micro-scroll noise.
- Logic:
  - If `scrollY > lastScrollY + threshold` and `scrollY > 80 px` → hide header.
  - If `scrollY < lastScrollY - threshold` → show header.
  - Always show header within the first ~80 px of the page so it is visible on load.

### 2. Disable while mobile menu is open
- When the mobile overlay (`open === true`) is active, skip the hide logic and force the header to stay visible so the menu toggle remains reachable.

### 3. Visual transition
- Apply `transform` transition (`-translate-y-full` when hidden, `translate-y-0` when visible) to the `<nav>` or `<header>` element.
- Keep the existing `scrolled` background/backdrop-blur transition intact.
- Respect reduced motion via `prefers-reduced-motion` (or keep transition subtle).

### 4. Verify across viewports
- Desktop: header should slide away smoothly and return on any upward scroll.
- Mobile/tablet: same behavior; ensure the hamburger button does not disappear mid-scroll.
- Confirm no layout shift or z-index issues with the contact dock or mobile overlay.

## Files to change
- `src/components/navigation.tsx` (primary change)
- `src/styles.css` only if a new utility/variant is needed (unlikely)

## Success criteria
- Scrolling down hides the header after a short distance.
- Scrolling up immediately reveals it.
- Header is always visible at the top of the page.
- Mobile menu remains usable and the toggle stays visible when the menu is open.
