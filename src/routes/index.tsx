import { createFileRoute } from "@tanstack/react-router";
import { socialUrls } from "../lib/contact";
import { Hero } from "../components/hero/Hero";
import { Transition } from "../components/sections/Transition";
import { Anatomy } from "../components/anatomy/Anatomy";
import { ConditionsGateway } from "../components/sections/ConditionsGateway";
import { Procedures } from "../components/procedures/Procedures";
import { BeforeAfter } from "../components/sections/BeforeAfter";
import { Recovery } from "../components/sections/Recovery";
import { PatientStories } from "../components/sections/PatientStories";
import { MediaBand } from "../components/sections/MediaBand";
import { Journey } from "../components/sections/Journey";
import { Doctor } from "../components/sections/Doctor";
import { Consultation } from "../components/sections/Consultation";
import { Footer } from "../components/sections/Footer";

const SITE = "https://bloodlines-unlocked.lovable.app";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr. Mandeep Sagar — Interventional radiologist" },
      {
        name: "description",
        content:
          "Image-guided treatment through a pinhole opening — stroke, aneurysms, fibroids, liver tumours, diabetic foot and varicose veins, without major surgery.",
      },
      {
        property: "og:title",
        content: "Dr. Mandeep Sagar — Vascular & neuro interventional radiologist",
      },
      {
        property: "og:description",
        content:
          "Image-guided treatment through a pinhole opening, avoiding major surgery wherever appropriate.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE}/` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE}/` }],
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
          areaServed: ["Kannur, Kerala", "Mangalore, Karnataka", "Kasaragod, Kerala"],
          address: [
            { "@type": "PostalAddress", addressLocality: "Kannur", addressRegion: "Kerala", addressCountry: "IN" },
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
      <Transition />
      <Anatomy />
      <ConditionsGateway />
      <Procedures />
      <BeforeAfter />
      <Recovery />
      <MediaBand />
      <PatientStories />
      <Journey />
      <Doctor />
      <Consultation />
      <Footer />
    </main>
  );
}

