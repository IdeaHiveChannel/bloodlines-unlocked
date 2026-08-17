import { useTx } from "@/lib/i18n/tx";
import { useState } from "react";
import { z } from "zod";
import { whatsappLink } from "../../lib/contact";

const reportOptions = [
  "CT scan",
  "MRI",
  "CT / MR angiography",
  "Doppler ultrasound",
  "Catheter angiogram",
  "Discharge summary",
  "Blood reports",
  "Biopsy / pathology",
];

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80, "Name is too long"),
  age: z
    .string()
    .trim()
    .min(1, "Please enter the patient's age")
    .max(3, "Please enter a valid age")
    .regex(/^\d{1,3}$/, "Age must be a number"),
  city: z.string().trim().min(2, "Please enter your city").max(60, "City is too long"),
  diagnosis: z
    .string()
    .trim()
    .min(3, "Please describe the diagnosis or main problem")
    .max(300, "Please keep this under 300 characters"),
  advised: z.string().trim().max(500, "Please keep this under 500 characters"),
  reports: z.array(z.string()).max(reportOptions.length),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

export function SecondOpinionForm() {
  const tx = useTx();
  const [form, setForm] = useState({ name: "", age: "", city: "", diagnosis: "", advised: "" });
  const [reports, setReports] = useState<string[]>([]);
  const [errors, setErrors] = useState<Errors>({});

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const toggleReport = (r: string) =>
    setReports((list) => (list.includes(r) ? list.filter((x) => x !== r) : [...list, r]));

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = schema.safeParse({ ...form, reports });
    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof Errors;
        if (key && !next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    const d = parsed.data;
    const message = [
      tx("Second opinion request for Dr. Mandeep Sagar."),
      "",
      `${tx("Name")}: ${d.name}`,
      `${tx("Age")}: ${d.age}`,
      `${tx("City")}: ${d.city}`,
      `${tx("Diagnosis / main problem")}: ${d.diagnosis}`,
      d.advised 
        ? `${tx("Advised so far")}: ${d.advised}` 
        : `${tx("Advised so far")}: ${tx("not yet discussed")}`,
      `${tx("Reports available")}: ${reports.length ? reports.map(r => tx(r)).join(", ") : tx("will confirm")}`,
      "",
      tx("I am attaching my scans and reports to this chat for review."),
    ].join("\n");
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
  }

  const field =
    "mt-2 w-full rounded-xl border border-white/[0.1] bg-white/[0.02] px-4 py-3 text-small text-[var(--ink)] outline-none transition-colors placeholder:text-[var(--ink-dim)] focus:border-[var(--accent)]";

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-3xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8 lg:p-10">
      <p className="text-label">{tx("Review request")}</p>
      <h2 className="text-h3 mt-4 max-w-xl">{tx("Tell us the essentials, then send the scans.")}</h2>
      <p className="mt-3 max-w-xl text-caption leading-relaxed text-[var(--ink-dim)]">
        {tx("This form does not upload or store anything on this website. When you submit, it opens a WhatsApp message addressed to Dr. Sagar with your details filled in — you attach the scan files directly in that chat, where they stay between you and Dr. Sagar.")}
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="so-name" className="text-label">{tx("Patient name")}</label>
          <input id="so-name" value={form.name} onChange={set("name")} maxLength={80} className={field} placeholder={tx("Full name")} />
          {errors.name && <p className="mt-2 text-caption text-[var(--danger,#ff6b6b)]">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="so-age" className="text-label">{tx("Age")}</label>
          <input id="so-age" value={form.age} onChange={set("age")} inputMode="numeric" maxLength={3} className={field} placeholder={tx("e.g. 58")} />
          {errors.age && <p className="mt-2 text-caption text-[var(--danger,#ff6b6b)]">{errors.age}</p>}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="so-city" className="text-label">{tx("City")}</label>
          <input id="so-city" value={form.city} onChange={set("city")} maxLength={60} className={field} placeholder={tx("Where you are travelling from")} />
          {errors.city && <p className="mt-2 text-caption text-[var(--danger,#ff6b6b)]">{errors.city}</p>}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="so-diagnosis" className="text-label">{tx("Diagnosis or main problem")}</label>
          <textarea id="so-diagnosis" value={form.diagnosis} onChange={set("diagnosis")} maxLength={300} rows={3} className={field} placeholder={tx("For example: blocked leg artery, non-healing foot ulcer, uterine fibroids")} />
          {errors.diagnosis && <p className="mt-2 text-caption text-[var(--danger,#ff6b6b)]">{errors.diagnosis}</p>}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="so-advised" className="text-label">{tx("What has been advised so far")}</label>
          <textarea id="so-advised" value={form.advised} onChange={set("advised")} maxLength={500} rows={3} className={field} placeholder={tx("Surgery advised, amputation suggested, medication only — whatever you have been told")} />
          {errors.advised && <p className="mt-2 text-caption text-[var(--danger,#ff6b6b)]">{errors.advised}</p>}
        </div>
      </div>

      <fieldset className="mt-8">
        <legend className="text-label">{tx("Reports you have")}</legend>
        <div className="mt-4 flex flex-wrap gap-2 sm:gap-3">
          {reportOptions.map((r) => {
            const on = reports.includes(r);
            return (
              <button
                type="button"
                key={r}
                onClick={() => toggleReport(r)}
                aria-pressed={on}
                data-cursor="link"
                className={`min-h-11 rounded-full border px-4 text-button transition-colors ${
                  on
                    ? "border-transparent bg-white text-black"
                    : "border-white/[0.1] text-[var(--ink-dim)] hover:bg-white/[0.04] hover:text-white"
                }`}
              >
                {r}
              </button>
            );
          })}
        </div>
      </fieldset>

      <button
        type="submit"
        data-cursor="cta"
        className="mt-9 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-white px-7 text-button text-black transition-colors hover:bg-[var(--accent)] sm:w-auto"
      >
        {tx("Send for review on WhatsApp")}
      </button>
      <p className="mt-4 text-caption text-[var(--ink-dim)]">
        {tx("A reply usually follows within one working day. Urgent symptoms need emergency care, not a second opinion form.")}
      </p>
    </form>
  );
}
