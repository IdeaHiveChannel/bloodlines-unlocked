import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { localeHead } from "@/lib/i18n/meta";
import { useLocale } from "@/lib/i18n/react";
import { Footer } from "@/components/sections/Footer";
import {
  GOOGLE_REVIEW_URL, OTHER, PREFER_NOT, reviewConditions, buildIntro, composeReview, type VisitType,
} from "@/lib/reviews";

export const Route = createFileRoute("/{-$locale}/reviews")({
  head: ({ params }) => localeHead(params, "/reviews", {
    title: "Share Your Experience — Dr. Mandeep Sagar",
    description: "Patients and families can prepare and post their own Google review about a consultation or treatment with Dr. Mandeep Sagar.",
    ogTitle: "Share Your Experience — Dr. Mandeep Sagar",
    ogDescription: "Prepare your own review, copy it, and post it yourself on Google.",
  }),
  component: ReviewsPage,
});

const copy = {
  en: {
    h1: "Share Your Experience",
    intro: "Share your experience of consulting or receiving treatment from Dr. Mandeep Sagar. Your feedback may help others learn about the patient experience.",
    visit: "Visit type", visits: { consultation: "Consultation", treatment: "Treatment / Procedure", followup: "Follow-up" },
    condition: "Disease or condition", search: "Search conditions", other: "Describe the condition",
    rating: "Your rating", stars: (n: number) => `${n} star${n > 1 ? "s" : ""}`,
    question: "How was your experience with Dr. Mandeep Sagar?",
    include: "Include my condition in my public Google Review.",
    preview: "Your review (edit freely)", copyBtn: "Copy My Review", copied: "Copied",
    google: "Continue to Google Reviews",
    note: "On Google you sign in, choose your star rating and publish the review yourself. Nothing you type here is sent to Google, saved, or shared by this website — paste your copied text there.",
    emergency: "This page is not for medical questions or emergencies. In an emergency call 112.",
  },
  ml: {
    h1: "നിങ്ങളുടെ അനുഭവം പങ്കുവെക്കുക",
    intro: "ഡോ. മന്ദീപ് സാഗറിനെ കണ്ടതിന്റെയോ ചികിത്സ ലഭിച്ചതിന്റെയോ അനുഭവം പങ്കുവെക്കുക. നിങ്ങളുടെ അഭിപ്രായം മറ്റുള്ളവർക്ക് സഹായകമായേക്കാം.",
    visit: "സന്ദർശനത്തിന്റെ തരം", visits: { consultation: "കൺസൾട്ടേഷൻ", treatment: "ചികിത്സ / പ്രൊസീജർ", followup: "ഫോളോ-അപ്പ്" },
    condition: "രോഗം / അവസ്ഥ", search: "അവസ്ഥ തിരയുക", other: "അവസ്ഥ എഴുതുക",
    rating: "നിങ്ങളുടെ റേറ്റിംഗ്", stars: (n: number) => `${n} നക്ഷത്രം`,
    question: "ഡോ. മന്ദീപ് സാഗറുമായുള്ള നിങ്ങളുടെ അനുഭവം എങ്ങനെയായിരുന്നു?",
    include: "എന്റെ രോഗാവസ്ഥ പൊതു ഗൂഗിൾ റിവ്യൂവിൽ ഉൾപ്പെടുത്തുക.",
    preview: "നിങ്ങളുടെ റിവ്യൂ (ഇഷ്ടം പോലെ തിരുത്താം)", copyBtn: "റിവ്യൂ കോപ്പി ചെയ്യുക", copied: "കോപ്പി ചെയ്തു",
    google: "ഗൂഗിൾ റിവ്യൂവിലേക്ക് തുടരുക",
    note: "ഗൂഗിളിൽ സൈൻ ഇൻ ചെയ്ത്, റേറ്റിംഗ് തിരഞ്ഞെടുത്ത്, റിവ്യൂ നിങ്ങൾ തന്നെ പ്രസിദ്ധീകരിക്കണം. ഇവിടെ എഴുതുന്നത് ഗൂഗിളിലേക്ക് അയയ്ക്കുകയോ സൂക്ഷിക്കുകയോ പങ്കിടുകയോ ചെയ്യുന്നില്ല — കോപ്പി ചെയ്ത വാചകം അവിടെ പേസ്റ്റ് ചെയ്യുക.",
    emergency: "ഈ പേജ് ചികിത്സാ ചോദ്യങ്ങൾക്കോ അടിയന്തര സാഹചര്യങ്ങൾക്കോ അല്ല. അടിയന്തരമായാൽ 112 വിളിക്കുക.",
  },
};

