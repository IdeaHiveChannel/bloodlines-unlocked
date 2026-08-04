import { createFileRoute } from "@tanstack/react-router";
import { Consultation } from "../components/sections/Consultation";
import { ConsultationForm } from "../components/sections/ConsultationForm";
import { Footer } from "../components/sections/Footer";
import { contact, locations, socialUrls } from "../lib/contact";

const SITE = "https://bloodlines-unlocked.lovable.app";

export const Route = createFileRoute("/{-$locale}/contact")({
  head: () => ({
    meta: [
      { title: "Book a consultation — Dr. Mandeep Sagar" },
      { name: "description", content: "Send your details to Dr. Mandeep Sagar by WhatsApp, email or phone. Consulting in Kannur, Mangalore and Kasaragod." },
      { property: "og:title", content: "Book a consultation with Dr. Mandeep Sagar" },
      { property: "og:description", content: "Consultation request form, direct number and consulting cities for the interventional radiology practice." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE}/contact` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE}/contact` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          sameAs: socialUrls,
          name: "Dr. Mandeep Sagar — Interventional radiology practice",
          url: `${SITE}/contact`,
          telephone: "+91 63663 30505",
          email: contact.email,
          address: locations.map((l) => ({
            "@type": "PostalAddress",
            addressLocality: l.city,
            addressRegion: l.state.replace(", India", ""),
            addressCountry: "IN",
          })),
        }),
      },
    ],
  }),
  component: () => (
    <>
      <div className="pt-28 sm:pt-32">
        <div className="shell">
          <p className="text-label">Consultation</p>
          <h1 className="text-display-xl mt-5 max-w-3xl">Book a consultation.</h1>
          <p className="mt-6 max-w-2xl text-small leading-relaxed text-[var(--ink-dim)]">
            Send your details straight to Dr. Sagar on WhatsApp or by email, or call the number below.
          </p>
          <div className="mt-12">
            <ConsultationForm />
          </div>
        </div>
        <Consultation />
      </div>
      <div className="bg-[#050B16] section-y border-t border-white/[0.05]">
        <div className="shell">
          <p className="text-label">Where Dr. Sagar consults</p>
          <h2 className="text-h1 mt-6 max-w-2xl">
            Three cities. One direct number.
          </h2>
          <div className="mt-14 grid sm:grid-cols-3 gap-px bg-white/[0.06] border border-white/[0.06] rounded-2xl overflow-hidden">
            {locations.map((l) => (
              <a key={l.city} href={l.mapsUrl} target="_blank" rel="noreferrer" data-cursor="link"
                className="bg-[#050B16] p-8 hover:bg-white/[0.03] transition-colors">
                <p className="text-label">Consulting in</p>
                <p className="text-h3 mt-4">{l.city}</p>
                <p className="mt-2 text-caption text-[var(--ink-dim)]">{l.state}</p>
                <p className="mt-6 text-label">Open in maps →</p>
              </a>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4 text-small">
            <a href={contact.phoneHref} data-cursor="cta" className="text-[var(--ink)]">
              {contact.phoneDisplay}
            </a>
            <a href={contact.emailHref} data-cursor="cta" className="text-[var(--ink)]">
              {contact.email}
            </a>
          </div>
          <p className="mt-6 text-caption text-[var(--ink-dim)]">
            Consulting days and the exact address for each city are confirmed at the time of booking.
          </p>
        </div>
      </div>
      <Footer />
    </>
  ),
});
