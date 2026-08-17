# Plan: Conditions Section Refresh (Mobile-First)

Refactor the Conditions section (`WhatITreat.tsx`) to implement a compact, high-hierarchy presentation on mobile while maintaining the premium desktop grid. Update English and Malayalam dictionaries with new category-specific medical content.

## User Review Required

> [!IMPORTANT]
> - The Malayalam mobile design rule suggests merging "patient-language line" into titles/descriptions if they become too long. I will implement this dynamically in the component to ensure readability.
> - The "More conditions" list will be implemented as an expandable section after the primary 14 cards on mobile.

## Proposed Changes

### Content & Localization
- **`en.ts` / `ml.ts`**:
    - Update `whatITreat` dictionary with 14 detailed cards (Category, Condition, Patient-language, Explanation).
    - Add a new `moreConditions` array containing the secondary clinical list (Visceral aneurysm, etc.).
    - Update `h2`, `eyebrow`, and `intro` copy as requested.

### Component refactor
- **`WhatITreat.tsx`**:
    - Update the card rendering logic to support the new 4-tier hierarchy:
        1. **Category**: Tiny, uppercase.
        2. **Condition**: Prominent.
        3. **Patient-language**: Optional, one short line.
        4. **Description**: 2-3 lines max.
    - Implement the "More conditions" expandable list for mobile only (visible as a grid on desktop if needed, or linked to the full diseases list).
    - Add logic to handle Malayalam-specific length rules (merging patient terms if needed).
    - Ensure responsive rules: 1 card per row on mobile, 3 per row on desktop.

## Technical Details
- **Responsive Typography**: Use specific pixel values (18-20px for titles, 14-15px for description) on mobile as requested.
- **i18n**: Utilize `useTx` for natural Malayalam phrasing.
- **Layout**: Use Tailwind's `hidden lg:block` and `lg:hidden` to toggle the "More conditions" expandable list vs. the desktop view.
- **Expansion**: Use `framer-motion`'s `AnimatePresence` for the "More conditions" list to ensure a smooth transition.
