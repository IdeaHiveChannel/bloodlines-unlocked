import type { Locale } from "./index";
import {
  conditionNamesMl,
  pillarNamesMl,
  procedureNamesMl,
  regionLabelsMl,
} from "./content-ml";
import { useLocale } from "./react";

export function pillarName(slug: string, en: string, locale: Locale) {
  return locale === "ml" ? (pillarNamesMl[slug]?.name ?? en) : en;
}

export function pillarTitle(slug: string, en: string, locale: Locale) {
  return locale === "ml" ? (pillarNamesMl[slug]?.title ?? en) : en;
}

export function conditionName(slug: string, en: string, locale: Locale) {
  return locale === "ml" ? (conditionNamesMl[slug] ?? en) : en;
}

export function procedureName(slug: string, en: string, locale: Locale) {
  return locale === "ml" ? (procedureNamesMl[slug] ?? en) : en;
}

export function regionLabel(region: string, en: string, locale: Locale) {
  return locale === "ml" ? (regionLabelsMl[region] ?? en) : en;
}

/** Locale-bound naming helpers for components. */
export function useNames() {
  const locale = useLocale();
  return {
    locale,
    pillar: (slug: string, en: string) => pillarName(slug, en, locale),
    pillarTitle: (slug: string, en: string) => pillarTitle(slug, en, locale),
    condition: (slug: string, en: string) => conditionName(slug, en, locale),
    procedure: (slug: string, en: string) => procedureName(slug, en, locale),
    region: (region: string, en: string) => regionLabel(region, en, locale),
  };
}
