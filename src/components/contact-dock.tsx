import { Facebook, Instagram, Linkedin, MapPin, MessageCircle, Phone } from "lucide-react";
import { contact, socialLinks, whatsappLink, whatsappMessages } from "../lib/contact";

const socialIcon: Record<string, typeof Facebook> = {
  Facebook,
  Instagram,
  LinkedIn: Linkedin,
  "Google Business Profile": MapPin,
};

/** Fixed bottom-right dock: tiny social row above two large contact actions. */
export function ContactDock() {
  return (
    <div className="fixed bottom-0 right-0 z-[60] flex flex-col items-end gap-2 p-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:p-6">
      <ul className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#050B16]/80 px-2.5 py-1.5 backdrop-blur-md">
        {socialLinks.map((s) => {
          const Icon = socialIcon[s.label] ?? MapPin;
          return (
            <li key={s.label}>
              <a
                href={s.url}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                title={s.label}
                data-cursor="link"
                className="grid size-6 place-items-center text-[var(--ink-dim)] transition-colors hover:text-white"
              >
                <Icon size={14} />
              </a>
            </li>
          );
        })}
      </ul>

      <a
        href={whatsappLink(whatsappMessages.general)}
        target="_blank"
        rel="noreferrer"
        data-cursor="cta"
        aria-label="Chat on WhatsApp"
        className="inline-flex min-h-14 items-center gap-2.5 rounded-full bg-[#1FAF54] px-4 text-button text-black shadow-[0_12px_30px_-12px_rgba(0,0,0,0.8)] transition-transform hover:scale-[1.03] sm:px-6"
      >
        <MessageCircle size={20} />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>

      <a
        href={contact.phoneHref}
        data-cursor="cta"
        aria-label={`Call ${contact.phoneDisplay}`}
        className="inline-flex min-h-14 items-center gap-2.5 rounded-full bg-[var(--accent)] px-4 text-button text-black shadow-[0_12px_30px_-12px_rgba(0,0,0,0.8)] transition-transform hover:scale-[1.03] sm:px-6"
      >
        <Phone size={20} />
        <span className="hidden sm:inline">Call</span>
      </a>
    </div>
  );
}
