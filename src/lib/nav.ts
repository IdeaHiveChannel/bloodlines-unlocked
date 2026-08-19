import { useT } from "./i18n/react";
import { useTx } from "./i18n/tx";

export type NavLink = { to: string; label: string };
export type NavGroup = { key: string; label: string; links: NavLink[]; columns?: 1 | 2 };

/** Slug used for the expertise page anchors, kept in one place. */
export const expertiseAreas = [
  { id: "neurointervention", label: "Neurointervention" },
  { id: "stroke-care", label: "Stroke care" },
  { id: "peripheral-vascular", label: "Peripheral vascular" },
  { id: "aortic-disease", label: "Aortic disease" },
  { id: "venous-disease", label: "Venous disease" },
  { id: "interventional-oncology", label: "Interventional oncology" },
  { id: "hepatobiliary-portal", label: "Hepatobiliary & portal" },
  { id: "thyroid-intervention", label: "Thyroid intervention" },
  { id: "renal-genitourinary", label: "Renal & genitourinary" },
  { id: "musculoskeletal-pain", label: "Musculoskeletal & pain" },
  { id: "womens-health", label: "Women's health" },
  { id: "dialysis-access", label: "Dialysis access" },
];

const treatCategories: NavLink[] = [
  { to: "/diseases/stroke", label: "Acute ischemic stroke" },
  { to: "/diseases/poor-blood-circulation", label: "Leg circulation & PAD" },
  { to: "/diseases/varicose-veins", label: "Varicose veins & ulcers" },
  { to: "/diseases/brain-aneurysm", label: "Abdominal aneurysms" },
  { to: "/diseases/diabetic-foot", label: "Diabetic foot & wounds" },
  { to: "/diseases/thyroid-nodules", label: "Thyroid swellings" },
  { to: "/diseases/liver-tumours", label: "Liver tumours" },
  { to: "/diseases/poor-blood-circulation", label: "Kidney blood vessels" },
  { to: "/diseases/knee-osteoarthritis", label: "Knee pain" },
  { to: "/diseases/uterine-fibroids", label: "Uterine fibroids" },
  { to: "/diseases/enlarged-prostate", label: "Enlarged prostate" },
  { to: "/diseases/poor-blood-circulation", label: "Dialysis access" },
  { to: "/diseases", label: "Other conditions" },
];

const treatmentCategories: NavLink[] = [
  { to: "/procedures/angioplasty", label: "Restore blood flow" },
  { to: "/procedures/thrombectomy", label: "Remove blood clots" },
  { to: "/diseases/brain-aneurysm", label: "Brain vessel treatment" },
  { to: "/procedures/aneurysm-repair", label: "Aneurysm treatment" },
  { to: "/procedures/angioplasty", label: "Vein treatment" },
  { to: "/procedures/angioplasty", label: "Tumour treatment" },
  { to: "/procedures/angioplasty", label: "Thyroid treatment" },
  { to: "/procedures/angioplasty", label: "Knee pain treatment" },
  { to: "/procedures/angioplasty", label: "Fibroid treatment" },
  { to: "/procedures/angioplasty", label: "Prostate treatment" },
  { to: "/procedures/angioplasty", label: "Dialysis access treatment" },
  { to: "/procedures", label: "All treatments" },
];

const patientInfo: NavLink[] = [
  { to: "/patient-information/how-treatment-works", label: "How treatment works" },
  { to: "/patient-information/before-consultation", label: "Before consultation" },
  { to: "/patient-information/preparing-for-treatment", label: "Preparing for treatment" },
  { to: "/patient-information/after-treatment", label: "After treatment" },
  { to: "/resources", label: "Resources" },
  { to: "/testimonials", label: "Patient stories" },
  { to: "/media", label: "Media & publications" },
  { to: "/contact", label: "Contact" },
];

/**
 * The single source of truth for site navigation. The header dropdowns, the
 * mobile menu and the footer all read from here, so nothing can drift or repeat.
 */
export function useSiteNav() {
  const tx = useTx();
  const t = useT();
  const localise = (links: NavLink[]) => links.map((l) => ({ ...l, label: tx(l.label) }));

  const groups: NavGroup[] = [
    { key: "treat", label: tx(t.nav.treat), links: localise(treatCategories), columns: 2 },
    { key: "procedures", label: tx(t.nav.procedures), links: localise(treatmentCategories), columns: 2 },
    { key: "patient", label: tx(t.nav.patient), links: localise(patientInfo) },
  ];

  return {
    groups,
    about: { to: "/about", label: tx(t.nav.about) },
    expertise: { to: "/expertise", label: tx(t.nav.expertise) },
    secondOpinion: { to: "/second-opinion", label: tx(t.nav.secondOpinion) },
    book: { to: "/contact", label: tx(t.nav.book) },
  };
}
