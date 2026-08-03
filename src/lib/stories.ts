// Patient stories. Published only with written consent, in the patient's own words.
// Nothing here is written on a patient's behalf — the array stays empty until
// verified, consented quotes are supplied.

export type PatientStory = {
  /** The patient's own words, unedited apart from trimming. */
  quote: string;
  /** First name or initials only. */
  name: string;
  /** Condition treated, in plain language. */
  condition: string;
  city: string;
  /** Optional disease guide slug this story is anchored to. */
  guide?: string;
  /** Optional condition slug when there is no full guide. */
  conditionSlug?: string;
  year?: string;
};

export const patientStories: PatientStory[] = [];

export const consentNote =
  "Patient stories are published here only in the patient's own words and only with written consent. Nothing on this page is written on a patient's behalf, and no story is edited to change its meaning.";
