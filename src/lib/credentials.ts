// Verified professional evidence register. Every entry here is backed by a
// document supplied by the practice. Do not add entries without evidence.
import fellowship from "@/assets/credentials/dr-mandeep-sagar-gmc-nagpur-vascular-ir-fellowship.webp.asset.json";
import kcrPodium1 from "@/assets/credentials/dr-mandeep-sagar-kcr-2025-seoul-podium-01.webp.asset.json";
import kcrPodium2 from "@/assets/credentials/dr-mandeep-sagar-kcr-2025-seoul-podium-02.webp.asset.json";
import kcrCert from "@/assets/credentials/dr-mandeep-sagar-kcr-2025-oral-presentation-certificate.webp.asset.json";
import isvirNagpur from "@/assets/credentials/dr-mandeep-sagar-isvir-2026-nagpur-faculty-certificate.webp.asset.json";
import isvirKochi from "@/assets/credentials/dr-mandeep-sagar-isvir-2025-kochi-participation-certificate.webp.asset.json";
import linncAttend from "@/assets/credentials/dr-mandeep-sagar-linnc-paris-2026-attendance.webp.asset.json";
import linncCme from "@/assets/credentials/dr-mandeep-sagar-linnc-paris-2026-ebac-cme.webp.asset.json";
import linncEvent from "@/assets/credentials/linnc-paris-2026-prof-jacques-moret-event.webp.asset.json";
import moret from "@/assets/credentials/dr-mandeep-sagar-jacques-moret-paris-2026.webp.asset.json";
import slicePariss from "@/assets/credentials/dr-mandeep-sagar-slice-paris-neurointervention-workshop.webp.asset.json";
import sliceIndia from "@/assets/credentials/dr-mandeep-sagar-slice-gurgaon-neurovascular-training.webp.asset.json";
import wlnc24 from "@/assets/credentials/dr-mandeep-sagar-wlnc-istanbul-2024-cme.webp.asset.json";
import wlnc26a from "@/assets/credentials/dr-mandeep-sagar-wlnc-lisbon-2026-attendance.webp.asset.json";
import wlnc26c from "@/assets/credentials/dr-mandeep-sagar-wlnc-lisbon-2026-cme.webp.asset.json";

export type Evidence = { src: string; alt: string; kind: "photo" | "certificate"; caption?: string };

export const KMC_REG_NO = "114492";
export const KMC_VERIFY_URL = "https://www.nmc.org.in/information-desk/indian-medical-register/";

export const fellowshipCertificate: Evidence = {
  src: fellowship.url,
  alt: "MUHS certificate: One-Year Fellowship in Vascular and Interventional Radiology, GMC Nagpur",
  kind: "certificate",
};

export type Qualification = { k: string; v: string; detail: string; evidence?: Evidence; link?: { href: string; label: string } };

export const qualifications: Qualification[] = [
  { k: "MBBS", v: "VIMS, Bellary", detail: "Rajiv Gandhi University of Health Sciences · 2016" },
  { k: "MD Radiodiagnosis", v: "Gauhati Medical College, Guwahati", detail: "Srimanta Sankaradeva University of Health Sciences · 2020" },
  {
    k: "Fellowship",
    v: "Vascular and Interventional Radiology",
    detail: "Government Medical College & Hospital, Nagpur · awarded by MUHS · 2023",
    evidence: fellowshipCertificate,
  },
  {
    k: "Medical registration",
    v: "Karnataka Medical Council",
    detail: `Registration No. ${KMC_REG_NO}`,
    link: { href: KMC_VERIFY_URL, label: "Verify on the Indian Medical Register" },
  },
  {
    k: "Academic appointment",
    v: "Associate Professor, Department of Interventional Radiology",
    detail: "Father Muller Medical College, Mangalore · from September 2026, subject to applicable regulatory approval",
  },
];

export type Category = "Education" | "Scientific presentation" | "Teaching & faculty" | "Conference & CME" | "Hands-on workshop" | "Academic role";

export type JourneyItem = {
  id: string;
  year: number;
  category: Category;
  title: string;
  meta: string;
  summary: string;
  evidence?: Evidence[];
  link?: { href: string; label: string };
  internal?: { to: "/procedures/$slug" | "/about"; slug?: string; label: string };
};

