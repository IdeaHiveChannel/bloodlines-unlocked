# Plan: Reposition "What I Treat" Section

Update the "What I Treat" section with 14 new anatomical/condition categories, standardized content structure, and responsive typography for English and Malayalam.

## Content Updates

- Update `src/lib/i18n/en.ts` and `src/lib/i18n/ml.ts` with the new 14 categories.
- Each category will have a merged "Clinical + Patient" title and a single natural explanation.
- Ensure 100% natural Malayalam phrasing as provided.

## Component Refactoring (`src/components/sections/WhatITreat.tsx`)

- Reorder categories into the clinically logical order (01 Brain to 14 Other).
- Change layout to 1 card per row on mobile (`grid-cols-1`).
- Implement the "Arrow" UI for both mobile and desktop.
- Remove "SEO keyword blocks" from the mobile view of this section.

## Design & Typography

- **Mobile Spacing**:
  - Horizontal padding: 20–24px.
  - Card gap: 12–16px.
  - Card internal padding: 20–24px.
  - Vertical rhythm: increased spacing between intro and first card.
- **English Typography**:
  - Mobile Title: 18–20px (`text-lg` or `text-xl`).
  - Mobile Description: 14–15px (`text-sm`).
- **Malayalam Typography**:
  - Separate typography treatment via `html[lang="ml"]` scope.
  - Line-height: 1.6–1.7.
  - Title: 18–20px.
  - Body: 14–15px.
  - No fixed heights or truncation; cards expand to content.

## Technical Details

- Use `tx()` for all UI strings.
- Add specific utility classes or inline styles for the Malayalam line-height and mobile-specific font sizes if standard utilities aren't precise enough.
- Ensure the "Arrow" transitions correctly on hover.
