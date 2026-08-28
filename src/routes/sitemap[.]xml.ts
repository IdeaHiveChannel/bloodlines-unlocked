import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { conditions, procedures } from "../lib/content";
import { pillars } from "../lib/pillars";

const BASE_URL = "https://vascularcaredr.com";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/about", changefreq: "monthly", priority: "0.8" },
          { path: "/expertise", changefreq: "monthly", priority: "0.8" },
          { path: "/conditions", changefreq: "weekly", priority: "0.9" },
          { path: "/conditions", changefreq: "weekly", priority: "0.9" },
          { path: "/procedures", changefreq: "weekly", priority: "0.9" },
          { path: "/second-opinion", changefreq: "monthly", priority: "0.8" },
          { path: "/media", changefreq: "monthly", priority: "0.5" },
          { path: "/testimonials", changefreq: "monthly", priority: "0.5" },
          { path: "/resources", changefreq: "monthly", priority: "0.6" },
          { path: "/contact", changefreq: "monthly", priority: "0.7" },
          ...pillars.map((p) => ({
            path: `/conditions/${p.slug}`,
            changefreq: "monthly" as const,
            priority: "0.8",
          })),
          ...conditions.map((c) => ({
            path: `/conditions/${c.slug}`,
            changefreq: "monthly" as const,
            priority: "0.7",
          })),
          ...procedures.map((p) => ({
            path: `/procedures/${p.slug}`,
            changefreq: "monthly" as const,
            priority: "0.7",
          })),
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
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
