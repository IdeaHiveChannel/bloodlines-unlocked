import { useLocale } from "./react";
import { stringsMl } from "./strings-ml";

/**
 * Looks up UI copy by its English source string. Falls back to English when a
 * Malayalam translation is missing, so nothing ever renders blank.
 */
export function useTx() {
  const locale = useLocale();
  return (text: string) => (locale === "ml" ? (stringsMl[text] ?? text) : text);
}
