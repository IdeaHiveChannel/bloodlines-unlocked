// Media coverage, publications, awards and talks.
// Entries are added only once verified — the timeline stays empty rather than filled.

export type PressKind = "media" | "publication" | "award" | "talk";

export type PressEntry = {
  year: string;
  kind: PressKind;
  title: string;
  /** Outlet, journal, society or awarding body. */
  outlet: string;
  summary: string;
  /** External link to the article, paper or citation. */
  url?: string;
  /** Disease guide slug this entry relates to, when applicable. */
  guide?: string;
};

export const pressKinds: { key: PressKind; label: string }[] = [
  { key: "media", label: "Media" },
  { key: "publication", label: "Publications" },
  { key: "award", label: "Awards" },
  { key: "talk", label: "Talks" },
];

export const pressEntries: PressEntry[] = [];

export function groupByYear(entries: PressEntry[]) {
  const map = new Map<string, PressEntry[]>();
  for (const e of entries) {
    const list = map.get(e.year) ?? [];
    list.push(e);
    map.set(e.year, list);
  }
  return [...map.entries()].sort((a, b) => Number(b[0]) - Number(a[0]));
}
