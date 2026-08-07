import { useTx } from "@/lib/i18n/tx";
import { LocaleLink } from "../components/locale-link";
import { createFileRoute } from "@tanstack/react-router";
import { Footer } from "../components/sections/Footer";
import { SecondOpinionForm } from "../components/sections/SecondOpinionForm";
import { contact, whatsappLink, whatsappMessages } from "../lib/contact";

const SITE = "https://bloodlines-unlocked.lovable.app";

export const Route = createFileRoute("/{-$locale}/second-opinion")({
  head: () => ({
    meta: [
      { title: "Second opinion on your scans — Dr. Sagar" },
      {
        name: "description",
        content:
          "Already advised surgery or amputation? Send your CT, MRI, angiography or doppler reports for an image-guided second opinion from Dr. Mandeep Sagar.",
      },
      { property: "og:title", content: "Second opinion on your scans" },
      {
        property: "og:description",
        content:
          "An interventional radiology review of your existing scans and reports, before you commit to major surgery.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE}/second-opinion` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE}/second-opinion` }],
  }),
  component: SecondOpinion,
});

const reviewed = [
  "CT and CT angiography",
  "MRI and MR angiography",
  "Doppler ultrasound of arteries and veins",
  "Catheter angiogram images and reports",
  "Discharge summaries and operative notes",
  "Blood work and pathology relevant to the plan",
];

const steps = [
  {
    t: "Step 01",
    title: "You send what you already have",
    body: "Scans, reports and the advice you have been given. No new investigation is asked for at this stage.",
  },
  {
    t: "Step 02",
    title: "The images are read, not just the reports",
    body: "The actual imaging is reviewed against what image-guided treatment can and cannot offer in your case.",
  },
  {
    t: "Step 03",
    title: "You get a straight answer",
    body: "Whether a minimally invasive option exists, what it would involve, and where surgery remains the better choice.",
  },
];

function SecondOpinion() {
  const tx = useTx();
  return (
    <>
      <main className="bg-[#050B16] pt-32 sm:pt-36">
        <section className="section-y pt-0">
          <div className="shell">
            <p className="text-label">{tx("Second opinion")}</p>
            <h1 className="text-display-xl mt-6 max-w-4xl">
              {tx("Before major surgery, have the images read again.")}
            </h1>
            <p className="mt-8 max-w-2xl text-body leading-relaxed text-[var(--ink-dim)]">
              {tx("A second opinion is not a challenge to your doctor. It is a second reading of the same evidence by a different specialty. Interventional radiology treats through a pinhole opening — and there are cases where a blocked artery, a bleeding vessel, a fibroid or a threatened limb can be treated without an open operation. Equally, there are cases where surgery is the right answer, and you will be told that plainly.")}
            </p>

            <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-14">
              <div>
                <p className="text-label">{tx("When a review helps most")}</p>
                <ul className="mt-5 space-y-3 text-small leading-relaxed text-[var(--ink-dim)]">
                  <li>{tx("Amputation has been suggested for a non-healing foot or leg wound.")}</li>
                  <li>{tx("Open surgery has been advised for an aneurysm, fibroid or enlarged prostate.")}</li>
                  <li>{tx("You have been told nothing more can be done for poor circulation.")}</li>
                  <li>{tx("A liver, kidney or lung tumour is called inoperable.")}</li>
                  <li>{tx("Symptoms persist after a previous procedure.")}</li>
                </ul>

                <p className="mt-10 text-label">{tx("What is reviewed")}</p>
                <ul className="mt-5 grid gap-2 text-small text-[var(--ink-dim)] sm:grid-cols-2">
                  {reviewed.map((r) => (
                    <li key={r} className="rounded-xl border border-white/[0.06] bg-white/[0.015] px-4 py-3">
                      {r}
                    </li>
                  ))}
                </ul>

                <p className="mt-10 text-label">{tx("Privacy")}</p>
                <p className="mt-4 max-w-xl text-small leading-relaxed text-[var(--ink-dim)]">
                  {tx("This website stores nothing. Your details and files travel directly to Dr. Sagar over WhatsApp, and are used only for the review you asked for.")}
                </p>
              </div>

              <SecondOpinionForm />
            </div>
          </div>
        </section>

        <section className="section-y pt-0">
          <div className="shell">
            <p className="text-label">{tx("What happens next")}</p>
            <ol className="mt-8 grid gap-5 md:grid-cols-3">
              {steps.map((s) => (
                <li key={s.t} className="rounded-2xl border border-white/[0.06] bg-white/[0.015] p-6">
                  <div className="size-3 rounded-full bg-[var(--accent)] shadow-[0_0_12px_var(--accent)]" />
                  <p className="mt-4 text-label">{s.t}</p>
                  <h3 className="text-card-title mt-2">{s.title}</h3>
                  <p className="mt-3 text-caption leading-relaxed text-[var(--ink-dim)]">{s.body}</p>
                </li>
              ))}
            </ol>

            <div className="mt-12 flex flex-wrap gap-3 sm:gap-4">
              <LocaleLink
                to="/contact"
                data-cursor="cta"
                className="inline-flex min-h-12 items-center rounded-full bg-white px-7 text-button text-black transition-colors hover:bg-[var(--accent)]"
              >
                {tx("Book a consultation")}
              </LocaleLink>
              <a
                href={whatsappLink(whatsappMessages.uploadReports)}
                target="_blank"
                rel="noreferrer"
                data-cursor="link"
                className="inline-flex min-h-12 items-center rounded-full border border-white/15 px-7 text-button transition-colors hover:bg-white/5"
              >
                {tx("Send reports without the form")}
              </a>
              <a
                href={contact.phoneHref}
                data-cursor="link"
                className="inline-flex min-h-12 items-center rounded-full border border-white/15 px-7 text-button transition-colors hover:bg-white/5"
              >
                {tx("Call")} {contact.phoneDisplay}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
