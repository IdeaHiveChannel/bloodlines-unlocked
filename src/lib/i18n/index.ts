export type Locale = "en" | "ml";

export const locales: Locale[] = ["en", "ml"];

export const localeNames: Record<Locale, string> = {
  en: "English",
  ml: "മലയാളം",
};

export const localeShort: Record<Locale, string> = {
  en: "EN",
  ml: "ML",
};

/** Prefix an English path with the locale segment. */
export function localePath(path: string, locale: Locale) {
  if (locale === "en") return path;
  if (path === "/") return "/ml";
  return `/ml${path}`;
}

/** Strip the locale prefix from a pathname, returning the canonical English path. */
export function stripLocale(pathname: string) {
  if (pathname === "/ml") return "/";
  if (pathname.startsWith("/ml/")) return pathname.slice(3);
  return pathname;
}

export function isLocale(value: unknown): value is Locale {
  return value === "en" || value === "ml";
}

/** Pick one of two values by locale — used for content fields. */
export function pick<T>(locale: Locale, en: T, ml: T | undefined): T {
  return locale === "ml" && ml !== undefined ? ml : en;
}
