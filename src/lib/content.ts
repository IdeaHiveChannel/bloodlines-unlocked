// Editorial copy: original documentary tone. Conditions/procedures match the
// verified scope the user provided. No fabricated credentials or testimonials.

export const regionOrder = [
  "brain",
  "eye",
  "carotid",
  "thyroid",
  "chest",
  "abdomen",
  "liver",
  "kidney",
  "arms",
  "pelvis",
  "knee",
  "legs",
  "veins",
] as const;

export type Region = (typeof regionOrder)[number];

export const regionLabels: Record<Region, string> = {
  brain: "Brain & brain blood vessels",
  eye: "Eye",
  carotid: "Neck & carotid arteries",
  thyroid: "Thyroid",
  chest: "Chest & aorta",
  abdomen: "Abdomen & abdominal blood vessels",
  liver: "Liver",
  kidney: "Kidneys & renal arteries",
  arms: "Arms & hands",
  pelvis: "Pelvis",
  knee: "Knee",
  legs: "Legs & peripheral blood vessels",
  veins: "Veins",
};

export type Condition = {
  slug: string;
  name: string;
  region: Region;
  /** The headline intervention shown beneath the condition on the anatomy map. */
  intervention: string;
  intro: string;
  symptoms: string[];
  treatments: string[];
};