const field = "w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-small text-[var(--ink)] placeholder:text-[var(--ink-dim)] focus:border-[var(--accent)] focus:outline-none";

function ReviewsPage() {
  const locale = useLocale();
  const c = locale === "ml" ? copy.ml : copy.en;
  const [visit, setVisit] = useState<VisitType>("consultation");
  const [query, setQuery] = useState("");
  const [condition, setCondition] = useState("");
  const [otherText, setOtherText] = useState("");
  const [rating, setRating] = useState(0);
  const [experience, setExperience] = useState("");
  const [include, setInclude] = useState(false);
  const [text, setText] = useState("");
  const [edited, setEdited] = useState(false);
  const [copied, setCopied] = useState(false);

  const options = useMemo(() => {
    const all = [...reviewConditions, OTHER, PREFER_NOT];
    const q = query.trim().toLowerCase();
    return q ? all.filter((o) => o.toLowerCase().includes(q)) : all;
  }, [query]);

  const conditionName = condition === OTHER ? otherText.trim().slice(0, 80) : condition;
  const generated = composeReview(buildIntro(visit, conditionName, include), experience);

  // Keep the preview in sync until the patient edits it by hand.
  useEffect(() => { if (!edited) setText(generated); }, [generated, edited]);

  const onCopy = async () => {
    try { await navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 2000); } catch { /* clipboard blocked */ }
  };

  const step = (n: number, label: string) => (
    <span className="flex items-center gap-3">
      <span aria-hidden className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-white/15 text-caption text-[var(--accent)]">{n}</span>
      <span className="text-label">{label}</span>
    </span>
  );

  const actions = (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      <button type="button" onClick={onCopy} disabled={!text.trim()} className="inline-flex min-h-12 flex-1 items-center justify-center rounded-full border border-white/15 px-6 text-button transition-colors hover:bg-white/5 disabled:opacity-40">
        {copied ? `✓ ${c.copied}` : c.copyBtn}
      </button>
      <a href={GOOGLE_REVIEW_URL} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 flex-1 items-center justify-center rounded-full bg-white px-6 text-center text-button text-black transition-colors hover:bg-[var(--accent)]">
        {c.google} ↗
      </a>
    </div>
  );

  return (
    <>
      <main className="pb-32 pt-28 sm:pt-32 lg:pb-20">
        <div className="shell max-w-6xl">
          <div className="max-w-3xl">
            <h1 className="text-display-lg">{c.h1}</h1>
            <p className="mt-5 text-body leading-relaxed text-[var(--ink-dim)]">{c.intro}</p>
            <p className="mt-4 text-caption text-[var(--ink-dim)]">{c.emergency}</p>
          </div>

          <form className="mt-10 grid gap-10 lg:mt-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-14" onSubmit={(e) => e.preventDefault()}>
            <div className="min-w-0 space-y-10">
              <fieldset>
                <legend>{step(1, c.visit)}</legend>
                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {(Object.keys(c.visits) as VisitType[]).map((v) => (
                    <label key={v} className={`inline-flex min-h-12 cursor-pointer items-center justify-center rounded-2xl border px-4 text-center text-button transition-colors focus-within:ring-2 focus-within:ring-[var(--accent)] ${visit === v ? "border-[var(--accent)] bg-white/[0.04] text-[var(--accent)]" : "border-white/15 hover:bg-white/[0.03]"}`}>
                      <input type="radio" name="visit" value={v} checked={visit === v} onChange={() => setVisit(v)} className="sr-only" />
                      {c.visits[v]}
                    </label>
                  ))}
                </div>
              </fieldset>

              <div>
                <label htmlFor="cond-search">{step(2, c.condition)}</label>
                <input id="cond-search" type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder={c.search} className={`${field} mt-4 min-h-12`} />
                {condition && (
                  <p className="mt-3 text-small text-[var(--accent)]">✓ {condition}</p>
                )}
                <ul role="listbox" aria-label={c.condition} className="mt-3 max-h-60 overflow-y-auto overscroll-contain rounded-2xl border border-white/10">
                  {options.map((o) => (
                    <li key={o} role="option" aria-selected={condition === o}>
                      <button type="button" onClick={() => setCondition(o)} className={`flex min-h-12 w-full items-center justify-between gap-3 px-4 text-left text-small ${condition === o ? "bg-white/[0.06] text-[var(--accent)]" : "hover:bg-white/[0.03]"}`}>
                        <span className="min-w-0">{o}</span>{condition === o && <span aria-hidden>✓</span>}
                      </button>
                    </li>
                  ))}
                </ul>
                {condition === OTHER && (
                  <input aria-label={c.other} value={otherText} maxLength={80} onChange={(e) => setOtherText(e.target.value)} placeholder={c.other} className={`${field} mt-3 min-h-12`} />
                )}
                <label className="mt-4 flex min-h-11 cursor-pointer items-start gap-3 text-small">
                  <input type="checkbox" checked={include} onChange={(e) => setInclude(e.target.checked)} className="mt-0.5 h-5 w-5 shrink-0 accent-[var(--accent)]" />
                  <span className="min-w-0">{c.include}</span>
                </label>
              </div>

              <fieldset>
                <legend>{step(3, c.rating)}</legend>
                <div className="mt-4 flex gap-1 sm:gap-2">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <button key={n} type="button" aria-label={c.stars(n)} aria-pressed={rating === n} onClick={() => setRating(n)}
                      className={`grid h-12 w-12 place-items-center rounded-full text-3xl transition-colors focus-visible:ring-2 focus-visible:ring-[var(--accent)] ${n <= rating ? "text-[var(--accent)]" : "text-white/25 hover:text-white/50"}`}>★</button>
                  ))}
                </div>
              </fieldset>

              <div>
                <label htmlFor="experience">{step(4, c.question)}</label>
                <textarea id="experience" rows={5} maxLength={2000} value={experience} onChange={(e) => setExperience(e.target.value)} className={`${field} mt-4`} />
                <p className="mt-2 text-right text-caption text-[var(--ink-dim)]">{experience.length}/2000</p>
              </div>
            </div>

            <div className="min-w-0 lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-3xl border border-white/[0.08] bg-white/[0.02] p-5 sm:p-7">
                <label htmlFor="preview">{step(5, c.preview)}</label>
                <textarea id="preview" rows={8} value={text} onChange={(e) => { setEdited(true); setText(e.target.value); }} className={`${field} mt-4 min-h-48 resize-y`} />
                <div className="mt-5 hidden lg:block">{actions}</div>
                <p className="mt-5 text-caption leading-relaxed text-[var(--ink-dim)]">{c.note}</p>
                <p aria-live="polite" className="sr-only">{copied ? c.copied : ""}</p>
              </div>
            </div>
          </form>
        </div>
      </main>
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#050B16]/95 px-4 pb-[calc(env(safe-area-inset-bottom)+12px)] pt-3 backdrop-blur lg:hidden">
        {actions}
      </div>
      <Footer />
    </>
  );
}
