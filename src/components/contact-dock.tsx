import { MapPin, MessageCircle, Phone } from "lucide-react";
import type { ComponentType } from "react";
import { contact, socialLinks, whatsappLink, whatsappMessages } from "../lib/contact";

type IconProps = { size?: number };

// Brand marks are not part of lucide, so they are drawn inline.
const Facebook = ({ size = 14 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5h1.65V3.6A22 22 0 0 0 14.3 3.5c-2.4 0-4 1.45-4 4.1v2.3H7.6V13h2.7v8z" />
  </svg>
);
const Instagram = ({ size = 14 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
  </svg>
);
const Linkedin = ({ size = 14 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0 0-5zM3 9.5h4V21H3zM9.5 9.5h3.8v1.6h.05c.53-.95 1.83-1.95 3.76-1.95 4.02 0 4.76 2.5 4.76 5.77V21h-4v-5.2c0-1.24-.02-2.84-1.9-2.84-1.9 0-2.19 1.35-2.19 2.75V21h-4z" />
  </svg>
);

const socialIcon: Record<string, ComponentType<IconProps>> = {
  Facebook,
  Instagram,
  LinkedIn: Linkedin,
  "Google Business Profile": MapPin,
};

/** Fixed bottom-right dock: tiny vertical social stack above two large contact actions. */
export function ContactDock() {
  return (
    <div className="fixed bottom-0 right-0 z-[60] flex flex-col items-end gap-2 p-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:p-6">
      <ul className="flex flex-col items-center gap-2 rounded-2xl border border-white/[0.08] bg-[#050B16]/80 px-1.5 py-2 backdrop-blur-md">
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
