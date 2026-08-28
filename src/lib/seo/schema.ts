import { SITE } from "../i18n/meta";

/**
 * MedicalWebPage + BreadcrumbList JSON-LD for a section index page.
 * URLs use the canonical English path; the Malayalam twin is linked through
 * the hreflang alternates emitted in the root shell.
 */
export function sectionSchema(opts: {
  path: string;
  name: string;
  description: string;
  /** Optional intermediate crumb, e.g. { name: "For patients", path: "/resources" }. */
  parent?: { name: string; path: string };
}) {
  const url = `${SITE}${opts.path}`;
  const crumbs = [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
    ...(opts.parent
      ? [{ "@type": "ListItem", position: 2, name: opts.parent.name, item: `${SITE}${opts.parent.path}` }]
      : []),
    { "@type": "ListItem", position: opts.parent ? 3 : 2, name: opts.name, item: url },
  ];

  return [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        name: opts.name,
        description: opts.description,
        url,
        inLanguage: "en",
        about: { "@id": `${SITE}/#physician` },
        publisher: { "@id": `${SITE}/#practice` },
        audience: { "@type": "Patient" },
      }),
    },
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: crumbs,
      }),
    },
  ];
}
