import { contact, locations, socialLinks, whatsappLink, whatsappMessages } from "../../lib/contact";

export function Footer() {
  return (
    <footer className="relative bg-[#050B16] pt-24 pb-10 border-t border-white/[0.05]">
      <div className="shell">
        <h2 className="text-display-xxl">
          Advanced,
          <br />
          image-guided
          <br />
          <span className="text-[color-mix(in_oklab,var(--accent)_70%,white)]">vascular care.</span>
        </h2>
        <div className="mt-20 grid md:grid-cols-4 gap-8 text-small text-[var(--ink-dim)]">
          <div>
            <p className="text-label">Practice</p>
            <p className="mt-3 text-[var(--ink)]">Dr. Mandeep Sagar</p>
            <p className="mt-1">Vascular &amp; neuro interventional radiology</p>
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
            <p className="text-label">Explore</p>
            <ul className="mt-3 space-y-2">
              <li><a href="/conditions" data-cursor="link">Conditions</a></li>
              <li><a href="/procedures" data-cursor="link">Procedures</a></li>
              <li><a href="/about" data-cursor="link">About</a></li>
              <li><a href="/expertise" data-cursor="link">Expertise</a></li>
              <li><a href="/media" data-cursor="link">Media &amp; publications</a></li>
              <li><a href="/testimonials" data-cursor="link">Patient stories</a></li>
              <li><a href="/resources" data-cursor="link">Resources</a></li>
            </ul>
          </div>
          <div>
            <p className="text-label">Contact</p>
            <ul className="mt-3 space-y-2">
              <li><a href="/contact" data-cursor="link">Book consultation</a></li>
              <li><a href="/second-opinion" data-cursor="link">Second opinion</a></li>
              <li><a href={contact.phoneHref} data-cursor="link">{contact.phoneDisplay}</a></li>
              <li>
                <a href={whatsappLink(whatsappMessages.general)} target="_blank" rel="noreferrer" data-cursor="link">
                  WhatsApp
                </a>
              </li>
              <li><a href={contact.emailHref} data-cursor="link">{contact.email}</a></li>
            </ul>
          </div>
          <div>
            <p className="text-label">Follow</p>
            <ul className="mt-3 space-y-2">
              {socialLinks.map((s) => (
                <li key={s.label}>
                  <a href={s.url} target="_blank" rel="noreferrer" data-cursor="link">{s.label}</a>
                </li>
              ))}
            </ul>
            <p className="text-label mt-6">Notice</p>
            <p className="mt-3">The information presented is educational. It does not constitute medical advice. Consult a qualified physician for diagnosis and treatment.</p>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-white/[0.05] flex flex-wrap justify-between gap-4 text-caption text-[var(--ink-dim)]">
          <p>© {new Date().getFullYear()} Dr. Mandeep Sagar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
