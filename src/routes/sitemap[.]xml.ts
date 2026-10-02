import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { procedures } from "../lib/content";
import { pillars } from "../lib/pillars";

const BASE_URL = "https://vascularcaredr.com";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

/** Every indexable English path. Malayalam twins are derived from these. */
function englishEntries(): SitemapEntry[] {
  // Only pillar slugs have a rendered guide; catalogue-only conditions return 404.
  const conditionPaths: SitemapEntry[] = pillars.map((p) => ({
    path: `/conditions/${p.slug}`, changefreq: "monthly", priority: "0.8",
  }));

  return [
    { path: "/", changefreq: "weekly", priority: "1.0" },
    { path: "/about", changefreq: "monthly", priority: "0.8" },
    { path: "/expertise", changefreq: "monthly", priority: "0.8" },
    { path: "/conditions", changefreq: "weekly", priority: "0.9" },
    { path: "/procedures", changefreq: "weekly", priority: "0.9" },
    { path: "/second-opinion", changefreq: "monthly", priority: "0.8" },
    { path: "/patient-landing", changefreq: "monthly", priority: "0.7" },
    { path: "/patient-information/before-consultation", changefreq: "monthly", priority: "0.6" },
    { path: "/patient-information/preparing-for-treatment", changefreq: "monthly", priority: "0.6" },
    { path: "/patient-information/how-treatment-works", changefreq: "monthly", priority: "0.6" },
    { path: "/patient-information/after-treatment", changefreq: "monthly", priority: "0.6" },
    { path: "/media", changefreq: "monthly", priority: "0.5" },
    { path: "/testimonials", changefreq: "monthly", priority: "0.5" },
    { path: "/resources", changefreq: "monthly", priority: "0.6" },
    { path: "/contact", changefreq: "monthly", priority: "0.7" },
    ...conditionPaths,
    ...procedures.map((p) => ({
      path: `/procedures/${p.slug}`,
      changefreq: "monthly" as const,
      priority: "0.7",
    })),
    { path: "/privacy", changefreq: "yearly", priority: "0.2" },
    { path: "/terms", changefreq: "yearly", priority: "0.2" },
  ];
}

export const mlPath = (path: string) => (path === "/" ? "/ml" : `/ml${path}`);

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const en = englishEntries();

        const urlBlock = (loc: string, e: SitemapEntry) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${loc}</loc>`,
            `    <xhtml:link rel="alternate" hreflang="en" href="${BASE_URL}${e.path}"/>`,
            `    <xhtml:link rel="alternate" hreflang="ml" href="${BASE_URL}${mlPath(e.path)}"/>`,
            `    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE_URL}${e.path}"/>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n");

        const urls = [
          ...en.map((e) => urlBlock(e.path, e)),
          ...en.map((e) => urlBlock(mlPath(e.path), e)),
        ];

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
