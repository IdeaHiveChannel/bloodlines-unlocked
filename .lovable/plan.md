# Plan: Visual Polish, FAQ Implementation, and Deep Linking

This plan addresses layout issues in the Conditions section, adds a new FAQ section for common patient concerns (Brain, Leg, Kidney), and ensures "Read guide" links lead to specific condition pages.

## User Review Required

> [!IMPORTANT]
> The FAQ content will be implemented in both English and Malayalam using natural medical phrasing.

- **Check Condition Cards:** Verify and fix overflows/clipping in `WhatITreat.tsx` across all viewports.
- **FAQ Section:** Add a new `FAQ.tsx` component to the homepage with categories for Brain, Legs, and Kidneys.
- **Deep Linking:** Update `WhatITreat` items to ensure each points to its specific clinical guide rather than generic indexes.

## Proposed Changes

### 1. I18n & Content
- Add FAQ strings to `src/lib/i18n/en.ts` and `src/lib/i18n/ml.ts`.
- Ensure all 14 treated conditions have unique, accurate `to` paths in both dictionaries.

### 2. Components
#### `src/components/sections/WhatITreat.tsx`
- Refine CSS/Tailwind classes to prevent text overflow in Malayalam (which often has longer character strings).
- Ensure `min-h` and `flex-grow` logic handles varied content lengths.

#### `src/components/sections/FAQ.tsx` (New)
- Create a modern, accessible accordion-style FAQ section.
- Content focus: 
    - **Brain:** Stroke recovery, aneurysm risks.
    - **Legs:** Circulation, non-healing wounds, varicose veins.
    - **Kidneys:** Renal artery stenosis, blood pressure connection.

### 3. Layout Integration
#### `src/routes/{-$locale}.index.tsx`
- Insert the `<FAQ />` component before `<Consultation />`.

## Technical Details

- **Responsive Checks:** Use `line-clamp` or `hyphens-auto` for long Malayalam words in small containers.
- **Animations:** Use `framer-motion` for the FAQ accordion to maintain the cinematic feel.
- **Routing:** Verify all `to` paths against existing routes in `src/routes/`.
