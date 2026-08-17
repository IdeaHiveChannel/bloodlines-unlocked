# Design & Content Evolution: Clinical Precision Pass

Repositioning the digital brand through medically precise patient-search language, expanded anatomical coverage (Abdomen), and refined clinical storytelling for procedures and recovery.

## 1. Content Architecture & Taxonomy (SEO/Patient Search)
- **Global Search Aliases**: Update `src/lib/i18n/en.ts` and `ml.ts` with patient-first terms:
  - **Brain**: "Blocked blood vessels in the brain", "Hemiplegia", "AVM / AVF".
  - **Legs**: "Blackening/gangrene of the leg", "Non-healing ulcer", "Poor blood circulation".
  - **Veins**: "Varicose veins", "Venous ulcer", "Clots / blood clots".
  - **Thyroid**: "Thyroid swelling", "Benign thyroid nodules", "Multinodular goitre".
- **New Condition Entries**:
  - `Carotid body tumour` (Neck)
  - `Juvenile angiofibroma` (Neck/Head)
  - `Renal cell carcinoma` (Kidney) - Focus on pre-op embolization.
  - `Aortic dissection` (Chest/Aorta)
  - `Hemoptysis` (Chest) - "Coughing up blood".

## 2. Anatomy & Abdomen Integration
- **Anatomy Animation**: Update `src/components/anatomy/Anatomy.tsx` to include `Abdomen` as a distinct interactive region.
- **Hotspot Logic**: Ensure the Abdomen hotspot covers Liver, Kidneys, and Visceral vessels.
- **Malayalam Translation**: Ensure "Abdomen" and its sub-conditions are naturally translated in `src/lib/i18n/ml.ts`.

## 3. Procedural Storytelling Refinement
- **Mechanical Thrombectomy (Stroke)**: Update content to emphasize the vascular nature: "A clot has stopped blood flow inside a brain blood vessel."
- **Pre-operative Embolisation**: 
  - Define as a hybrid approach: "Embolisation first → tumour surgery afterwards."
  - Explain the clinical goal: Reducing blood loss during surgical removal of vascular tumours.
- **Renal Artery Stenosis**: 
  - Explicitly link to **Hypertension**: "Blood pressure remains high despite 3+ medications."
- **Liver Differentiation**:
  - Separate `Hepatocellular Carcinoma` (Cancer) from `Hepatic Hemangioma` (Benign blood-vessel tumour).
  - Update `Microwave Ablation` vs `TACE` animation logic to ensure they reflect distinct mechanics (Heat vs Beads).

## 4. Recovery & Patient Journey
- **Timeline Precision**: Update `src/lib/pillars/` recovery sections to reflect the doctor's specific sequence:
  - Day 0: Procedure & Puncture.
  - Day 1: Discharged and Walking / Back to work.
  - 1 Month: Follow-up imaging.
  - 3 Months: Normal life milestone.
- **Terminology**: Use "Discharged and walking", "Routine normal lifestyle resume".

## 5. Media & Clinical Evidence
- **Real Material Support**: Ensure the "Before/After" and "Clinical Case" components (like `BeforeAfter.tsx`) prioritize actual angiography/photographs where placeholders currently exist.
- **Varicose Vein Animation**: 
  - Enhance `src/components/procedures/canvases.tsx` to include an **Ultrasound** visual element during the ablation step.
  - Ensure the **Venous Ulcer** is shown shrinking/healing as a result of the vein closure.

## Technical Details
- Update `src/lib/content.ts` with new condition metadata.
- Expand `ProcedureInfo` and `Pillar` types if necessary to support specific recovery milestones.
- Refactor `Anatomy.tsx` SVG paths to accommodate the new Abdomen region.