export const conditions: Condition[] = [
  // ── Brain ────────────────────────────────────────────────────────────────
  {
    slug: "acute-ischemic-stroke",
    name: "Acute ischemic stroke",
    region: "brain",
    intervention: "Mechanical thrombectomy",
    intro:
      "When a blood clot blocks a blood vessel in the brain, blood flow to part of the brain is reduced or stopped. In selected patients with acute ischemic stroke, mechanical thrombectomy can be used to remove the clot through a small access point and restore blood flow.",
    symptoms: ["Sudden weakness on one side", "Facial droop", "Slurred speech", "Loss of vision", "Blocked blood vessel in the brain"],
    treatments: ["Mechanical thrombectomy", "Intra-arterial thrombolysis"],
  },
  {
    slug: "cerebral-aneurysm",
    name: "Cerebral aneurysm",
    region: "brain",
    intervention: "Coiling",
    intro:
      "A weak point on a brain artery slowly fills under pressure. Coils placed from inside the vessel pack the sac until blood no longer enters it — the skull is never opened.",
    symptoms: ["Often silent", "Sudden severe headache", "Vision change", "Neck stiffness", "Bleeding from a brain aneurysm"],
    treatments: ["Endovascular coiling", "Flow-diverter stenting", "Balloon-assisted coiling"],
  },
  {
    slug: "brain-avm",
    name: "Arteriovenous malformation (AVM)",
    region: "brain",
    intervention: "Embolization",
    intro:
      "A tangle of vessels where arteries and veins meet directly, bypassing the capillary bed. Targeted embolization closes the abnormal connection from within, often before any incision is considered.",
    symptoms: ["Headache", "Seizure", "Bleeding", "Progressive weakness", "Abnormal connection between brain arteries and veins"],
    treatments: ["Endovascular embolization", "Staged embolization before radiosurgery"],
  },
  {
    slug: "dural-avf",
    name: "Dural arteriovenous fistula (AVF)",
    region: "brain",
    intervention: "Embolization",
    intro:
      "An abnormal shortcut between an artery and a vein in the covering of the brain. Pressure builds where it was never meant to. Embolic material delivered through a microcatheter seals the shunt.",
    symptoms: ["Pulsatile tinnitus", "Headache", "Vision change", "Bleeding"],
    treatments: ["Transarterial embolization", "Transvenous embolization"],
  },

  // ── Neck ────────────────────────────────────────────────────────────────
  {
    slug: "carotid-artery-disease",
    name: "Carotid artery disease",
    region: "carotid",
    intervention: "Carotid stenting",
    intro:
      "The carotid arteries carry oxygen-rich blood to the brain. When narrowing develops, the risk is silent until the day it isn't. Targeted intervention restores the channel and protects the brain downstream.",
    symptoms: ["Mini-strokes (TIAs)", "Temporary vision loss", "Often silent"],
    treatments: ["Carotid stenting with protection device", "Angioplasty"],
  },
  {
    slug: "carotid-body-tumour",
    name: "Carotid body tumour",
    region: "carotid",
    intervention: "Pre-operative embolisation",
    intro:
      "A carotid body tumour is a highly vascular swelling at the division of the carotid artery in the neck. Embolisation can be used to reduce blood supply before surgery by the appropriate surgical team.",
    symptoms: ["Lump in the neck", "Pulsating mass"],
    treatments: ["Pre-operative tumour embolisation"],
  },
  {
    slug: "thyroid-nodules",
    name: "Thyroid nodules & goitre",
    region: "thyroid",
    intervention: "Ablation or embolization",
    intro:
      "A benign nodule can press, disfigure and worry without ever being cancer. Heat delivered through a needle shrinks it in place; blocking its artery shrinks a larger goitre. No scar, no thyroid hormone tablets for life.",
    symptoms: ["Neck swelling", "Pressure when swallowing", "Voice change", "Cosmetic concern", "Thyroid swelling", "Thyroid nodule"],
    treatments: ["Radiofrequency / microwave thyroid ablation", "Thyroid artery embolization"],
  },

  // ── Abdomen ──────────────────────────────────────────────────────────────
  {
    slug: "visceral-aneurysm",
    name: "Visceral aneurysm",
    region: "abdomen",
    intervention: "Embolization & stenting",
    intro:
      "An angiomyolipoma is a usually benign kidney tumour that contains blood vessels and other tissue. Larger or selected lesions may have a risk of bleeding and can sometimes be treated with embolisation.",
    symptoms: ["Often silent", "Vague abdominal pain", "Pulsating sensation"],
    treatments: ["Coil embolization", "Flow-diverter stenting", "Covered stent exclusion"],
  },
  {
    slug: "hepatic-hemangioma",
    name: "Hepatic hemangioma",
    region: "abdomen",
    intervention: "Embolization",
    intro:
      "A hepatic hemangioma is a benign blood-vessel tumour of the liver. It is a non-cancerous growth that usually does not require treatment unless it is large or causing symptoms.",
    symptoms: ["Abdominal pain", "Fullness"],
    treatments: ["Embolization"],
  },
  {
    slug: "angiomyolipoma",
    name: "Angiomyolipoma",
    region: "abdomen",
    intervention: "Embolization",
    intro:
      "An angiomyolipoma is a usually benign kidney tumour that contains blood vessels and other tissue. Larger or selected lesions may have a risk of bleeding and can sometimes be treated with embolisation.",
    symptoms: ["Flank pain", "Blood in urine"],
    treatments: ["Embolization"],
  },

  // ── Chest ───────────────────────────────────────────────────────
  {
    slug: "hemoptysis",
    name: "Hemoptysis (Coughing up blood)",
    region: "chest",
    intervention: "Bronchial artery embolisation",
    intro:
      "In selected patients, bleeding may come from abnormal or damaged blood vessels in the lungs. Bronchial artery embolisation can be used to block the responsible blood vessel.",
    symptoms: ["Coughing up blood", "Blood in the cough"],
    treatments: ["Bronchial artery embolisation"],
  },
  {
    slug: "pulmonary-avm",
    name: "Pulmonary AVM",
    region: "chest",
    intervention: "Embolisation",
    intro:
      "An abnormal connection between blood vessels in the lung (Pulmonary arteriovenous malformation).",
    symptoms: ["Shortness of breath", "Low oxygen levels"],
    treatments: ["Pulmonary AVM embolisation"],
  },

  // ── Liver ───────────────────────────────────────────────────────────────
  {
    slug: "hepatocellular-carcinoma",
    name: "Hepatocellular carcinoma",
    region: "liver",
    intervention: "TACE & microwave ablation",
    intro:
      "A cancerous liver tumour that lives on its own artery. Chemotherapy beads delivered directly into that artery starve it from the inside.",
    symptoms: ["Abdominal pain", "Weight loss", "Jaundice"],
    treatments: ["TACE — transarterial chemoembolization", "Microwave ablation"],
  },

  // ── Kidney ──────────────────────────────────────────────────────────────
  {
    slug: "renal-artery-stenosis",
    name: "Renal artery stenosis",
    region: "kidney",
    intervention: "Renal artery stenting",
    intro:
      "When high blood pressure remains difficult to control despite several medicines, narrowing of the renal artery may sometimes be investigated as a possible cause.",
    symptoms: ["Resistant hypertension", "Declining kidney function"],
    treatments: ["Renal artery angioplasty", "Renal artery stenting"],
  },

  // ── Lower limbs ─────────────────────────────────────────────────────────
  {
    slug: "poor-blood-circulation",
    name: "Poor blood circulation in the legs",
    region: "legs",
    intervention: "Angioplasty & stenting",
    intro:
      "Also known as peripheral artery disease (PAD). Narrowed or blocked leg arteries reduce blood supply, causing pain or non-healing wounds.",
    symptoms: ["Pain while walking", "Cold feet", "Non-healing wounds", "Diabetic foot", "Gangrene"],
    treatments: ["Angioplasty", "Stenting", "Below-knee revascularisation"],
  },

  // ── Veins ───────────────────────────────────────────────────────────────
  {
    slug: "varicose-veins",
    name: "Varicose veins",
    region: "veins",
    intervention: "Laser ablation",
    intro:
      "A failing vein closes and blood reroutes through healthy veins. Treatment for venous insufficiency and related ulcers.",
    symptoms: ["Bulging veins", "Leg swelling", "Venous ulcers", "Deep vein thrombosis"],
    treatments: ["Endovenous laser ablation", "Radiofrequency ablation"],
  },
];

