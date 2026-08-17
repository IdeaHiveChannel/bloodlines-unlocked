# Localization Audit and Cleanup Plan

Auditing and cleaning up leftover English strings in the Malayalam version of the application, specifically targeting the Anatomy map, Procedure beats, and Patient Stories.

## User Review Required

> [!IMPORTANT]
> The audit revealed that several strings in the "Procedure Beats" section are still displaying in English despite being translated in the dictionary. I will fix the mapping to ensure the Malayalam text is used.

- Are there any specific clinical terms you want to keep in English (e.g., "TACE", "DVT") or should everything be 100% Malayalam? (Currently assuming 100% Malayalam as per previous instructions).

## Proposed Changes

### Localization Dictionary (`src/lib/i18n/strings-ml.ts`)
- Add missing Malayalam translations for procedure beats found during audit.
- Add translations for anatomy region labels and procedure lists if missing.
- Add translations for patient story UI elements.

### Content Data (`src/lib/content.ts` & `src/lib/i18n/ml-content/*.json`)
- Ensure all condition and procedure beats in `src/lib/content.ts` have corresponding keys in `strings-ml.ts`.
- Verify that `src/lib/i18n/ml-content/procedures.json` contains the full set of translated beats.

### Components Audit
- **Anatomy (`src/components/anatomy/Anatomy.tsx`)**: Verify `tx()` is used for all region labels and procedure lists.
- **Procedures (`src/components/procedures/Procedures.tsx`)**: Ensure `tx()` correctly wraps procedure names, one-liners, and each "beat" in the storyboard.
- **Patient Stories (`src/components/sections/PatientStories.tsx`)**: Verify localization of the empty state message and any hardcoded UI labels.

## Technical Details
- Use `useTx` hook for reactive translations in components.
- Standardize all text rendering through the `tx()` utility.
- Audit `milestones` and `resources` in `src/lib/content.ts` for localization coverage.

## Verification Plan

### Automated Audit
- Run Playwright audit script `/tmp/browser/audit_localization.py` again after fixes to confirm 0 English strings in targeted sections.

### Manual Verification
- View `/ml` in preview.
- Scroll through "Procedure Beats" and check all text.
- Toggle anatomy regions and verify labels and procedure lists.
- Inspect the "Patient Stories" section (even if empty) for UI localization.