export const journey: JourneyItem[] = [
  { id: "mbbs", year: 2016, category: "Education", title: "MBBS", meta: "VIMS Bellary · RGUHS", summary: "Undergraduate medical degree; registered with the Karnataka Medical Council the same year." },
  { id: "md", year: 2020, category: "Education", title: "MD Radiodiagnosis", meta: "Gauhati Medical College", summary: "Specialist training in diagnostic imaging — the foundation for every image-guided intervention that follows." },
  {
    id: "fellowship", year: 2023, category: "Education", title: "Fellowship in Vascular and Interventional Radiology",
    meta: "GMC Nagpur · MUHS", summary: "One-year formal fellowship completed at Government Medical College & Hospital, Nagpur, with the examination held in Winter 2022; certificate awarded March 2023.",
    evidence: [fellowshipCertificate],
  },
  {
    id: "wlnc-2024", year: 2024, category: "Conference & CME", title: "WLNC–ICURE STROKE Joint Meeting",
    meta: "Istanbul, Turkey · 7–10 May 2024", summary: "Attendance at the joint World Live Neurovascular Conference and ICURE Stroke meeting, recorded with 28 European CME credits.",
    evidence: [{ src: wlnc24.url, alt: "WLNC Istanbul 2024 European CME certificate, 28 credits", kind: "certificate" }],
  },
  {
    id: "isvir-2025", year: 2025, category: "Conference & CME", title: "25th Annual Conference of ISVIR",
    meta: "Grand Hyatt Kochi Bolgatty · 6–9 Feb 2025", summary: "Participated in the annual conference of the Indian Society of Vascular and Interventional Radiology, recorded with 6 CME points.",
    evidence: [{ src: isvirKochi.url, alt: "ISVIR 2025 Kochi certificate of participation", kind: "certificate" }],
  },
  {
    id: "kcr-2025", year: 2025, category: "Scientific presentation", title: "KCR 2025 — Oral scientific presentation",
    meta: "81st Korean Congress of Radiology · COEX, Seoul · 24–27 Sep 2025",
    summary: "Presented \"Outcomes of Arteriovenous Fistuloplasty via Distal Radial Access\" (session SS 15-IR-02). This was an oral presentation, not a journal publication or award.",
    evidence: [
      { src: kcrPodium1.url, alt: "Dr. Mandeep Sagar delivering an oral scientific presentation at KCR 2025 in Seoul.", kind: "photo" },
      { src: kcrPodium2.url, alt: "Dr. Mandeep Sagar presenting beside projected clinical slides at KCR 2025, Seoul", kind: "photo" },
      { src: kcrCert.url, alt: "KCR 2025 certificate of presentation", kind: "certificate" },
    ],
    internal: { to: "/procedures/$slug", slug: "dialysis-fistuloplasty", label: "Read about fistuloplasty" },
  },
  {
    id: "wlnc-2026", year: 2026, category: "Conference & CME", title: "World Live Neurovascular Conference 2026",
    meta: "Lisbon, Portugal · 22–24 Apr 2026", summary: "Attendance at the World Live Neurovascular Conference, recorded with 23 European CME credits.",
    evidence: [
      { src: wlnc26a.url, alt: "WLNC 2026 Lisbon certificate of attendance", kind: "certificate" },
      { src: wlnc26c.url, alt: "WLNC 2026 Lisbon European CME certificate, 23 credits", kind: "certificate" },
    ],
  },
  {
    id: "linnc-2026", year: 2026, category: "Conference & CME", title: "LINNC Paris Course 2026",
    meta: "Carrousel du Louvre, Paris · 1–3 Jun 2026",
    summary: "Attended the Live Interventional Neuroradiology, Neurosurgery and Neurology Course, recorded with 20 EBAC CME credits. During the visit he met Prof. Jacques Moret, a pioneering figure in interventional neuroradiology — a professional encounter, not a training relationship.",
    evidence: [
      { src: linncEvent.url, alt: "LINNC Paris 2026 event stage", kind: "photo" },
      { src: moret.url, alt: "Dr. Mandeep Sagar with Prof. Jacques Moret, Paris 2026", kind: "photo", caption: "Dr. Mandeep Sagar with Prof. Jacques Moret" },
      { src: linncAttend.url, alt: "LINNC Paris 2026 certificate of attendance", kind: "certificate" },
      { src: linncCme.url, alt: "LINNC Paris 2026 EBAC CME certificate, 20 credits", kind: "certificate" },
    ],
  },
  {
    id: "slice-paris", year: 2026, category: "Hands-on workshop", title: "SLICE Workshops — Neurointerventional simulation, Paris",
    meta: "During the LINNC Paris visit", summary: "Took part in a neurointerventional simulation activity with exposure to catheter-based procedural simulation. Not a formally assessed course.",
    evidence: [{ src: slicePariss.url, alt: "Dr. Mandeep Sagar at a SLICE neurointerventional simulation station, Paris", kind: "photo" }],
  },
  {
    id: "slice-india", year: 2026, category: "Hands-on workshop", title: "SLICE Workshops — Neurovascular intervention, India",
    meta: "Gurgaon", summary: "Participated in SLICE's neurointerventional workshops on endovascular treatment of haemorrhagic neurovascular conditions: flow-diverter techniques, intrasaccular treatment, hands-on practice on anatomical models and complex-case decision-making. Participation is acknowledged in an official SLICE Workshops publication.",
    evidence: [{ src: sliceIndia.url, alt: "Dr. Mandeep Sagar at a SLICE neurovascular workshop in India", kind: "photo" }],
  },
  {
    id: "isvir-2026", year: 2026, category: "Teaching & faculty", title: "ISVIR Neurointerventional Training Workshop — Faculty",
    meta: "Dept. of Interventional Radiology, GMC Nagpur · 17–18 Jul 2026", summary: "Faculty at the ISVIR hands-on training workshop on haemorrhagic stroke. The certificate names him \"As Faculty\".",
    evidence: [{ src: isvirNagpur.url, alt: "ISVIR 2026 Nagpur certificate naming Dr. Mandeep Sagar as faculty", kind: "certificate" }],
  },
  {
    id: "fmmc", year: 2026, category: "Academic role", title: "Associate Professor, Interventional Radiology",
    meta: "Father Muller Medical College, Mangalore", summary: "Promoted to Associate Professor from 1 September 2026, subject to applicable regulatory approval. Responsibilities include medical education and specialist training.",
    internal: { to: "/about", label: "Full profile" },
  },
];