export function conditionsByRegion(region: Region) {
  return conditions.filter((c) => c.region === region);
}

// ── Procedures ─────────────────────────────────────────────────────────────

export type Storyboard =
  | "angioplasty"
  | "thrombectomy"
  | "evar"
  | "laser"
  | "tace"
  | "ablation"
  | "coiling"
  | "embolization";

export type Procedure = {
  slug: string;
  name: string;
  oneLiner: string;
  storyboard: Storyboard;
  beats: string[];
  /** Shown on the homepage scroll chapters. */
  featured?: boolean;
};

export const procedures: Procedure[] = [
  {
    slug: "angioplasty",
    name: "Angioplasty & stenting",
    oneLiner: "Reopening a narrowed artery from the inside.",
    storyboard: "angioplasty",
    featured: true,
    beats: [
      "An artery once flowed freely. Over years, plaque settled along its wall.",
      "A guidewire is steered across the narrowing — the hardest millimetres of the case.",
      "A balloon expands gently, compressing the plaque outward.",
      "A fine mesh stent is deployed to hold the channel open.",
      "Blood begins flowing again. The patient walks the same day.",
    ],
  },
  {
    slug: "thrombectomy",
    name: "Mechanical thrombectomy",
    oneLiner: "Removing a clot before brain tissue is lost.",
    storyboard: "thrombectomy",
    featured: true,
    beats: [
      "A clot has stopped flow inside a vessel. Downstream, tissue is on a clock.",
      "A stent retriever is opened inside the clot and left to grip it.",
      "The clot is captured within the struts of the retriever.",
      "A large-bore catheter aspirates as the retriever is withdrawn.",
      "The clot leaves the body. Reperfusion is immediate.",
      "Function returns where it can.",
    ],
  },
  {
    slug: "aneurysm-repair",
    name: "Endovascular aneurysm repair",
    oneLiner: "Excluding the aneurysm from circulation.",
    storyboard: "evar",
    featured: true,
    beats: [
      "A weakened aortic wall has begun to balloon under pressure.",
      "Through groin access, a stent-graft is delivered folded inside a sheath.",
      "The graft unfolds, anchoring above and below the aneurysm.",
      "Blood now flows through reinforced fabric, not the diseased wall.",
      "A completion angiogram confirms there is no endoleak.",
      "Recovery is measured in days, not weeks.",
    ],
  },
  {
    slug: "varicose-vein-ablation",
    name: "Endovenous laser ablation",
    oneLiner: "Closing a failing vein from within.",
    storyboard: "laser",
    featured: true,
    beats: [
      "A vein's one-way valves no longer hold. Blood falls back down the leg.",
      "Under ultrasound, a thin laser fibre is passed inside the faulty vein.",
      "Energy is delivered along its length as the fibre is withdrawn.",
      "The vein collapses and seals behind it.",
      "Healthy deep veins reroute the flow.",
      "The patient walks out; discomfort fades within days.",
    ],
  },
  {
    slug: "tace",
    name: "TACE — chemoembolization",
    oneLiner: "Delivering chemotherapy into a tumour's own artery.",
    storyboard: "tace",
    featured: true,
    beats: [
      "A liver tumour lights up on angiography, fed by its own artery.",
      "A microcatheter is navigated into that feeding branch alone.",
      "Drug-eluting beads are released directly into the tumour bed.",
      "The feeding artery is blocked behind them.",
      "The tumour blush fades. Healthy liver is untouched.",
    ],
  },
  {
    slug: "microwave-ablation",
    name: "Microwave ablation",
    oneLiner: "Destroying a tumour with heat, through a needle.",
    storyboard: "ablation",
    featured: true,
    beats: [
      "The tumour is located precisely on CT or ultrasound.",
      "A single antenna is advanced through the skin into its centre.",
      "Microwave energy raises the temperature within seconds.",
      "The ablation zone expands outward past the tumour margin.",
      "The tumour is destroyed in place. One puncture. No incision.",
    ],
  },
  {
    slug: "aneurysm-coiling",
    name: "Cerebral aneurysm coiling",
    oneLiner: "Packing an aneurysm until blood no longer enters it.",
    storyboard: "coiling",
    beats: [
      "An aneurysm sac fills with every heartbeat.",
      "A microcatheter is parked at the neck of the sac.",
      "Soft platinum coils are delivered one by one into the dome.",
      "The sac packs densely; flow at the neck slows and stops.",
      "The aneurysm is excluded from the circulation.",
    ],
  },
  {
    slug: "thyroid-ablation",
    name: "Thyroid nodule ablation",
    oneLiner: "Shrinking a nodule without removing the gland.",
    storyboard: "ablation",
    beats: [
      "A benign nodule is mapped on ultrasound.",
      "A fine electrode enters through the skin — no incision, no scar.",
      "Energy is applied in a moving, controlled pattern.",
      "The treated tissue shrinks steadily over the following months.",
      "Thyroid function is preserved; no lifelong hormone tablets.",
    ],
  },
  {
    slug: "genicular-artery-embolization",
    name: "Genicular artery embolization",
    oneLiner: "Reducing the abnormal blood supply that drives knee pain.",
    storyboard: "embolization",
    beats: [
      "Angiography shows an abnormal blush over the inflamed knee lining.",
      "A microcatheter is advanced into the genicular branch feeding it.",
      "Microspheres are released to reduce that supply.",
      "The blush disappears under fluoroscopy.",
      "Pain improves over the following weeks. No joint is opened.",
    ],
  },
  {
    slug: "dialysis-fistuloplasty",
    name: "Dialysis fistuloplasty",
    oneLiner: "Keeping a lifeline open.",
    storyboard: "angioplasty",
    beats: [
      "Dialysis flows have fallen. A stenosis is found in the outflow vein.",
      "The fistula itself is punctured and crossed with a wire.",
      "A high-pressure balloon is inflated across the narrowing.",
      "The thrill returns under the fingertips.",
      "The same access continues to be used — no new line, no new limb.",
    ],
  },
  {
    slug: "tips",
    name: "TIPS",
    oneLiner: "Giving portal pressure somewhere to go.",
    storyboard: "embolization",
    beats: [
      "Scarred liver tissue resists the blood trying to cross it.",
      "From a neck vein, a tract is created through the liver parenchyma.",
      "A covered stent holds that tract open between portal and hepatic veins.",
      "Portal pressure falls immediately and is measured on the table.",
      "Ascites and variceal bleeding recede.",
    ],
  },
  {
    slug: "prostate-artery-embolization",
    name: "Prostate artery embolization (PAE)",
    oneLiner: "Shrinking the prostate by closing its supply.",
    storyboard: "embolization",
    beats: [
      "An enlarged prostate presses on the urethra and rules the day by the hour.",
      "A microcatheter is navigated into the prostatic arteries from a single wrist or groin puncture.",
      "Tiny particles are released, reducing blood supply to the gland.",
      "Over weeks the gland softens and shrinks, and the stream improves.",
      "Sexual function is preserved. No catheter through the urethra, no resection.",
    ],
  },
  {
    slug: "uterine-fibroid-embolization",
    name: "Uterine fibroid embolization (UFE)",
    oneLiner: "Treating fibroids without removing the uterus.",
    storyboard: "embolization",
    beats: [
      "Fibroids grow on a dense, abnormal blood supply of their own.",
      "Both uterine arteries are catheterised through one small puncture.",
      "Embolic particles cut off the fibroid supply while the healthy uterus keeps its own.",
      "The fibroids infarct and shrink over the following months.",
      "Bleeding settles, pressure eases, and the uterus stays.",
    ],
  },
];

