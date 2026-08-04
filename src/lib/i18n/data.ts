import { pillars, type Pillar } from "../pillars";
import { conditions, procedures, type Condition, type Procedure } from "../content";
import { useLocale } from "./react";
import type { Locale } from "./index";

import brainAneurysm from "./ml-content/pillar-brain-aneurysm.json";
import brainAvmAvf from "./ml-content/pillar-brain-avm-avf.json";
import dvt from "./ml-content/pillar-deep-vein-thrombosis.json";
import diabeticFoot from "./ml-content/pillar-diabetic-foot.json";
import enlargedProstate from "./ml-content/pillar-enlarged-prostate.json";
import gangrene from "./ml-content/pillar-gangrene.json";
import kneeOa from "./ml-content/pillar-knee-osteoarthritis.json";
import liverTumours from "./ml-content/pillar-liver-tumours.json";
import pad from "./ml-content/pillar-peripheral-arterial-disease.json";
import poorCirculation from "./ml-content/pillar-poor-blood-circulation.json";
import stroke from "./ml-content/pillar-stroke.json";
import thyroidNodules from "./ml-content/pillar-thyroid-nodules.json";
import uterineFibroids from "./ml-content/pillar-uterine-fibroids.json";
import varicoseVeins from "./ml-content/pillar-varicose-veins.json";
import conditionsMlJson from "./ml-content/conditions.json";
import proceduresMlJson from "./ml-content/procedures.json";

const mlPillarList = [
  brainAneurysm,
  brainAvmAvf,
  dvt,
  diabeticFoot,
  enlargedProstate,
  gangrene,
  kneeOa,
  liverTumours,
  pad,
  poorCirculation,
  stroke,
  thyroidNodules,
  uterineFibroids,
  varicoseVeins,
] as unknown as Pillar[];

const mlPillarBySlug = new Map(mlPillarList.map((p) => [p.slug, p]));
const mlConditions = conditionsMlJson as unknown as Condition[];
const mlProcedures = proceduresMlJson as unknown as Procedure[];
const mlConditionBySlug = new Map(mlConditions.map((c) => [c.slug, c]));
const mlProcedureBySlug = new Map(mlProcedures.map((p) => [p.slug, p]));

/** Malayalam-aware content getters. English data stays the source of truth for slugs. */
export function getPillars(locale: Locale): Pillar[] {
  if (locale !== "ml") return pillars;
  return pillars.map((p) => mlPillarBySlug.get(p.slug) ?? p);
}

export function getPillar(slug: string, locale: Locale): Pillar | undefined {
  const en = pillars.find((p) => p.slug === slug);
  if (!en) return undefined;
  return locale === "ml" ? (mlPillarBySlug.get(slug) ?? en) : en;
}

export function getConditions(locale: Locale): Condition[] {
  if (locale !== "ml") return conditions;
  return conditions.map((c) => mlConditionBySlug.get(c.slug) ?? c);
}

export function getCondition(slug: string, locale: Locale): Condition | undefined {
  const en = conditions.find((c) => c.slug === slug);
  if (!en) return undefined;
  return locale === "ml" ? (mlConditionBySlug.get(slug) ?? en) : en;
}

export function getProcedures(locale: Locale): Procedure[] {
  if (locale !== "ml") return procedures;
  return procedures.map((p) => mlProcedureBySlug.get(p.slug) ?? p);
}

export function getProcedure(slug: string, locale: Locale): Procedure | undefined {
  const en = procedures.find((p) => p.slug === slug);
  if (!en) return undefined;
  return locale === "ml" ? (mlProcedureBySlug.get(slug) ?? en) : en;
}

/** Hook flavours for components. */
export function usePillars() {
  return getPillars(useLocale());
}
export function useConditions() {
  return getConditions(useLocale());
}
export function useProcedures() {
  return getProcedures(useLocale());
}