// ---------------------------------------------------------------------------
// Public showcase: curated photographs and certificates with patient-readable
// descriptions. Reused on the homepage, About, Media and in structured data.
// ---------------------------------------------------------------------------

export type ShowcaseItem = {
  id: string; // matches a journey id so "Details" can deep-link to /expertise#id
  category: Category;
  title: string;
  meta: string;
  description: string;
  image: Evidence;
  certificates?: Evidence[];
  link?: { href: string; label: string };
};

const byId = (id: string) => journey.find((j) => j.id === id)!;
const photo = (id: string, i = 0) => byId(id).evidence!.filter((e) => e.kind === "photo")[i];
const certs = (id: string) => byId(id).evidence?.filter((e) => e.kind === "certificate");

export const showcase: ShowcaseItem[] = [
  {
    id: "kcr-2025", category: "Scientific presentation",
    title: "Oral scientific presentation at KCR 2025, Seoul",
    meta: "81st Korean Congress of Radiology · September 2025",
    description: "Dr. Mandeep Sagar presented his work \"Outcomes of Arteriovenous Fistuloplasty via Distal Radial Access\" to an international radiology audience. The research relates to keeping dialysis fistulas working through a small wrist puncture.",
    image: photo("kcr-2025", 0),
    certificates: certs("kcr-2025"),
  },
  {
    id: "kcr-2025-slides", category: "Scientific presentation",
    title: "Presenting clinical results, KCR 2025",
    meta: "COEX, Seoul, South Korea · Session SS 15-IR-02",
    description: "Discussing treatment outcomes beside the projected clinical slides during the oral session on fistuloplasty for dialysis access.",
    image: photo("kcr-2025", 1),
  },
  {
    id: "linnc-2026-moret", category: "Conference & CME",
    title: "With Prof. Jacques Moret, Paris 2026",
    meta: "LINNC Paris Course · June 2026",
    description: "Photographed with Prof. Jacques Moret, a pioneering figure in interventional neuroradiology, during an international neurointerventional education visit to Paris. A professional encounter, not a training relationship.",
    image: photo("linnc-2026", 1),
  },
  {
    id: "linnc-2026", category: "Conference & CME",
    title: "LINNC Paris Course 2026",
    meta: "Carrousel du Louvre, Paris · 1–3 June 2026 · 20 EBAC CME credits",
    description: "Live course in interventional neuroradiology, neurosurgery and neurology, where brain aneurysm, stroke and vascular malformation treatments are demonstrated and discussed by international specialists.",
    image: photo("linnc-2026", 0),
    certificates: certs("linnc-2026"),
  },
  {
    id: "slice-paris", category: "Hands-on workshop",
    title: "Neurointerventional simulation, SLICE Paris",
    meta: "SLICE Workshops · Paris 2026",
    description: "Hands-on practice with catheter-based simulation of brain blood-vessel procedures, alongside the LINNC Paris course. A practice activity, not a formally assessed course.",
    image: photo("slice-paris"),
  },
  {
    id: "slice-india", category: "Hands-on workshop",
    title: "Neurovascular intervention workshop, SLICE India",
    meta: "SLICE Workshops · Gurgaon",
    description: "Training in treating bleeding-related brain blood-vessel conditions: flow-diverter techniques, intrasaccular devices for aneurysms, practice on anatomical models and decision-making in complex cases.",
    image: photo("slice-india"),
  },
  {
    id: "isvir-2026", category: "Teaching & faculty",
    title: "Faculty, ISVIR haemorrhagic stroke workshop",
    meta: "GMC Nagpur · 17–18 July 2026",
    description: "Taught as faculty at the Indian Society of Vascular and Interventional Radiology hands-on workshop on haemorrhagic stroke. The certificate names him \"As Faculty\".",
    image: byId("isvir-2026").evidence![0],
  },
  {
    id: "fellowship", category: "Education",
    title: "Fellowship in Vascular and Interventional Radiology",
    meta: "Government Medical College & Hospital, Nagpur · MUHS · 2023",
    description: "One year of formal specialist training in treating blood-vessel disease from inside the vessel, under imaging guidance.",
    image: fellowshipCertificate,
  },
  {
    id: "wlnc-2026", category: "Conference & CME",
    title: "World Live Neurovascular Conference 2026",
    meta: "Lisbon, Portugal · April 2026 · 23 European CME credits",
    description: "International live-case conference on stroke, brain aneurysm and neurovascular treatment.",
    image: byId("wlnc-2026").evidence![0],
    certificates: [byId("wlnc-2026").evidence![1]],
  },
  {
    id: "wlnc-2024", category: "Conference & CME",
    title: "WLNC–ICURE STROKE Joint Meeting 2024",
    meta: "Istanbul, Turkey · May 2024 · 28 European CME credits",
    description: "International meeting focused on stroke treatment and neurovascular intervention.",
    image: byId("wlnc-2024").evidence![0],
  },
  {
    id: "isvir-2025", category: "Conference & CME",
    title: "25th Annual Conference of ISVIR",
    meta: "Kochi · February 2025 · 6 CME points",
    description: "National conference of the Indian Society of Vascular and Interventional Radiology.",
    image: byId("isvir-2025").evidence![0],
  },
];

/** Homepage highlights — the clearest photographs plus the faculty certificate. */
export const featuredShowcaseIds = ["kcr-2025", "linnc-2026-moret", "slice-india", "isvir-2026"];

/** schema.org ImageObject entries for every public evidence image. */
export function showcaseImageObjects(site: string) {
  return showcase.flatMap((s) =>
    [s.image, ...(s.certificates ?? [])].map((e) => ({
      "@type": "ImageObject",
      contentUrl: `${site}${e.src}`,
      url: `${site}${e.src}`,
      name: e === s.image ? s.title : e.alt,
      caption: e.alt,
      description: `${s.description} ${s.meta}.`,
      about: { "@id": `${site}/#physician` },
    })),
  );
}

/** schema.org Event entries for conferences, presentations and workshops attended. */
export function credentialEventsSchema() {
  return journey
    .filter((j) => j.category !== "Education" && j.category !== "Academic role")
    .map((j) => ({ "@type": "Event", name: j.title, description: j.summary, startDate: String(j.year), location: { "@type": "Place", name: j.meta } }));
}