export const featuredProcedures = procedures.filter((p) => p.featured);

// ── Region → procedures & guide ────────────────────────────────────────────

/** Procedures offered per anatomical region, shown alongside conditions on the map. */
export const regionProcedures: Record<Region, string[]> = {
  brain: ["Mechanical thrombectomy", "Aneurysm coiling", "Flow diversion", "AVM embolization"],
  eye: ["Transvenous embolization", "Balloon-assisted closure"],
  carotid: ["Carotid stenting", "Angioplasty with protection"],
  thyroid: ["Radiofrequency / microwave ablation", "Thyroid artery embolization"],
  chest: ["EVAR / TEVAR", "Bronchial artery embolization", "Aortic stent grafting"],
  abdomen: ["Visceral aneurysm embolization", "Liver tumour TACE/ablation", "Renal artery stenting"],
  liver: ["TACE", "Microwave ablation", "TIPS", "Portal vein embolization"],
  kidney: ["Renal artery angioplasty", "Renal tumour ablation", "Renal embolization"],
  arms: ["Fistuloplasty", "Declotting", "Central vein recanalisation"],
  pelvis: ["Uterine fibroid embolization", "Prostate artery embolization", "Pelvic vein embolization"],
  knee: ["Genicular artery embolization"],
  legs: ["Angioplasty & stenting", "Atherectomy", "Below-knee revascularisation"],
  veins: ["Endovenous laser ablation", "Catheter-directed thrombolysis", "Venous stenting"],
};

