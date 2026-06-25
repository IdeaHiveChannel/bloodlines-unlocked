import { Link } from "@tanstack/react-router";
import { Calendar, MessageCircle, Phone, MapPin, ArrowUpRight } from "lucide-react";

const tiles = [
  { href: "/contact", icon: Calendar, label: "Book Appointment", sub: "Reserve a consultation slot" },
  { href: "https://wa.me/", icon: MessageCircle, label: "WhatsApp", sub: "Direct message", ext: true },
  { href: "tel:+", icon: Phone, label: "Call the clinic", sub: "Speak to the team" },
  { href: "#", icon: MapPin, label: "Directions", sub: "Find the clinic" },
];

export function Consultation() {
  return (
    <section className="relative bg-[#050B16] py-32 border-t border-white/[0.05]">
      <div className="mx-auto max-w-[1480px] px-6 sm:px-10">
        <p className="text-mono-label">Chapter 08 · Consultation</p>
        <h2 className="mt-6 text-display text-[clamp(2.4rem,6vw,6rem)] max-w-3xl">
          When you're ready, the door is one tap away.
        </h2>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {tiles.map((t) => {
            const Icon = t.icon;
            const inner = (
              <div className="group relative h-full rounded-3xl border border-white/[0.06] bg-white/[0.02] p-8 hover:bg-white/[0.05] hover:border-white/15 transition-all duration-300">
                <Icon size={20} className="text-[var(--accent)]" />
                <p className="mt-10 text-display text-2xl">{t.label}</p>
                <p className="mt-2 text-[13px] text-[var(--ink-dim)]">{t.sub}</p>
                <ArrowUpRight size={16} className="absolute top-8 right-8 text-[var(--ink-dim)] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
            );
            return t.ext || t.href.startsWith("tel") || t.href.startsWith("http") || t.href === "#"
              ? <a key={t.label} href={t.href} data-cursor="cta">{inner}</a>
              : <Link key={t.label} to={t.href} data-cursor="cta">{inner}</Link>;
          })}
        </div>
      </div>
    </section>
  );
}
