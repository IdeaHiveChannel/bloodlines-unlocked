import { LocaleLink } from "./locale-link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown, Menu, MessageCircle, Phone, X } from "lucide-react";
import { NavMenu } from "./nav-menu";
import { useT } from "../lib/i18n/react";
import { useTx } from "../lib/i18n/tx";
import { useSiteNav, type NavGroup } from "../lib/nav";
import { LanguageToggle } from "./language-toggle";
import { contact, whatsappLink, whatsappMessages } from "../lib/contact";

const focusables = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const lastScrollY = useRef(0);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const t = useT();
  const tx = useTx();
  const { groups, about, expertise, secondOpinion, book } = useSiteNav();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      if (open) setHidden(false);
      else {
        const delta = y - lastScrollY.current;
        if (delta > 10 && y > 80) setHidden(true);
        else if (delta < -10) setHidden(false);
      }
      lastScrollY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    document.body.classList.add("mobile-menu-open");
    document.body.style.overflow = "hidden";
    const frame = requestAnimationFrame(() => {
      dialogRef.current?.querySelector<HTMLElement>(focusables)?.focus();
    });
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); return; }
      if (event.key !== "Tab" || !dialogRef.current) return;
      const items = Array.from(dialogRef.current.querySelectorAll<HTMLElement>(focusables));
      const first = items[0];
      const last = items.at(-1);
      if (!first || !last) return;
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("keydown", onKeyDown);
      document.body.classList.remove("mobile-menu-open");
      document.body.style.overflow = "";
      (previous ?? toggleRef.current)?.focus();
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header className={`fixed left-0 right-0 top-[var(--ticker-h)] z-[90] px-2 pt-3 transition-transform duration-500 sm:px-8 sm:pt-6 ${hidden ? "-translate-y-full" : "translate-y-0"}`}>
        <nav className={`mx-auto flex max-w-[1480px] items-center justify-between gap-2 rounded-full border border-white/[0.06] px-3 py-2.5 transition-colors duration-500 sm:px-5 sm:py-3 html-ml:lg:max-w-none html-ml:lg:w-[98%] ${scrolled || open ? "bg-[#050B16]/85 backdrop-blur-md" : "bg-transparent"}`}>
          <LocaleLink to="/" activeProps={{ className: "" }} className="group flex min-w-0 shrink-0 items-center gap-2 sm:gap-3" data-cursor="link">
            <span className="inline-block size-2 shrink-0 rounded-full bg-[var(--accent)] shadow-[0_0_10px_var(--accent)]" />
            <span className="block min-w-0 whitespace-nowrap text-nav leading-none">{t.brand.name}</span>
          </LocaleLink>

          <ul className="hidden items-center gap-1 lg:flex xl:gap-3 html-ml:lg:gap-2">
            <li><DesktopLink to={about.to}>{about.label}</DesktopLink></li>
            {groups.map((group) => <NavMenu key={group.key} label={group.label} links={group.links} columns={group.columns as 1 | 2} />)}
            <li><DesktopLink to={expertise.to}>{expertise.label}</DesktopLink></li>
            <li><DesktopLink to={secondOpinion.to}>{secondOpinion.label}</DesktopLink></li>
          </ul>

          <div className="flex items-center gap-1.5 sm:gap-4">
            <div className="hidden sm:block"><LanguageToggle /></div>
            <LocaleLink to={book.to} className="hidden whitespace-nowrap rounded-full bg-[var(--accent)] px-3 py-1.5 text-[0.8125rem] font-semibold uppercase tracking-wider text-white transition-opacity hover:opacity-90 sm:block xl:px-4">{book.label}</LocaleLink>
            <button ref={toggleRef} type="button" onClick={() => setOpen((value) => !value)} aria-label={tx(open ? "Close navigation" : "Open navigation")} aria-expanded={open} aria-controls="mobile-navigation" className="flex size-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[var(--ink)] lg:hidden">
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div id="mobile-navigation" ref={dialogRef} role="dialog" aria-modal="true" aria-label={tx("Primary navigation")} initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.24 }} className="mobile-nav-panel fixed inset-0 z-[80] overflow-y-auto bg-[#050B16]/98 px-5 pb-[max(2rem,env(safe-area-inset-bottom))] pt-[calc(var(--ticker-h)+6.75rem)] backdrop-blur-xl lg:hidden">
            <motion.div initial={reduceMotion ? false : "hidden"} animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.065, delayChildren: 0.08 } } }} className="mx-auto max-w-xl">
              <MenuLabel>{tx("Primary navigation")}</MenuLabel>
              <div className="mt-3 divide-y divide-white/[0.07] border-y border-white/[0.08]">
                <PrimaryLink to={about.to} onClick={close}>{about.label}</PrimaryLink>
                {groups.map((group) => <MobileGroup key={group.key} group={group} expanded={expanded === group.key} onToggle={() => setExpanded(expanded === group.key ? null : group.key)} onNavigate={close} reduceMotion={!!reduceMotion} />)}
                <PrimaryLink to={expertise.to} onClick={close}>{expertise.label}</PrimaryLink>
                <PrimaryLink to={secondOpinion.to} onClick={close}>{secondOpinion.label}</PrimaryLink>
              </div>

              <motion.div variants={itemVariants} className="mt-7">
                <LocaleLink to={book.to} onClick={close} className="flex min-h-12 w-full items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3 text-center text-sm font-semibold text-white transition-opacity hover:opacity-90">{book.label}</LocaleLink>
              </motion.div>

              <motion.div variants={itemVariants} className="mt-6">
                <MenuLabel>{tx("Contact options")}</MenuLabel>
                <div className="mt-3 grid grid-cols-2 gap-3">
                  <a href={whatsappLink(whatsappMessages.general)} target="_blank" rel="noreferrer" className="flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-3 text-sm"><MessageCircle className="size-4 text-[var(--accent)]" />{tx("WhatsApp")}</a>
                  <a href={contact.phoneHref} className="flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-3 text-sm"><Phone className="size-4 text-[var(--accent)]" />{tx("Call")}</a>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="mt-7 border-t border-white/[0.08] pt-6">
                <MenuLabel>{tx("Language")}</MenuLabel>
                <div className="mt-3"><LanguageToggle /></div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

