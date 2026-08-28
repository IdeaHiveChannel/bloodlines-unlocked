import { localeHead, SITE } from "@/lib/i18n/meta";
import { createFileRoute } from "@tanstack/react-router";
import { socialUrls } from "../lib/contact";
import { Hero } from "../components/hero/Hero";
import { ConditionsEntry } from "../components/sections/ConditionsEntry";
import { Transition } from "../components/sections/Transition";
import { Anatomy } from "../components/anatomy/Anatomy";
import { Procedures } from "../components/procedures/Procedures";
import { BeforeAfter } from "../components/sections/BeforeAfter";
import { Recovery } from "../components/sections/Recovery";
import { PatientStories } from "../components/sections/PatientStories";
import { MediaBand } from "../components/sections/MediaBand";
import { Journey } from "../components/sections/Journey";
import { Doctor } from "../components/sections/Doctor";
import { FAQ } from "../components/sections/FAQ";
import { WhatITreat } from "../components/sections/WhatITreat";
import { Consultation } from "../components/sections/Consultation";
import { Footer } from "../components/sections/Footer";

export const Route = createFileRoute("/{-$locale}/")({
  head: ({ params }) => localeHead(params, "/", {
    title: "Dr. Mandeep Sagar — Vascular & Neuro Interventional Radiologist in Mangalore & Kasaragod",
    description:
      "Advanced image-guided treatment through minimally invasive procedures. Treating selected conditions affecting the blood vessels throughout the body, with Pin hole Surgery.",
    ogTitle: "Dr. Mandeep Sagar — Vascular & Neuro Interventional Radiologist in Mangalore & Kasaragod",
    ogDescription:
      "Advanced image-guided treatment through minimally invasive procedures. Treating selected conditions affecting the blood vessels throughout the body, with Pin hole Surgery.",
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          name: "Dr. Mandeep Sagar — Vascular & Neuro Interventional Radiologist in Mangalore & Kasaragod",
          url: `${SITE}/`,
          inLanguage: "en",
          about: { "@id": `${SITE}/#physician` },
          mainEntity: { "@id": `${SITE}/#physician` },
          publisher: { "@id": `${SITE}/#practice` },
          sameAs: socialUrls,
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: en.faq.categories.flatMap((cat: { questions: { q: string; a: string }[] }) =>
            cat.questions.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          ),
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <Hero />
      <ConditionsEntry />
      <Transition />
      <Anatomy />
      <Procedures />
      <BeforeAfter />
      <Recovery />
      <Doctor />
      <Journey />
      <PatientStories />
      <MediaBand />
      <FAQ />
      <WhatITreat />
      <Consultation />
      <Footer />
    </main>
  );
}

