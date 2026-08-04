import { LocaleLink } from "../components/locale-link";
import { createFileRoute, notFound } from "@tanstack/react-router";
import { getPillar } from "../lib/i18n/data";
import { localePath } from "../lib/i18n";
import { PillarPage } from "../components/pillar/PillarPage";

const SITE = "https://bloodlines-unlocked.lovable.app";

export const Route = createFileRoute("/{-$locale}/diseases/$slug")({
  head: ({ params }) => {
    const locale = params.locale === "ml" ? "ml" : "en";
    const p = getPillar(params.slug, locale);
    if (!p) {
      return { meta: [{ title: "Condition not found" }, { name: "robots", content: "noindex" }] };
    }
    const title = `${p.title} — treatment | Dr. Mandeep Sagar`;
    const url = `${SITE}${localePath(`/diseases/${p.slug}`, locale)}`;
    return {
      meta: [
        { title: title.length > 60 ? `${p.title} — Dr. Mandeep Sagar`.slice(0, 60) : title },
        { name: "description", content: p.summary.slice(0, 158) },
        { property: "og:title", content: `${p.title} — Dr. Mandeep Sagar` },
        { property: "og:description", content: p.summary.slice(0, 158) },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            name: p.title,
            description: p.summary,
            url,
            about: {
              "@type": "MedicalCondition",
              name: p.title,
              signOrSymptom: p.symptoms.slice(0, 8).map((s) => ({ "@type": "MedicalSymptom", name: s })),
              possibleTreatment: p.treatments.slice(0, 8).map((t) => ({
                "@type": "MedicalTherapy",
                name: t.name,
              })),
            },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: p.faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        },
      ],
    };
  },
  loader: ({ params }) => {
    const p = getPillar(params.slug, params.locale === "ml" ? "ml" : "en");
    if (!p) throw notFound();
    return p;
  },
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="text-center">
        <p className="text-label">Not found</p>
        <h1 className="text-h2 mt-4">This guide doesn't exist yet.</h1>
        <LocaleLink to="/diseases" className="mt-8 inline-block underline" data-cursor="link">
          All conditions
        </LocaleLink>
      </div>
    </div>
  ),
  errorComponent: ({ reset }) => (
    <button onClick={reset} className="m-10 underline">
      Try again
    </button>
  ),
  component: DiseaseRoute,
});

function DiseaseRoute() {
  const pillar = Route.useLoaderData();
  if (!pillar) return null;
  return <PillarPage pillar={pillar} />;
}
