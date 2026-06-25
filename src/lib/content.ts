// Editorial copy: original documentary tone. Conditions/procedures match the
// verified scope the user provided. No fabricated credentials or testimonials.

export type Condition = {
  slug: string;
  name: string;
  region: "brain" | "neck" | "chest" | "abdomen" | "pelvis" | "legs";
  intro: string;
  symptoms: string[];
  treatments: string[];
};

export const conditions: Condition[] = [
  {
    slug: "acute-ischemic-stroke",
    name: "Acute Ischemic Stroke",
    region: "brain",
    intro: "When a clot blocks a vessel inside the brain, every minute reshapes a life. Image-guided thrombectomy reaches the clot through a single puncture and restores flow before tissue is lost.",
    symptoms: ["Sudden weakness on one side", "Facial droop", "Slurred speech", "Loss of vision"],
    treatments: ["Mechanical thrombectomy", "Intra-arterial thrombolysis"],
  },
  {
    slug: "carotid-artery-disease",
    name: "Carotid Artery Disease",
    region: "neck",
    intro: "The carotid arteries carry oxygen-rich blood to the brain. When narrowing develops, the risk is silent until the day it isn't. Targeted intervention restores the channel and protects the brain downstream.",
    symptoms: ["Mini-strokes (TIAs)", "Temporary vision loss", "Often silent"],
    treatments: ["Carotid stenting", "Angioplasty"],
  },
  {
    slug: "aortic-aneurysm",
    name: "Aortic Aneurysm",
    region: "chest",
    intro: "The largest vessel in the body can quietly weaken and expand. Endovascular stent-graft repair excludes the aneurysm from circulation through small access points, redirecting blood through a reinforced channel.",
    symptoms: ["Often silent", "Deep abdominal or back ache", "Pulsating sensation"],
    treatments: ["EVAR — Endovascular Aneurysm Repair", "TEVAR"],
  },
  {
    slug: "peripheral-artery-disease",
    name: "Peripheral Artery Disease",
    region: "legs",
    intro: "Every healthy artery carries oxygen-rich blood to the body. Over time, plaque can narrow these vessels and reduce circulation in the legs. Through a small puncture, a catheter is guided to the blockage and a balloon gently restores the passage so blood begins flowing freely again.",
    symptoms: ["Cramping when walking", "Cold feet", "Slow-healing wounds"],
    treatments: ["Angioplasty", "Atherectomy", "Drug-eluting stenting"],
  },
  {
    slug: "critical-limb-ischemia",
    name: "Critical Limb Ischemia",
    region: "legs",
    intro: "When circulation in a limb falls below what tissue needs to survive, time becomes the most important variable. Endovascular revascularisation reopens the smallest below-knee vessels to give the limb a chance.",
    symptoms: ["Rest pain", "Non-healing ulcers", "Gangrene"],
    treatments: ["Below-knee angioplasty", "Pedal-loop reconstruction"],
  },
  {
    slug: "diabetic-foot",
    name: "Diabetic Foot (vascular causes)",
    region: "legs",
    intro: "In diabetes, the foot's tiny vessels often close earlier than anyone notices. Restoring inflow — sometimes one millimetre at a time — is the difference between healing and amputation.",
    symptoms: ["Non-healing ulcer", "Numbness", "Blackened toes"],
    treatments: ["Tibial and pedal angioplasty", "Wound-directed revascularisation"],
  },
  {
    slug: "varicose-veins",
    name: "Varicose Veins",
    region: "legs",
    intro: "When the one-way valves in leg veins fail, blood pools where it should be travelling upward. A thin laser fibre, guided by ultrasound, closes the faulty vein from the inside — circulation reroutes naturally.",
    symptoms: ["Bulging veins", "Heaviness", "Itching", "Night cramps"],
    treatments: ["Endovenous Laser Ablation", "Radiofrequency Ablation", "Sclerotherapy"],
  },
  {
    slug: "deep-vein-thrombosis",
    name: "Deep Vein Thrombosis",
    region: "legs",
    intro: "A clot inside a deep vein can swell a limb and travel where it must not. Catheter-directed therapy dissolves and extracts the clot, often within a single session.",
    symptoms: ["Sudden leg swelling", "Warmth", "Persistent calf pain"],
    treatments: ["Catheter-directed thrombolysis", "Mechanical thrombectomy", "IVC filter"],
  },
  {
    slug: "uterine-fibroids",
    name: "Uterine Fibroid Embolization",
    region: "pelvis",
    intro: "Fibroids are fed by their own blood supply. Embolization quietly interrupts that supply through a single puncture — preserving the uterus and avoiding surgery.",
    symptoms: ["Heavy menstrual bleeding", "Pelvic pressure", "Pain"],
    treatments: ["Uterine Artery Embolization (UAE)"],
  },
  {
    slug: "prostate-artery-embolization",
    name: "Prostate Artery Embolization",
    region: "pelvis",
    intro: "An enlarged prostate can compress the urinary stream and disturb sleep. Embolization shrinks the gland gradually by reducing its arterial supply — without incisions, catheters in the bladder, or general anaesthesia.",
    symptoms: ["Weak urinary stream", "Frequency", "Nocturia"],
    treatments: ["Prostate Artery Embolization (PAE)"],
  },
  {
    slug: "dialysis-access",
    name: "Dialysis Access Maintenance",
    region: "chest",
    intro: "Dialysis fistulas and grafts must stay open to keep a life on schedule. Angioplasty and declotting restore failing access, often outpatient, often the same day.",
    symptoms: ["Reduced fistula thrill", "Prolonged bleeding", "Arm swelling"],
    treatments: ["Fistuloplasty", "Declotting", "Stent placement"],
  },
  {
    slug: "avm",
    name: "Arteriovenous Malformations",
    region: "brain",
    intro: "A tangle of vessels where arteries and veins meet directly. Targeted embolization closes the abnormal connection from within, often before any incision is considered.",
    symptoms: ["Headache", "Seizure", "Bleeding"],
    treatments: ["Endovascular embolization"],
  },
];

