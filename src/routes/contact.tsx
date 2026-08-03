import { createFileRoute } from "@tanstack/react-router";
import { Consultation } from "../components/sections/Consultation";
import { Footer } from "../components/sections/Footer";
import { contact, locations } from "../lib/contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Book Consultation — Dr. Mandeep Sagar" },
      { name: "description", content: "Reach the practice by appointment, WhatsApp, phone, or email. Clinics in Kannur, Mangalore and Kasaragod." },
      { property: "og:title", content: "Book a Consultation" },
      { property: "og:description", content: "When you're ready, the door is one tap away." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <>
      <div className="pt-24"><Consultation /></div>
      <div className="bg-[#050B16] section-y border-t border-white/[0.05]">
        <div className="shell">
          <p className="text-label">Where to find the practice</p>
          <h2 className="mt-6 text-display text-[clamp(2rem,4.5vw,4rem)] max-w-2xl">
            Three cities. One phone line.
          </h2>
          <div className="mt-14 grid sm:grid-cols-3 gap-px bg-white/[0.06] border border-white/[0.06] rounded-2xl overflow-hidden">
            {locations.map((l) => (
              <a key={l.city} href={l.mapsUrl} target="_blank" rel="noreferrer" data-cursor="link"
                className="bg-[#050B16] p-8 hover:bg-white/[0.03] transition-colors">
                <p className="text-label">Clinic</p>
                <p className="mt-4 text-display text-3xl">{l.city}</p>
                <p className="mt-2 text-[13px] text-[var(--ink-dim)]">{l.state}</p>
                <p className="mt-6 text-label">Open in maps →</p>
              </a>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4 text-[14px]">
            <a href={contact.phoneHref} data-cursor="cta" className="text-[var(--ink)]">
              {contact.phoneDisplay}
            </a>
            <a href={contact.emailHref} data-cursor="cta" className="text-[var(--ink)]">
              {contact.email}
            </a>
          </div>
          <p className="mt-6 text-[13px] text-[var(--ink-dim)]">
            Consulting days and clinic addresses for each city are confirmed at the time of booking.
          </p>
        </div>
      </div>
      <Footer />
    </>
  ),
});
