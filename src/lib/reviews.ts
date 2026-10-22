export const GOOGLE_REVIEW_URL = "https://g.page/r/CdwoPCBDqQVaECE/review";

export type VisitType = "consultation" | "treatment" | "followup";

/** Conditions the site covers, as offered in the review form. */
export const reviewConditions = [
  "Acute Ischemic Stroke", "Brain Aneurysm", "Brain AVM / Dural AVF", "Carotid Artery Disease",
  "Peripheral Arterial Disease", "Diabetic Foot", "Gangrene / Tissue Loss", "Poor Blood Circulation",
  "Varicose Veins / Venous Ulcers", "Deep Vein Thrombosis", "Aortic Aneurysm", "Liver Tumours",
  "Thyroid Nodules", "Kidney Artery Disease", "Knee Osteoarthritis", "Enlarged Prostate (BPH)",
  "Uterine Fibroids", "Dialysis Access Problems",
] as const;

export const OTHER = "Other Condition";
export const PREFER_NOT = "Prefer Not to Say";

/**
 * Factual opening line only — never adds praise or outcomes. The condition is
 * included only when the patient opts in and actually named one.
 */
export function buildIntro(visit: VisitType, condition: string, includeCondition: boolean): string {
  const named = includeCondition && condition && condition !== PREFER_NOT ? condition.toLowerCase() : "";
  const verb = visit === "treatment" ? "was treated by" : visit === "followup" ? "had a follow-up with" : "consulted";
  return named ? `I ${verb} Dr. Mandeep Sagar regarding ${named}.` : `I ${verb} Dr. Mandeep Sagar.`;
}

export function composeReview(intro: string, experience: string): string {
  return [intro.trim(), experience.trim()].filter(Boolean).join(" ");
}
