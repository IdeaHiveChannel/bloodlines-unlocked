import { LocaleLink } from "../locale-link";
import { contact, locations, socialLinks, whatsappLink, whatsappMessages } from "../../lib/contact";
import { useT } from "../../lib/i18n/react";
import { useTx } from "../../lib/i18n/tx";

export function Footer() {
  const t = useT();
  const tx = useTx();
  return (
    <footer className="relative bg-[#050B16] pt-24 pb-10 border-t border-white/[0.05]">
      <div className="shell">
        <h2 className="text-display-xxl">
          {tx(t.footer.headline1)}
          <br />
          {tx(t.footer.headline2)}
          <br />
          <span className="text-[color-mix(in_oklab,var(--accent)_70%,white)]">{tx(t.footer.headline3)}</span>
        </h2>
        <div className="mt-20 grid md:grid-cols-4 gap-8 text-small text-[var(--ink-dim)]">
          <div>
            <p className="text-label">{tx(t.footer.practice)}</p>
            <p className="mt-3 text-[var(--ink)]">{tx(t.brand.name)}</p>
            <p className="mt-1">{tx(t.brand.role)}</p>
            <ul className="mt-4 space-y-1">
              {locations.map((l) => (
                <li key={l.city}>
                  <a href={l.mapsUrl} target="_blank" rel="noreferrer" data-cursor="link">
                    {l.city} · {l.state}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-label">{tx(t.footer.explore)}</p>
            <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
              <li><LocaleLink to="/patient-landing" data-cursor="link" className="text-[var(--accent)] font-medium">{tx(t.footer.patientLanding)}</LocaleLink></li>
              <li><LocaleLink to="/conditions" data-cursor="link">{tx(t.nav.conditions)}</LocaleLink></li>
              <li><LocaleLink to="/procedures" data-cursor="link">{tx(t.footer.treatments)}</LocaleLink></li>
              <li><LocaleLink to="/about" data-cursor="link">{tx(t.nav.about)}</LocaleLink></li>
              <li><LocaleLink to="/expertise" data-cursor="link">{tx(t.nav.expertise)}</LocaleLink></li>
              <li><LocaleLink to="/patient-information/how-treatment-works" data-cursor="link">{tx(t.footer.patientInfo)}</LocaleLink></li>
              <li><LocaleLink to="/testimonials" data-cursor="link">{tx(t.nav.stories)}</LocaleLink></li>
              <li><LocaleLink to="/media" data-cursor="link">{tx(t.nav.media)}</LocaleLink></li>
              <li><LocaleLink to="/resources" data-cursor="link">{tx(t.nav.resources)}</LocaleLink></li>
            </ul>
          </div>
          <div>
            <p className="text-label">{tx(t.footer.contact)}</p>
            <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
              <li><LocaleLink to="/contact" data-cursor="link">{tx(t.nav.book)}</LocaleLink></li>
              <li><LocaleLink to="/second-opinion" data-cursor="link">{tx(t.nav.secondOpinion)}</LocaleLink></li>
              <li><a href={contact.phoneHref} data-cursor="link">{contact.phoneDisplay}</a></li>
              <li>
                <a href={whatsappLink(whatsappMessages.general)} target="_blank" rel="noreferrer" data-cursor="link">
                  {tx(t.common.whatsapp)}
                </a>
              </li>
              <li><a href={contact.emailHref} data-cursor="link">{contact.email}</a></li>
            </ul>
          </div>
          <div>
            <p className="text-label">{tx(t.footer.follow)}</p>
            <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
              {socialLinks.map((s) => (
                <li key={s.label}>
                  <a href={s.url} target="_blank" rel="noreferrer" data-cursor="link">{tx(s.label)}</a>
                </li>
              ))}
            </ul>
            <p className="text-label mt-6">{tx(t.footer.notice)}</p>
            <p className="mt-3">{tx(t.footer.disclaimer)}</p>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-white/[0.05] flex flex-wrap justify-between gap-4 text-caption text-[var(--ink-dim)]">
          <p>© {new Date().getFullYear()} {tx(t.brand.name)}. {tx(t.footer.rights)}</p>
          <div className="flex gap-6">
            <LocaleLink to="/privacy" className="hover:text-white transition-colors">{tx(t.footer.privacy)}</LocaleLink>
            <LocaleLink to="/terms" className="hover:text-white transition-colors">{tx(t.footer.terms)}</LocaleLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