const itemVariants = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.38, ease: [0.16, 1, 0.3, 1] as const } } };

function MenuLabel({ children }: { children: React.ReactNode }) { return <p className="text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-[var(--ink-dim)]">{children}</p>; }

function DesktopLink({ to, children }: { to: string; children: React.ReactNode }) {
  return <LocaleLink to={to} className="whitespace-nowrap text-[0.8125rem] font-medium tracking-tight text-[var(--ink-dim)] transition-colors hover:text-white html-ml:lg:text-[0.68rem] html-ml:xl:text-[0.78rem]" data-cursor="link">{children}</LocaleLink>;
}

function PrimaryLink({ to, onClick, children }: { to: string; onClick: () => void; children: React.ReactNode }) {
  return <motion.div variants={itemVariants}><LocaleLink to={to} onClick={onClick} className="flex min-h-14 items-center py-3 text-[1.05rem] font-medium leading-snug transition-colors hover:text-[var(--accent)]">{children}</LocaleLink></motion.div>;
}

function MobileGroup({ group, expanded, onToggle, onNavigate, reduceMotion }: { group: NavGroup; expanded: boolean; onToggle: () => void; onNavigate: () => void; reduceMotion: boolean }) {
  return (
    <motion.div variants={itemVariants}>
      <button type="button" onClick={onToggle} aria-expanded={expanded} className="flex min-h-14 w-full items-center justify-between gap-4 py-3 text-left text-[1.05rem] font-medium leading-snug transition-colors hover:text-[var(--accent)]">
        <span>{group.label}</span><ChevronDown className={`size-4 shrink-0 transition-transform ${expanded ? "rotate-180 text-[var(--accent)]" : "text-[var(--ink-dim)]"}`} />
      </button>
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div initial={reduceMotion ? false : { height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: reduceMotion ? 0 : 0.3, ease: [0.16, 1, 0.3, 1] }} className="overflow-hidden">
            <div className="grid gap-1 pb-4 pl-3 sm:grid-cols-2">
              {group.links.map((link) => <LocaleLink key={`${link.to}-${link.label}`} to={link.to} onClick={onNavigate} className="flex min-h-11 items-center rounded-xl px-3 py-2 text-sm leading-snug text-[var(--ink-dim)] transition-colors hover:bg-white/[0.04] hover:text-white">{link.label}</LocaleLink>)}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}