import { useTx } from "@/lib/i18n/tx";
import { useState } from "react";
import { z } from "zod";
import { MessageCircle, Mail } from "lucide-react";
import { contact, whatsappLink } from "../../lib/contact";

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

type Channel = "whatsapp" | "email";

const baseSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80, "Name is too long"),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a reachable phone number")
    .max(20, "Please enter a valid phone number")
    .regex(/^[0-9+\-\s()]{7,20}$/, "Phone can contain digits, spaces, + and -"),
  email: z.string().trim().max(120, "Email is too long"),
  city: z.string().trim().max(60, "City is too long"),
  reason: z
    .string()
    .trim()
    .min(3, "Please tell us the condition or reason")
    .max(400, "Please keep this under 400 characters"),
  preferred: z.string().trim().max(120, "Please keep this under 120 characters"),
});

type Errors = Partial<Record<keyof z.infer<typeof baseSchema>, string>>;

export function ConsultationForm() {
  const tx = useTx();
  const [channel, setChannel] = useState<Channel>("whatsapp");
  const [form, setForm] = useState({ name: "", phone: "", email: "", city: "", reason: "", preferred: "" });
  const [reports, setReports] = useState<string[]>([]);
  const [errors, setErrors] = useState<Errors>({});

  const set =
    (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const toggleReport = (r: string) =>
    setReports((list) => (list.includes(r) ? list.filter((x) => x !== r) : [...list, r]));

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const schema = baseSchema.superRefine((v, ctx) => {
      if (channel === "email") {
        const ok = z.string().email().safeParse(v.email).success;
        if (!ok)
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: ["email"],
            message: "Please enter a valid email address",
          });
      } else if (v.email && !z.string().email().safeParse(v.email).success) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["email"],
          message: "Please enter a valid email address",
        });
      }
    });

    const parsed = schema.safeParse(form);
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

    const lines = [
      tx("Consultation request for Dr. Mandeep Sagar."),
      "",
      `${tx("Name")}: ${d.name}`,
      `${tx("Phone")}: ${d.phone}`,
      d.email ? `${tx("Email")}: ${d.email}` : null,
      d.city ? `${tx("City")}: ${d.city}` : null,
      `${tx("Condition / reason")}: ${d.reason}`,
      `${tx("Preferred date and time")}: ${d.preferred || tx("flexible")}`,
      `${tx("Reports available")}: ${reports.length ? reports.map(r => tx(r)).join(", ") : tx("none yet")}`,
      "",
      channel === "whatsapp"
        ? tx("I am attaching my scans and reports to this chat.")
        : tx("I am attaching my scans and reports to this email."),
    ].filter(Boolean) as string[];

    const body = lines.join("\n");

    if (channel === "whatsapp") {
      window.open(whatsappLink(body), "_blank", "noopener,noreferrer");
      return;
    }
    const subject = `${tx("Consultation request")} — ${d.name}`;
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }

  const field =
    "mt-2 w-full rounded-xl border border-white/[0.1] bg-white/[0.02] px-4 py-3 text-small text-[var(--ink)] outline-none transition-colors placeholder:text-[var(--ink-dim)] focus:border-[var(--accent)]";
  const err = "mt-2 text-caption text-[var(--danger,#ff6b6b)]";

  const tab = (active: boolean) =>
    `inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full px-5 text-button transition-colors ${
      active ? "bg-white text-black" : "text-[var(--ink-dim)] hover:text-white"
    }`;

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-3xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8 lg:p-10"
    >
      <p className="text-label">{tx("Consultation request")}</p>
      <h2 className="text-h3 mt-4 max-w-xl">{tx("Send your details to Dr. Sagar directly.")}</h2>
      <p className="mt-3 max-w-xl text-caption leading-relaxed text-[var(--ink-dim)]">
        {tx("Nothing is uploaded or stored on this website. Choose WhatsApp or email and this form opens a message to Dr. Sagar with your details filled in — you attach any scans or reports to that message yourself.")}
      </p>

      <div className="mt-8 max-w-md rounded-full border border-white/[0.1] p-1">
        <div className="flex gap-1">
          <button type="button" onClick={() => setChannel("whatsapp")} className={tab(channel === "whatsapp")} data-cursor="cta">
            <MessageCircle size={16} /> {tx("WhatsApp")}
          </button>
          <button type="button" onClick={() => setChannel("email")} className={tab(channel === "email")} data-cursor="cta">
            <Mail size={16} /> {tx("Email")}
          </button>
        </div>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="c-name" className="text-label">{tx("Your name")}</label>
          <input id="c-name" value={form.name} onChange={set("name")} maxLength={80} className={field} placeholder={tx("Full name")} />
          {errors.name && <p className={err}>{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="c-phone" className="text-label">{tx("Phone number")}</label>
          <input id="c-phone" value={form.phone} onChange={set("phone")} inputMode="tel" maxLength={20} className={field} placeholder={tx("+91 …")} />
          {errors.phone && <p className={err}>{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="c-email" className="text-label">
            Email {channel === "email" ? "" : "(optional)"}
          </label>
          <input id="c-email" value={form.email} onChange={set("email")} inputMode="email" maxLength={120} className={field} placeholder={tx("you@example.com")} />
          {errors.email && <p className={err}>{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="c-city" className="text-label">{tx("City (optional)")}</label>
          <input id="c-city" value={form.city} onChange={set("city")} maxLength={60} className={field} placeholder={tx("Where you are travelling from")} />
          {errors.city && <p className={err}>{errors.city}</p>}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="c-reason" className="text-label">{tx("Condition or reason for consultation")}</label>
          <textarea id="c-reason" value={form.reason} onChange={set("reason")} maxLength={400} rows={3} className={field} placeholder={tx("For example: varicose veins, non-healing foot ulcer, uterine fibroids")} />
          {errors.reason && <p className={err}>{errors.reason}</p>}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="c-preferred" className="text-label">{tx("Preferred date and time (optional)")}</label>
          <input id="c-preferred" value={form.preferred} onChange={set("preferred")} maxLength={120} className={field} placeholder={tx("e.g. any weekday morning")} />
          {errors.preferred && <p className={err}>{errors.preferred}</p>}
        </div>
      </div>

      <fieldset className="mt-8">
        <legend className="text-label">{tx("Reports you can attach")}</legend>
        <div className="mt-4 flex flex-wrap gap-2">
          {reportOptions.map((r) => {
            const on = reports.includes(r);
            return (
              <button
                key={r}
                type="button"
                aria-pressed={on}
                onClick={() => toggleReport(r)}
                data-cursor="link"
                className={`rounded-full border px-4 py-2 text-caption transition-colors ${
                  on
                    ? "border-[var(--accent)] text-[var(--ink)]"
                    : "border-white/[0.1] text-[var(--ink-dim)] hover:text-white"
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
        className="mt-9 inline-flex min-h-12 items-center gap-2.5 rounded-full bg-white px-7 text-button text-black transition-colors hover:bg-[var(--accent)]"
      >
        {channel === "whatsapp" ? <MessageCircle size={18} /> : <Mail size={18} />}
        {tx(channel === "whatsapp" ? "Send on WhatsApp" : "Send by email")}
      </button>
      <p className="mt-4 text-caption text-[var(--ink-dim)]">
        {tx("Or call Dr. Sagar directly on")}{" "}
        <a href={contact.phoneHref} className="text-[var(--ink)]" data-cursor="cta">
          {contact.phoneDisplay}
        </a>
        .
      </p>
    </form>
  );
}
