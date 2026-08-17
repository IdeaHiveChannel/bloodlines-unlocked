# Plan: Expand Clinical Evidence and DVT Content

Add deep vein thrombosis (DVT) clinical data and expand the "Before & After" evidence section with the provided images.

## User Review Required

> [!IMPORTANT]
> I have processed your uploaded images as `case-dvt-before.jpg` and `case-dvt-after.jpg`. These will be integrated into the clinical evidence section.

## Technical Details

### 1. Asset Integration
- Import new DVT assets in `src/components/sections/BeforeAfter.tsx`.
- Update the `cases` array to include the DVT case using the uploaded images.

### 2. DVT Content Expansion
- Update `src/lib/pillars/deep-vein-thrombosis.ts` with the provided clinical details (Symptoms, Risk Factors, and Risks).
- Ensure all new strings are added to `src/lib/i18n/strings-ml.ts` for Malayalam coverage.

### 3. Translation Sync
- Add natural Malayalam clinical terms for:
    - "Deep vein thrombosis (DVT)"
    - "Pulmonary embolism"
    - "Venous thromboembolism"
    - "Venous ulcers"
    - Specific symptoms (Swelling, tenderness, warmth, discolored skin).

### 4. Patient Landing Update
- Verify the DVT link is prominent in the "Patient Landing" page structure.

### 5. Verification
- Run a Playwright audit to ensure the new DVT case renders correctly in the "Before & After" slider across all viewports.
- Confirm Malayalam strings appear correctly without clipping or untranslated segments.
