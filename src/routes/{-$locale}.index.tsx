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
    title: "Dr. Mandeep Sagar — Interventional radiologist",
    description:
      "Modern medicine, through a pinpoint opening. Image-guided treatment through a pinhole opening for complex vascular, neurovascular and oncological conditions.",
    ogTitle: "Dr. Mandeep Sagar — Vascular & neuro interventional radiologist",
    ogDescription:
      "Image-guided treatment through a pinhole opening, avoiding major surgery wherever appropriate.",
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Physician",
          sameAs: socialUrls,
          name: "Dr. Mandeep Sagar",
          medicalSpecialty: "Radiology",
          description:
            "Vascular and neuro interventional radiologist treating disease through image-guided, minimally invasive procedures.",
          url: `${SITE}/`,
          telephone: "+91 63663 30505",
          email: "vascularcaredr@gmail.com",
          areaServed: ["Mangalore, Karnataka", "Kasaragod, Kerala"],
          address: [
            { "@type": "PostalAddress", addressLocality: "Mangalore", addressRegion: "Karnataka", addressCountry: "IN" },
            { "@type": "PostalAddress", addressLocality: "Kasaragod", addressRegion: "Kerala", addressCountry: "IN" },
          ],
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

