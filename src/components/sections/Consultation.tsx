import { useTx } from "@/lib/i18n/tx";
import { LocaleLink } from "../../components/locale-link";
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
    label: "Call Dr. Sagar",
    sub: contact.phoneDisplay,
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
  const tx = useTx();
  return (
    <section className="relative bg-[#050B16] section-y border-t border-white/[0.05]">
      <div className="shell">
        <p className="text-label">{tx("Chapter 08 · Consultation")}</p>
        <h2 className="text-display-xl mt-6 max-w-3xl">
          {tx("When you're ready, we're here.")}
        </h2>
        <p className="mt-6 max-w-2xl text-small leading-relaxed text-[var(--ink-dim)]">
          {tx("Whether you're seeking a diagnosis, a second opinion or treatment options, the first step is understanding the condition. Share your reports, speak with the team or schedule a consultation.")}
        </p>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {tiles.map((t) => {
            const Icon = t.icon;
            const inner = (
              <div className="group relative h-full rounded-3xl border border-white/[0.06] bg-white/[0.02] p-8 hover:bg-white/[0.05] hover:border-white/15 transition-all duration-300">
                <Icon size={20} className="text-[var(--accent)]" />
                <p className="text-card-title mt-10">{tx(t.label)}</p>
                <p className="mt-2 text-caption text-[var(--ink-dim)]">{tx(t.sub)}</p>
                <ArrowUpRight
                  size={16}
                  className="absolute top-8 right-8 text-[var(--ink-dim)] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                />
              </div>
            );
            return t.internal ? (
              <LocaleLink key={tx(t.label)} to="/contact" data-cursor="cta">
                {inner}
              </LocaleLink>
            ) : (
              <a key={tx(t.label)} href={t.href} target="_blank" rel="noreferrer" data-cursor="cta">
                {inner}
              </a>
            );
          })}
        </div>
        <p className="mt-8 text-caption text-[var(--ink-dim)]">
          {tx("Reports can be shared directly on WhatsApp — PDFs, CD images, angiography stills or photographs of a wound.")}
        </p>
      </div>
    </section>
  );
}