export type Procedure = {
  slug: string;
  name: string;
  oneLiner: string;
  beats: string[];
};

export const procedures: Procedure[] = [
  {
    slug: "angioplasty",
    name: "Angioplasty",
    oneLiner: "Reopening a narrowed artery from the inside.",
    beats: [
      "An artery once flowed freely.",
      "Over years, plaque settled along its wall.",
      "Through a puncture no larger than a needle tip, a catheter is guided to the narrowing.",
      "A balloon expands gently, compressing the plaque outward.",
      "If needed, a fine mesh stent holds the channel open.",
      "Blood begins flowing again. The patient walks the same day.",
    ],
  },
  {
    slug: "thrombectomy",
    name: "Mechanical Thrombectomy",
    oneLiner: "Removing a clot before tissue is lost.",
    beats: [
      "A clot has stopped flow inside a vessel.",
      "A catheter is navigated to the clot face.",
      "A retriever expands inside the clot, capturing it.",
      "The catheter withdraws — the clot leaves with it.",
      "Flow restores in a single heartbeat.",
      "Function returns where it can.",
    ],
  },
  {
    slug: "aneurysm-repair",
    name: "Endovascular Aneurysm Repair",
    oneLiner: "Excluding the aneurysm from circulation.",
    beats: [
      "A weakened vessel wall has begun to balloon.",
      "Through groin access, a stent-graft is delivered folded inside a sheath.",
      "The graft deploys, anchoring above and below the aneurysm.",
      "Blood now flows through reinforced fabric, not the diseased wall.",
      "The aneurysm is sealed off from pressure.",
      "Recovery is measured in days, not weeks.",
    ],
  },
  {
    slug: "varicose-vein-ablation",
    name: "Endovenous Laser Ablation",
    oneLiner: "Closing a failing vein from within.",
    beats: [
      "A vein's one-way valves no longer hold.",
      "Under ultrasound, a thin fibre enters the faulty vein.",
      "Energy delivered along its length closes it gently.",
      "Healthy nearby veins assume the work.",
      "The leg drains as it should.",
      "Discomfort fades within days.",
    ],
  },
];
