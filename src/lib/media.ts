// Media coverage, publications, awards and talks.
// Entries are added only once verified — the timeline stays empty rather than filled.

export type MediaKind = "media" | "publication" | "award" | "talk";

export type MediaEntry = {
  year: string;
  kind: MediaKind;
  title: string;
  /** Outlet, journal, society or awarding body. */
  outlet: string;
  summary: string;
  /** External link to the article, paper or citation. */
  url?: string;
  /** Disease guide slug this entry relates to, when applicable. */
  guide?: string;
};

export const mediaKinds: { key: MediaKind; label: string }[] = [
  { key: "media", label: "Media" },
  { key: "publication", label: "Publications" },
  { key: "award", label: "Awards" },
  { key: "talk", label: "Talks" },
];

export const mediaEntries: MediaEntry[] = [];

export function groupByYear(entries: MediaEntry[]) {
  const map = new Map<string, MediaEntry[]>();
  for (const e of entries) {
    const list = map.get(e.year) ?? [];
    list.push(e);
    map.set(e.year, list);
  }
  return [...map.entries()].sort((a, b) => Number(b[0]) - Number(a[0]));
}
