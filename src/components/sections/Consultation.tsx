import { Link } from "@tanstack/react-router";
import { Calendar, MessageCircle, Phone, Users, Upload, ArrowUpRight } from "lucide-react";
import { contact, whatsappLink, whatsappMessages } from "../../lib/contact";

const tiles = [
  {
    href: "/contact",
    internal: true,
    icon: Calendar,
    label: "Book consultation",
    sub: "Reserve a slot with Dr. Sagar",
  },
  {
    href: whatsappLink(whatsappMessages.general),
    icon: MessageCircle,
    label: "WhatsApp",
    sub: "Direct message to the practice",
  },
  {
    href: contact.phoneHref,
    icon: Phone,
    label: "Clinic reception",
    sub: contact.verified ? contact.phoneDisplay : "Speak to the front desk",
  },
  {
    href: whatsappLink(whatsappMessages.coordinator),
    icon: Users,
    label: "Patient coordinator",
    sub: "For relatives arranging treatment",
  },
  {
    href: whatsappLink(whatsappMessages.uploadReports),
    icon: Upload,
    label: "Upload reports",
    sub: "Send scans and reports on WhatsApp",
  },
];

export function Consultation() {
  return (
    <section className="relative bg-[#050B16] section-y border-t border-white/[0.05]">
      <div className="shell">
        <p className="text-label">Chapter 08 · Consultation</p>
        <h2 className="text-display-xl mt-6 max-w-3xl">
          When you're ready, we're here.
        </h2>
        <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-[var(--ink-dim)]">
          Whether you're seeking a diagnosis, a second opinion or treatment options, the first step is
          understanding the condition. Share your reports, speak with the team or schedule a consultation.
        </p>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {tiles.map((t) => {
            const Icon = t.icon;
            const inner = (
              <div className="group relative h-full rounded-3xl border border-white/[0.06] bg-white/[0.02] p-8 hover:bg-white/[0.05] hover:border-white/15 transition-all duration-300">
                <Icon size={20} className="text-[var(--accent)]" />
                <p className="text-card-title mt-10">{t.label}</p>
                <p className="mt-2 text-[13px] text-[var(--ink-dim)]">{t.sub}</p>
                <ArrowUpRight
                  size={16}
                  className="absolute top-8 right-8 text-[var(--ink-dim)] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                />
              </div>
            );
            return t.internal ? (
              <Link key={t.label} to="/contact" data-cursor="cta">
                {inner}
              </Link>
            ) : (
              <a key={t.label} href={t.href} target="_blank" rel="noreferrer" data-cursor="cta">
                {inner}
              </a>
            );
          })}
        </div>
        <p className="mt-8 text-[12px] text-[var(--ink-dim)]">
          Reports can be shared directly on WhatsApp — PDFs, CD images, angiography stills or photographs of a wound.
        </p>
      </div>
    </section>
  );
}
