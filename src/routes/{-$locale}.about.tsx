import { localeHead, SITE } from "@/lib/i18n/meta";
import { useTx } from "@/lib/i18n/tx";
import { createFileRoute } from "@tanstack/react-router";
import { Doctor } from "../components/sections/Doctor";
import { Footer } from "../components/sections/Footer";
import { contact, socialUrls } from "../lib/contact";

export const Route = createFileRoute("/{-$locale}/about")({
  head: ({ params }) => localeHead(params, "/about", {
    title: "About Dr. Mandeep Sagar — Interventional radiologist",
    description:
      "The philosophy, training and practice of Dr. Mandeep Sagar — a vascular and neuro interventional radiologist treating disease through image-guided, pinhole procedures.",
    ogTitle: "About Dr. Mandeep Sagar",
    ogDescription:
      "Training, philosophy and approach of a vascular and neuro interventional radiologist working through a pinhole opening.",
    ogType: "profile",
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Physician",
          sameAs: socialUrls,
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
  const tx = useTx();
  return (
    <>
      <main className="bg-[#050B16] pt-28 sm:pt-32">
        <div className="shell">
          <p className="text-label">{tx("The physician")}</p>
          <h1 className="text-display-xl mt-5 max-w-3xl">
            {tx("About Dr. Mandeep Sagar.")}
          </h1>
          <p className="mt-6 max-w-2xl text-body leading-relaxed text-[var(--ink-dim)]">
            {tx("A vascular and neuro interventional radiologist whose work is defined by one idea: reach the disease through the smallest possible opening, and leave the body otherwise untouched.")}
          </p>
        </div>
        <Doctor />
      </main>
      <Footer />
    </>
  );
}
