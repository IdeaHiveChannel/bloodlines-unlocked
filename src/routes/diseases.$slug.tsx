import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getPillar } from "../lib/pillars";
import { PillarPage } from "../components/pillar/PillarPage";

const SITE = "https://bloodlines-unlocked.lovable.app";

export const Route = createFileRoute("/diseases/$slug")({
  head: ({ params }) => {
    const p = getPillar(params.slug);
    if (!p) {
      return { meta: [{ title: "Condition not found" }, { name: "robots", content: "noindex" }] };
    }
    const title = `${p.title} — symptoms, tests and treatment | Dr. Mandeep Sagar`;
    const url = `${SITE}/diseases/${p.slug}`;
    return {
      meta: [
        { title: title.slice(0, 68) },
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
    const p = getPillar(params.slug);
    if (!p) throw notFound();
    return p;
  },
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="text-center">
        <p className="text-label">Not found</p>
        <h1 className="text-h2 mt-4">This guide doesn't exist yet.</h1>
        <Link to="/diseases" className="mt-8 inline-block underline" data-cursor="link">
          All conditions
        </Link>
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
