import type { Pillar } from "./types";
import { stroke } from "./stroke";
import { varicoseVeins } from "./varicose-veins";
import { diabeticFoot } from "./diabetic-foot";
import { pad } from "./peripheral-arterial-disease";
import { gangrene } from "./gangrene";
import { dvt } from "./deep-vein-thrombosis";
import { thyroidNodules } from "./thyroid-nodules";
import { kneeOsteoarthritis } from "./knee-osteoarthritis";
import { bph } from "./enlarged-prostate";
import { uterineFibroids } from "./uterine-fibroids";
import { brainAneurysm } from "./brain-aneurysm";
import { brainAvm } from "./brain-avm-avf";
import { liverTumours } from "./liver-tumours";
import { poorCirculation } from "./poor-blood-circulation";

export type { Pillar, Faq } from "./types";

/** Priority order — this is the branding sequence, not alphabetical. */
export const pillars: Pillar[] = [
  stroke,
  varicoseVeins,
  diabeticFoot,
  pad,
  gangrene,
  dvt,
  thyroidNodules,
  kneeOsteoarthritis,
  bph,
  uterineFibroids,
  brainAneurysm,
  brainAvm,
  liverTumours,
  poorCirculation,
];

export function getPillar(slug: string) {
  return pillars.find((p) => p.slug === slug);
}

export function hasPillar(slug: string) {
  return pillars.some((p) => p.slug === slug);
}

/** Turns a procedure slug into a readable label when it is not in the procedure index. */
export function slugToLabel(slug: string) {
  return slug
    .split("-")
    .map((w) => (w.length <= 4 && w === w.toUpperCase() ? w : w[0].toUpperCase() + w.slice(1)))
    .join(" ");
}
