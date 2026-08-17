---
name: Content and Architectural Restructuring
description: Restructuring the site based on the doctor's intended problem -> anatomical area -> condition -> procedure hierarchy, expanding clinical material, and finalizing Malayalam localization.
type: feature
---

## Phase 1: Core Content & Hierarchy
- Update `src/lib/content.ts` with revised regions (explicit Abdomen) and expanded condition lists.
- Fix Visceral Aneurysm mapping (currently points to Varicose Veins).
- Add new conditions: Bronchial artery embolisation (Hemoptysis), Pulmonary AVM, Angiomyolipoma, Hepatic Hemangioma, Carotid Body Tumour, Pre-operative Tumour Embolisation, Juvenile Angiofibroma, Peripheral Vascular Malformations.
- Expand Brain, Liver, and Kidney sections with specific clinical conditions and patient-language explanations.

## Phase 2: Navigation & Homepage
- Update `src/components/sections/WhatITreat.tsx` with the new hierarchy and patient-language examples.
- Refactor `src/components/hero/Hero.tsx` to include the primary SEO H1 while keeping the existing hook as supporting copy.
- Standardize Footer: remove Kannur, clarify Dr. Sagar's direct contact.

## Phase 3: Procedures & Evidence
- Refactor procedures in `src/lib/content.ts` to include clinical layers (What it treats, How it is performed, etc.).
- Add dedicated pages for Mechanical Thrombectomy, Bronchial Artery Embolisation, and Pulmonary AVM Embolisation.
- Update `src/components/sections/BeforeAfter.tsx` (Evidence) to support real clinical imagery vs. animations.

## Phase 4: Localization (Malayalam) Pass
- Full sweep of `src/lib/i18n/strings-ml.ts` and `src/lib/i18n/content-ml.ts`.
- Translate all new conditions, procedures, and anatomical regions.
- Ensure natural spoken Malayalam phrasing (e.g., "രക്തക്കുഴലിൽ ബ്ലോക്ക്") instead of formal prose.

## Phase 5: Contact & Second Opinion
- Update Second Opinion page: ensure prefilled WhatsApp/Email flow with explicit file attachment instructions.
- Remove all "clinic" and "practice" terminology; use Dr. Sagar's name directly.