/** Region → the pillar guide that best represents it, when one exists. */
export const regionGuide: Partial<Record<Region, string>> = {
  brain: "stroke",
  thyroid: "thyroid-nodules",
  liver: "liver-tumours",
  pelvis: "uterine-fibroids",
  knee: "knee-osteoarthritis",
  legs: "peripheral-arterial-disease",
  veins: "varicose-veins",
};

// ── Professional journey ───────────────────────────────────────────────────

export type Milestone = {
  id: string;
  title: string;
  meta: string;
  summary: string;
  /** Only the final milestone navigates away. */
  to?: "/testimonials";
};

export const milestones: Milestone[] = [
  {
    id: "md",
    title: "MD Radiodiagnosis",
    meta: "Foundation",
    summary:
      "Formal specialist training in diagnostic imaging — the discipline of reading the body before touching it. Every intervention that follows rests on this.",
  },
  {
    id: "nhrims",
    title: "NHRIMS Shillong",
    meta: "Neurovascular intervention fellowship",
    summary:
      "Dedicated fellowship training in neurovascular intervention: acute stroke thrombectomy, aneurysm embolization and the management of intracranial vascular malformations.",
  },
  {
    id: "gmc-nagpur",
    title: "GMC Nagpur",
    meta: "Advanced endovascular & neurovascular training",
    summary:
      "High-volume advanced training across the endovascular and neurovascular spectrum, in a tertiary referral setting where cases arrive at their most complex.",
  },
  {
    id: "lincc",
    title: "LINCC Paris",
    meta: "Prof. Jacques Moret meeting",
    summary:
      "Live interventional neuroradiology course in Paris, including a meeting with Prof. Jacques Moret — one of the founding figures of endovascular neurosurgery.",
  },
  {
    id: "wlnc-turkey",
    title: "WLNC Turkey",
    meta: "World Live Neurovascular Conference",
    summary:
      "Live case transmission and international faculty discussion on evolving neurovascular technique.",
  },
  {
    id: "wlnc-portugal",
    title: "WLNC Portugal",
    meta: "World Live Neurovascular Conference",
    summary:
      "Continued participation in the global live neurovascular programme, tracking device and technique evolution as it happens.",
  },
  {
    id: "kcr-seoul",
    title: "KCR Seoul",
    meta: "Korean Congress of Radiology",
    summary:
      "Exposure to Asian-Pacific interventional practice, ablation technique and oncological intervention at one of the region's principal radiology congresses.",
  },
  {
    id: "twice-gurgaon",
    title: "TWICE Gurgaon",
    meta: "Interventional workshop",
    summary:
      "Hands-on interventional workshop with case-based faculty sessions and device training.",
  },
  {
    id: "guest-lectures",
    title: "Guest lectures",
    meta: "Teaching",
    summary:
      "Invited talks on stroke intervention, limb salvage and the widening role of interventional radiology across organ systems.",
  },
  {
    id: "workshops",
    title: "Workshops",
    meta: "Skills transfer",
    summary:
      "Practical workshops on access, wire and catheter technique, and image-guided ablation for practising clinicians.",
  },
  {
    id: "residents",
    title: "Training residents",
    meta: "Mentorship",
    summary:
      "Ongoing supervision and teaching of radiology residents — from first puncture to independent case planning.",
  },
  {
    id: "ima",
    title: "IMA scientific sessions",
    meta: "Medical community",
    summary:
      "Scientific sessions with the wider medical community, translating interventional options into terms referring physicians can act on.",
  },
  {
    id: "national",
    title: "National conferences",
    meta: "Presentation",
    summary:
      "Case and technique presentations at national interventional and radiology conferences.",
  },
  {
    id: "today",
    title: "Patient care today",
    meta: "Practice",
    summary:
      "Everything above exists for one reason: the person on the table. See what patients say about their care.",
    to: "/testimonials",
  },
];

