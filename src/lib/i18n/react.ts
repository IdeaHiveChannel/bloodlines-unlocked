import { useParams, useRouterState } from "@tanstack/react-router";
import { en } from "./en";
import { ml } from "./ml";
import { isLocale, localePath, stripLocale, type Locale } from "./index";

const dictionaries = { en, ml };

/** Current locale, derived from the optional `{-$locale}` route segment. */
export function useLocale(): Locale {
  const params = useParams({ strict: false }) as { locale?: string };
  return isLocale(params.locale) ? params.locale : "en";
}

/** Translation dictionary for the current locale. */
export function useT() {
  return dictionaries[useLocale()];
}

export function dict(locale: Locale) {
  return dictionaries[locale];
}

/** Build a locale-aware href from an English path. */
export function useLocalePath() {
  const locale = useLocale();
  return (path: string) => localePath(path, locale);
}

/** The canonical English path of the current page, without any locale prefix. */
export function useBasePath() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return stripLocale(pathname);
}
