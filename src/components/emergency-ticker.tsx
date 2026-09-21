import { AlertTriangle, Phone, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLocale } from "../lib/i18n/react";

const COPY = {
  en: {
    lead: "Could this be an emergency? Act now.",
    compact: "Sudden weakness or difficulty speaking, severe breathlessness or chest pain, a cold painful limb, uncontrolled bleeding, or loss of consciousness: call 112 or go immediately to the nearest emergency department.",
    full: "If you have sudden weakness or difficulty speaking, severe breathlessness or chest pain, a cold painful arm or leg, uncontrolled bleeding, loss of consciousness, or any other rapidly worsening symptom, call 112 or go immediately to the nearest emergency department.",
    warning: "Do not wait for a reply through WhatsApp, email, an appointment, or a second-opinion request. This website cannot provide emergency treatment.",
    open: "Open complete emergency guidance",
    close: "Close emergency guidance",
    call: "Call 112",
    department: "Go to the nearest emergency department",
  },
  ml: {
    lead: "അടിയന്തര സാഹചര്യമാകാമോ? ഉടൻ പ്രവർത്തിക്കുക.",
    compact: "പെട്ടെന്നുള്ള കൈകാലുകളുടെ ബലക്കുറവ് അല്ലെങ്കിൽ സംസാരപ്രയാസം, കടുത്ത ശ്വാസംമുട്ടൽ അല്ലെങ്കിൽ നെഞ്ചുവേദന, തണുത്ത് വേദനിക്കുന്ന കൈയോ കാലോ, നിയന്ത്രിക്കാനാകാത്ത രക്തസ്രാവം, ബോധക്ഷയം എന്നിവ ഉണ്ടെങ്കിൽ 112-ൽ വിളിക്കുകയോ ഉടൻ അടുത്ത എമർജൻസി വിഭാഗത്തിലേക്ക് പോകുകയോ ചെയ്യുക.",
    full: "പെട്ടെന്നുള്ള കൈകാലുകളുടെ ബലക്കുറവ് അല്ലെങ്കിൽ സംസാരപ്രയാസം, കടുത്ത ശ്വാസംമുട്ടൽ അല്ലെങ്കിൽ നെഞ്ചുവേദന, തണുത്ത് വേദനിക്കുന്ന കൈയോ കാലോ, നിയന്ത്രിക്കാനാകാത്ത രക്തസ്രാവം, ബോധക്ഷയം, അല്ലെങ്കിൽ വേഗത്തിൽ വഷളാകുന്ന മറ്റേതെങ്കിലും ലക്ഷണം ഉണ്ടെങ്കിൽ 112-ൽ വിളിക്കുകയോ ഉടൻ അടുത്ത എമർജൻസി വിഭാഗത്തിലേക്ക് പോകുകയോ ചെയ്യുക.",
    warning: "വാട്സ്ആപ്പ്, ഇമെയിൽ, അപ്പോയിന്റ്മെന്റ്, രണ്ടാം അഭിപ്രായം എന്നിവയുടെ മറുപടിക്കായി കാത്തിരിക്കരുത്. ഈ വെബ്സൈറ്റിലൂടെ അടിയന്തര ചികിത്സ നൽകാനാവില്ല.",
    open: "പൂർണ്ണ അടിയന്തര നിർദേശം തുറക്കുക",
    close: "അടിയന്തര നിർദേശം അടയ്ക്കുക",
    call: "112-ൽ വിളിക്കുക",
    department: "അടുത്ത എമർജൻസി വിഭാഗത്തിലേക്ക് പോകുക",
  },
} as const;

const focusables = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function EmergencyTicker() {
  const locale = useLocale();
  const copy = COPY[locale];
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialogRef.current?.querySelector<HTMLElement>(focusables)?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
      if (event.key !== "Tab" || !dialogRef.current) return;
      const items = Array.from(dialogRef.current.querySelectorAll<HTMLElement>(focusables));
      const first = items[0];
      const last = items.at(-1);
      if (!first || !last) return;
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      triggerRef.current?.focus();
    };
  }, [open]);

  return (
    <>
      <aside className="emergency-ticker fixed inset-x-0 top-0 z-[100] border-b border-red-300/15 bg-[#100b13] text-red-50">
        <button ref={triggerRef} type="button" onClick={() => setOpen(true)} aria-label={copy.open} className="emergency-ticker-button flex h-[var(--ticker-h)] w-full items-center text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[var(--accent)]">
          <span className="emergency-ticker-lead flex h-full shrink-0 items-center gap-2 border-r border-red-300/15 bg-[#100b13] px-3 sm:px-5">
            <AlertTriangle className="size-3.5 shrink-0 text-red-300" aria-hidden />
            <strong className="text-[0.6875rem] font-semibold text-red-100">{copy.lead}</strong>
          </span>
          <span className="emergency-ticker-viewport min-w-0 flex-1 overflow-hidden" aria-hidden="true">
            <span className="emergency-ticker-track flex min-w-max items-center">
              {[0, 1].map((item) => <span key={item} className="shrink-0 px-6 text-[0.75rem] text-red-50/80 sm:px-10">{copy.compact}<span className="px-8 text-red-50/35">·</span></span>)}
            </span>
          </span>
          <span className="sr-only">{copy.lead} {copy.compact}</span>
        </button>
      </aside>

      {open && (
        <div className="fixed inset-0 z-[210] grid place-items-center bg-black/80 p-4 backdrop-blur-sm" onMouseDown={(event) => { if (event.target === event.currentTarget) setOpen(false); }}>
          <div ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="emergency-title" className="w-full max-w-2xl rounded-2xl border border-red-200/15 bg-[#100b13] p-6 shadow-2xl sm:p-9">
            <div className="flex items-start justify-between gap-5">
              <div className="flex items-start gap-3">
                <AlertTriangle className="mt-1 size-5 shrink-0 text-red-300" aria-hidden />
                <h2 id="emergency-title" className="text-h3 text-red-50">{copy.lead}</h2>
              </div>
              <button type="button" onClick={() => setOpen(false)} aria-label={copy.close} className="grid size-11 shrink-0 place-items-center rounded-full border border-white/10 text-red-50"><X className="size-5" /></button>
            </div>
            <p className="mt-6 text-body leading-relaxed text-red-50/85">{copy.full}</p>
            <p className="mt-4 text-body font-medium leading-relaxed text-red-100">{copy.warning}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href="tel:112" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-red-200 px-6 font-semibold text-[#100b13]"><Phone className="size-4" />{copy.call}</a>
              <span className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 px-6 text-center text-sm text-red-50/80">{copy.department}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