// ── Resource library ───────────────────────────────────────────────────────

export type ResourceKind = "Video" | "Patient guide" | "FAQ" | "Recovery";

export type Resource = {
  id: string;
  kind: ResourceKind;
  title: string;
  text: string;
  /** Related condition slugs. */
  related: string[];
  /** Procedure page this resource links to, when it has one. */
  procedure?: string;
  pending?: boolean;
};

export const resources: Resource[] = [
  {
    id: "video-thrombectomy",
    kind: "Video",
    title: "Mechanical thrombectomy, animated",
    text: "How a clot in a brain artery is captured and withdrawn through a single puncture.",
    related: ["acute-ischemic-stroke"],
    procedure: "thrombectomy",
  },
  {
    id: "video-aneurysm-coiling",
    kind: "Video",
    title: "Cerebral aneurysm coiling, animated",
    text: "The aneurysm sac is packed from inside the vessel until flow no longer enters it.",
    related: ["cerebral-aneurysm"],
    procedure: "aneurysm-coiling",
  },
  {
    id: "video-evar",
    kind: "Video",
    title: "Endovascular aneurysm repair, animated",
    text: "A stent graft is carried up through the groin and deployed to reline the aorta.",
    related: ["aortic-aneurysm", "aortic-dissection"],
    procedure: "aneurysm-repair",
  },
  {
    id: "video-varicose",
    kind: "Video",
    title: "Varicose vein treatment, animated",
    text: "The failing vein is sealed along its length and flow reroutes to healthy veins.",
    related: ["varicose-veins", "venous-ulcer"],
    procedure: "varicose-vein-ablation",
  },
  {
    id: "guide-before-procedure",
    kind: "Patient guide",
    title: "Preparing for your procedure",
    text: "Fasting, medication, blood thinners, what to bring, and who should come with you.",
    related: [],
  },
  {
    id: "guide-diabetic-foot",
    kind: "Patient guide",
    title: "Caring for a diabetic foot wound",
    text: "Daily inspection, offloading, and the warning signs that mean the same-day clinic, not next week.",
    related: ["diabetic-foot", "critical-limb-ischemia"],
  },
  {
    id: "guide-dialysis-access",
    kind: "Patient guide",
    title: "Protecting your dialysis fistula",
    text: "How to check the thrill daily and what a falling flow rate is telling you.",
    related: ["dialysis-access-failure", "central-vein-stenosis"],
  },
  {
    id: "faq-anaesthesia",
    kind: "FAQ",
    title: "Will I be asleep?",
    text: "Most interventions are performed under local anaesthesia with sedation. You are comfortable and usually awake.",
    related: [],
  },
  {
    id: "faq-scar",
    kind: "FAQ",
    title: "Will there be a scar?",
    text: "Access is usually through a puncture a few millimetres wide. There is no surgical incision to close.",
    related: [],
  },
  {
    id: "faq-radiation",
    kind: "FAQ",
    title: "Is the X-ray exposure safe?",
    text: "Dose is actively minimised with modern equipment and protocols, and is weighed against the risk of the untreated disease.",
    related: [],
  },
  {
    id: "faq-second-opinion",
    kind: "FAQ",
    title: "Can I get a second opinion on my scans?",
    text: "Yes. Share your CT, MRI or angiography reports and they will be reviewed before any recommendation is made.",
    related: [],
  },
  {
    id: "recovery-day-case",
    kind: "Recovery",
    title: "Going home the same day",
    text: "What the first six hours after a day-case intervention look like, and when you can drive, bathe and work.",
    related: ["peripheral-artery-disease", "varicose-veins"],
  },
  {
    id: "recovery-ablation",
    kind: "Recovery",
    title: "After an ablation",
    text: "Expected soreness, the low-grade fever that can follow, and the imaging follow-up schedule.",
    related: ["hepatocellular-carcinoma", "renal-tumour", "thyroid-nodules"],
  },
  {
    id: "recovery-vein",
    kind: "Recovery",
    title: "After vein treatment",
    text: "Compression stockings, walking targets, and why lying still is the one thing not to do.",
    related: ["varicose-veins", "venous-ulcer", "deep-vein-thrombosis"],
  },
];

export function resourcesForCondition(slug: string) {
  return resources.filter((r) => r.related.includes(slug));
}
