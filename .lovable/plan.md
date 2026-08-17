# Plan: Enhanced Clinical Animations & Procedure Deep-Dives

Reposition the visual storytelling to focus on clinical mechanics (Disease → Access → Treatment → Result) as requested by Dr. Sagar. This involves upgrading the existing procedural animations, adding new visual layers (ultrasound, ulcers), and creating comprehensive detail pages for the core procedures.

## User Review Required

> [!IMPORTANT]
> - **Visual Complexity**: We are moving from "abstract" animations to "clinical mechanic" animations. This means more frames/states per procedure.
> - **Anatomy Map**: Adding "Abdomen" as a distinct region involves updating the SVG hotspots and coordinate mapping.

## Proposed Changes

### 1. Enhanced Procedural Animations (Storyboard System)
- **Angioplasty & Stenting**: Update sequence to explicitly show: narrowing → guidewire crossing → balloon expansion → plaque compression → stent deployment → restored flow.
- **Varicose Veins & Venous Ulcer**: Add a new composite animation:
    - Faulty vein + visible skin ulcer.
    - Ultrasound guidance overlay during treatment.
    - Ablation catheter action.
    - Vein closure + subsequent ulcer shrinking/healing.
- **Liver: TACE vs. Microwave Ablation**: Split these into two distinct visual models:
    - **TACE**: Show microcatheter in feeding artery + beads delivery + reduced supply.
    - **Ablation**: Show needle antenna + heat zone expansion + cellular destruction ("burning").
- **Thrombectomy**: Refine to show capture and withdrawal mechanics.

### 2. Anatomy Map Expansion
- **Abdomen Integration**: Add "Abdomen" as a core anatomical region in `Anatomy.tsx`.
- Map liver, renal, and visceral vessels under this new region.
- Update SVG paths to include the mid-section hotspot.

### 3. Procedure Detail Pages (Deep-Dives)
- Create dynamic routes for 6 flagship procedures:
    1. Angioplasty & Stenting
    2. Mechanical Thrombectomy
    3. Endovascular Aneurysm Repair (EVAR)
    4. Endovenous Laser Ablation
    5. TACE (Chemoembolization)
    6. Microwave Ablation
- **Content Structure** (English & Malayalam):
    - Symptoms & Causes
    - Diagnosis (Imaging requirements)
    - Treatment (Step-by-step minimally invasive approach)
    - Recovery & Benefits
- Implementation: New route `src/routes/_locale/procedures/$slug.tsx` (if not already present or expanded).

### 4. Mobile Refinement
- Audit the Procedures scroll section for wide-screen mobile (e.g., iPhone Max, Pixel Fold).
- Ensure "Beat" text (step-by-step descriptions) doesn't overlap with the animation canvas or the contact dock.

## Technical Details

- **Animation Engine**: `StoryboardCanvas` refactor to handle more granular states (beats 1-6).
- **i18n**: Parallel Malayalam translations for all new medical sections.
- **Components**:
    - Update `src/components/procedures/canvases/` for each specific procedure.
    - Update `src/lib/content.ts` with expanded procedure metadata.
- **Routes**:
    - `src/routes/$locale.procedures.$slug.tsx`: The main detail view.
