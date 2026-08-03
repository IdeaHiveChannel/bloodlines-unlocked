import { createFileRoute } from "@tanstack/react-router";
import { Doctor } from "../components/sections/Doctor";
import { Footer } from "../components/sections/Footer";
import { contact } from "../lib/contact";

const SITE = "https://bloodlines-unlocked.lovable.app";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Dr. Mandeep Sagar — Interventional radiologist" },
      {
        name: "description",
        content:
          "The philosophy, training and practice of Dr. Mandeep Sagar — a vascular and neuro interventional radiologist treating disease through image-guided, pinhole procedures.",
      },
      { property: "og:title", content: "About Dr. Mandeep Sagar" },
      {
        property: "og:description",
        content:
          "Training, philosophy and approach of a vascular and neuro interventional radiologist working through a pinhole opening.",
      },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: `${SITE}/about` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE}/about` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Physician",
          name: "Dr. Mandeep Sagar",
          medicalSpecialty: "Radiology",
          url: `${SITE}/about`,
          telephone: "+91 63663 30505",
          email: contact.email,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Kannur",
            addressRegion: "Kerala",
            addressCountry: "IN",
          },
        }),
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <main className="bg-[#050B16] pt-28 sm:pt-32">
        <div className="shell">
          <p className="text-label">The physician</p>
          <h1 className="text-display-xl mt-5 max-w-3xl">
            About Dr. Mandeep Sagar.
          </h1>
          <p className="mt-6 max-w-2xl text-body leading-relaxed text-[var(--ink-dim)]">
            A vascular and neuro interventional radiologist whose work is defined by one idea:
            reach the disease through the smallest possible opening, and leave the body otherwise
            untouched.
          </p>
        </div>
        <Doctor />
      </main>
      <Footer />
    </>
  );
}
