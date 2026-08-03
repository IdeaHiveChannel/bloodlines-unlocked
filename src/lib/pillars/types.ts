export type Faq = { q: string; a: string };

export type TestExplained = {
  name: string;
  why: string;
};

export type TreatmentOption = {
  name: string;
  kind: "Medication" | "Lifestyle" | "Endovascular" | "Surgery" | "Observation" | "Ablation";
  detail: string;
};

export type RecoveryStep = {
  when: string;
  what: string;
};

export type Pillar = {
  slug: string;
  /** Short name used in navigation and cards. */
  name: string;
  /** Full page title. */
  title: string;
  /** Patient's own words — the hero line. */
  heroQuote: string;
  heroLead: string;
  /** One-line summary for the index and metadata. */
  summary: string;
  /** True for /poor-blood-circulation style patient-language landing pages. */
  patientTerm?: boolean;

  symptoms: string[];
  causes: string[];
  riskFactors: string[];
  warningSigns: string[];
  diagnosis: { step: string; detail: string }[];
  tests: TestExplained[];
  treatments: TreatmentOption[];
  approach: string[];
  /** Procedure slugs from content.ts. */
  procedures: string[];
  recovery: RecoveryStep[];
  prevention: string[];
  faqs: Faq[];
  /** Condition slugs from content.ts. */
  relatedConditions: string[];
  /** Related patient symptoms, as search-language phrases. */
  relatedSymptoms: string[];
};
