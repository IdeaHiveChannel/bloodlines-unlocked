# Navigation dropdowns + floating contact dock

Two changes: replace the crowded, duplicated header links with a small set of grouped dropdown menus, and add a fixed bottom-right contact dock with large call/WhatsApp buttons and tiny social icons.

## 1. Header navigation

Desktop (lg and up) shows five top-level items, no duplicates:

- **About** — plain link to `/about`
- **Diseases** — dropdown (chevron): all 14 disease guides, plus "All diseases"
- **Conditions** — dropdown: featured conditions, plus "All conditions"
- **Procedures** — dropdown: main procedures, plus "All procedures"
- **More** — dropdown: Expertise, Media & publications, Patient stories, Resources, Second opinion, Contact

Behaviour:
- Each dropdown opens on hover (desktop pointer) and on click/Enter for keyboard and touch, with a small chevron that rotates when open.
- Panel is a dark rounded card matching the header, with a short close delay so the pointer can travel into it; Escape closes; clicking outside closes.
- Long lists (Diseases) render as a two-column panel and scroll internally if taller than the viewport.
- "Book consultation" button stays at the right.

Mobile menu (below lg):
- Fixed full-screen panel with proper internal scrolling (`h-dvh` + `overflow-y-auto` on the list, safe-area padding at the bottom) — fixes the current no-scroll bug.
- Same five groups as accordions, so no link is duplicated between the rail and the menu.

## 2. Bottom-right contact dock

A fixed element in the bottom-right corner, present on every page:

- **Large WhatsApp button** and **large Call button** — stacked pills (icon + label on desktop, icon-only circles ~56px on phones), tinted with the accent, always tappable.
- **Tiny social icons row** above them: Facebook, Instagram, LinkedIn, Google Business — roughly 16px icons in muted grey, brightening on hover.
- Sits above page content but below the mobile menu overlay, offset from the edge, and clears the bottom safe area on iOS.
- Uses existing `contact.ts` values (`whatsappLink`, `phoneHref`, `socialLinks`) — no new data.

## Technical notes

- New `src/components/nav-menu.tsx` (dropdown primitive) and `src/components/contact-dock.tsx`; `navigation.tsx` rewritten to use them; dock mounted once in `src/routes/__root.tsx`.
- Dropdown content sourced from `src/lib/pillars` and `src/lib/content.ts` so menus stay in sync with the catalogue.
- Presentation only: no routing, content, or data changes.
