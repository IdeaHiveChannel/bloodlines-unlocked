# Anatomy Content Refresh and Responsive Optimization

Update the Anatomy section with a new content hierarchy and responsive behavior. English and Malayalam versions will follow a simplified structure for mobile while maintaining the premium interactive experience on desktop.

## User Requirements
- New copy for English and Malayalam (Eyebrow, H2, Description, Labels, Content).
- Mobile-specific behavior:
    - Display only short labels around the body silhouette.
    - Selected-region information appears separately below/alongside the illustration.
    - No text overflow for anatomical phrases on mobile.
- Desktop behavior:
    - Existing interactive visual remains.
    - Labels around the body.
- Clinical mapping:
    - Updated list of conditions per region for the detail panel.
- Interaction CTA: "Explore conditions →".

## Technical Strategy
1. **I18n Update**:
    - Add new `anatomy` object to `en.ts` and `ml.ts`.
    - Include region-specific data (title, subtitle, conditions) in the translation files to handle the different content per region.
2. **Component Refactor (`Anatomy.tsx`)**:
    - Use the new dictionary keys.
    - Update `hotspots` configuration if needed (IDs currently include `eye` and `carotid` which are merged/renamed in the new brief - `Neck` covers carotid).
    - Align region IDs with the new list: `brain`, `neck`, `chest`, `abdomen`, `liver`, `kidney`, `arms`, `pelvis`, `knee`, `legs`, `veins`.
    - Implement the mobile responsive logic:
        - On mobile, hide the complex labels around the body and show only the basic identifiers.
        - Ensure the detail panel is prominent below the SVG on mobile.
    - Update the detail panel to use the new "subtitle + condition list" format.
3. **Clinical Data Alignment**:
    - Ensure `src/lib/content.ts` matches the new region list or adapt the component to override where necessary.

## Proposed Changes

### 1. `src/lib/i18n/en.ts` & `ml.ts`
Add the `anatomy` block containing all requested strings and region-specific content.

### 2. `src/components/anatomy/Anatomy.tsx`
- Update `Hotspot` IDs and mapping.
- Refactor the SVG labels to be simplified on mobile.
- Refactor the Detail Panel to match the "Title, Subtitle, Bulleted conditions" format.

### 3. `src/lib/content.ts`
- Verify `Region` type and `regionLabels` to match the new set.
