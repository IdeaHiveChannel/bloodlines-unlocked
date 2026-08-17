import { useLocale } from "../lib/i18n/react";
import { stringsMl } from "../lib/i18n/strings-ml";

/**
 * Looks up UI copy by its English source string. Falls back to English when a
 * Malayalam translation is missing, so nothing ever renders blank.
 */
export function useTx() {
  const locale = useLocale();
  return (text: string | undefined) => {
    if (!text) return "";
    return locale === "ml" ? (stringsMl[text] ?? text) : text;
  };
}
