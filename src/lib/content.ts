// Editorial copy: original documentary tone. Conditions/procedures match the
// verified scope the user provided. No fabricated credentials or testimonials.

export const regionOrder = [
  "brain",
  "neck",
  "chest",
  "abdomen",
  "liver",
  "kidneys",
  "arms",
  "pelvis",
  "knee",
  "legs",
  "veins",
] as const;

export type Region = (typeof regionOrder)[number];

export const regionLabels: Record<Region, string> = {
  brain: "Brain",
  neck: "Neck",
  chest: "Chest",
  abdomen: "Abdomen",
  liver: "Liver",
  kidneys: "Kidneys",
  arms: "Arms",
  pelvis: "Pelvis",
  knee: "Knee",
  legs: "Legs",
  veins: "Veins",
};



export type ProcedureInfo = {
  symptoms: string[];
  causes: string[];
  diagnosis: string[];
  treatment: string[];
  recovery: string[];
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
      "A blood clot has stopped blood flow inside a brain blood vessel. Downstream, brain tissue is on a clock. In selected patients, mechanical thrombectomy can be used to remove the clot through a small access point and restore blood flow.",
    symptoms: ["Sudden weakness on one side", "Facial droop", "Slurred speech", "Loss of vision", "Blocked blood vessel in the brain", "Hemiplegia"],
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
    name: "Brain AVM & AVF",
    region: "brain",
    intervention: "Embolization",
    intro:
      "A tangle of vessels where arteries and veins meet directly (AVM) or an abnormal connection (AVF). Targeted embolization closes the abnormal connection from within, often before any incision is considered.",
    symptoms: ["Headache", "Seizure", "Bleeding", "Progressive weakness", "Abnormal connection between brain arteries and veins", "Venous malformations"],
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
    region: "neck",

    intervention: "Carotid stenting",
    intro:
      "The carotid arteries carry oxygen-rich blood to the brain. When narrowing develops, the risk is silent until the day it isn't. Targeted intervention restores the channel and protects the brain downstream.",
    symptoms: ["Mini-strokes (TIAs)", "Temporary vision loss", "Often silent"],
    treatments: ["Carotid stenting with protection device", "Angioplasty"],
  },
  {
    slug: "carotid-body-tumour",
    name: "Carotid body tumour",
    region: "neck",
    intervention: "Pre-operative embolisation",
    intro:
      "A carotid body tumour is a highly vascular swelling at the division of the carotid artery in the neck. Embolisation is performed before the surgeon removes the tumour to reduce blood supply and minimize blood loss during surgery.",
    symptoms: ["Lump in the neck", "Pulsating mass", "Swelling around the carotid vessel"],
    treatments: ["Pre-operative tumour embolisation", "Embolisation first → tumour surgery afterwards"],
  },
  {
    slug: "juvenile-angiofibroma",
    name: "Juvenile angiofibroma",
    region: "neck",
    intervention: "Pre-operative embolisation",
    intro:
      "A highly vascular tumour occurring in the nasopharynx of young males. Pre-operative embolisation reduces blood supply to make surgical removal safer.",
    symptoms: ["Nasal obstruction", "Recurrent nosebleeds", "Vascular mass"],
    treatments: ["Pre-operative tumour embolisation"],
  },

  {
    slug: "thyroid-nodules",
    name: "Thyroid nodules & goitre",
    region: "neck",
    intervention: "Ablation or embolization",
    intro:
      "A benign nodule can press and disfigure without being cancer. Heat delivered through a needle shrinks it in place; blocking its artery shrinks a larger goitre. No scar, no thyroid hormone tablets for life.",
    symptoms: ["Neck swelling", "Pressure when swallowing", "Thyroid swelling", "Benign thyroid nodules", "Multinodular goitre", "Swelling due to thyroid conditions"],
    treatments: ["Radiofrequency / microwave thyroid ablation", "Thyroid artery embolization"],
  },


  // ── Abdomen ──────────────────────────────────────────────────────────────
  {
    slug: "visceral-aneurysm",
    name: "Visceral aneurysm",
    region: "abdomen",
    intervention: "Embolization & stenting",
    intro:
      "A bulge in the wall of an artery supplying organs in the abdomen (like the spleen, liver, or kidneys). Endovascular treatment can exclude the aneurysm from circulation without open surgery.",
    symptoms: ["Often silent", "Vague abdominal pain", "Pulsating sensation"],
    treatments: ["Coil embolization", "Flow-diverter stenting", "Covered stent exclusion"],
  },

  {
    slug: "hepatic-hemangioma",
    name: "Hepatic hemangioma",
    region: "abdomen",
    intervention: "Embolization",
    intro:
      "A benign swelling made up of blood vessels, not cancer. Targeted embolization with medicine through a small catheter can shrink the hemangioma without surgery.",
    symptoms: ["Abdominal pain", "Fullness", "Tumour made of blood vessels"],
    treatments: ["Injection / Embolization to shrink hemangioma"],
  },

  {
    slug: "angiomyolipoma",
    name: "Angiomyolipoma (AML)",
    region: "abdomen",
    intervention: "Embolization",
    intro:
      "A kidney tumour that is not cancerous but has a substantial blood-vessel component. Embolisation is performed to reduce the risk of bleeding or rupture.",
    symptoms: ["Flank pain", "Blood in urine", "Incidental kidney mass"],
    treatments: ["Embolization to reduce bleeding risk", "Pre-operative embolisation"],
  },
  {
    slug: "renal-cell-carcinoma",
    name: "Renal cell carcinoma",
    region: "abdomen",
    intervention: "Pre-operative embolisation",
    intro:
      "A vascular kidney cancer. Embolisation can be performed before surgery to reduce blood supply and facilitate safer tumour removal.",
    symptoms: ["Blood in urine", "Flank pain", "Weight loss"],
    treatments: ["Pre-operative tumour embolisation", "Tumour ablation"],
  },
  {
    slug: "gastrointestinal-bleeding",
    name: "Gastrointestinal bleeding",
    region: "abdomen",
    intervention: "Embolization",
    intro:
      "Acute bleeding within the digestive tract. Minimally invasive embolization can often identify and seal the bleeding source through the blood vessels.",
    symptoms: ["Vomiting blood", "Black or bloody stools", "Dizziness"],
    treatments: ["Diagnostic angiography", "Transcatheter embolization"],
  },


  // ── Chest ───────────────────────────────────────────────────────
  {
    slug: "hemoptysis",
    name: "Hemoptysis (Coughing up blood)",
    region: "chest",
    intervention: "Bronchial artery embolisation",
    intro:
      "Bleeding can arise from abnormal or damaged blood vessels in the lungs, often due to previous damage like tuberculosis. Bronchial artery embolisation blocks the responsible blood vessel.",
    symptoms: ["Coughing up blood", "Blood in the cough", "Lung damage history"],
    treatments: ["Bronchial artery embolisation"],
  },
  {
    slug: "aortic-dissection",
    name: "Aortic dissection",
    region: "chest",
    intervention: "Stent grafting",
    intro:
      "A tear in the inner layer of the aorta allows blood to flow between the layers of the wall, forcing them apart. Endovascular stent grafting can seal the tear and reinforce the wall.",
    symptoms: ["Sudden severe chest or back pain", "Tearing sensation"],
    treatments: ["Endovascular stent grafting", "TEVAR"],
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
    region: "kidneys",
    intervention: "Renal artery stenting",
    intro:
      "When blood pressure remains high despite three or more medications, narrowing of the kidney blood vessels is suspected. Stenting can keep the vessel open and help control pressure.",
    symptoms: ["High blood pressure needing 3+ medicines", "Declining kidney function", "Kidney blood-vessel problems"],
    treatments: ["Renal artery angioplasty", "Renal artery stenting"],
  },
  {
    slug: "dialysis-access-maintenance",
    name: "Dialysis access maintenance",
    region: "arms",
    intervention: "Fistuloplasty & stenting",
    intro:
      "Maintaining the flow in dialysis fistulas or grafts. Procedures like angioplasty (fistuloplasty) or stenting ensure reliable access for dialysis.",
    symptoms: ["Decreased thrill", "Difficult dialysis", "Arm swelling"],
    treatments: ["Fistuloplasty", "Stenting", "Thrombolysis"],
  },


  // ── Lower limbs ─────────────────────────────────────────────────────────
  {
    slug: "poor-blood-circulation",
    name: "Poor blood circulation (PAD)",
    region: "legs",
    intervention: "Angioplasty & stenting",
    intro:
      "Blocked or narrowed arteries reduce blood supply to the legs. Image-guided treatment restores flow to heal wounds and prevent gangrene.",
    symptoms: ["Blackening/gangrene of the leg", "Non-healing ulcer", "Diabetes-related foot problems", "Poor blood circulation", "Blocked arteries"],
    treatments: ["Angioplasty", "Stenting", "Below-knee revascularisation"],
  },
  {
    slug: "peripheral-avm",
    name: "Peripheral AVM",
    region: "arms",
    intervention: "Embolization",
    intro:
      "Vascular malformations that occur in extremities like arms or hands. Embolization closes the abnormal vessels without needing major surgery.",
    symptoms: ["Swelling", "Pulsating mass", "Vascular malformation"],
    treatments: ["Sclerotherapy", "Embolization"],
  },
  {
    slug: "genicular-artery-embolization",
    name: "Genicular artery embolization",
    region: "knee",
    intervention: "Embolization",
    intro:
      "A treatment for chronic knee pain due to osteoarthritis. Embolization reduces inflammation by targeting abnormal blood vessels around the joint.",
    symptoms: ["Chronic knee pain", "Knee-related vascular pain"],
    treatments: ["Genicular artery embolization (GAE)"],
  },


  // ── Veins ───────────────────────────────────────────────────────────────
  {
    slug: "varicose-veins",
    name: "Varicose veins & Venous ulcer",
    region: "veins",
    intervention: "Laser ablation",
    intro:
      "Failing vein valves cause blood to pool, leading to bulging veins and ulcers. Closing the vein allows the ulcer to shrink and heal.",
    symptoms: ["Bulging veins", "Leg swelling", "Venous ulcer", "Clots / blood clots", "Varicose vein + ulcer"],
    treatments: ["Endovenous laser ablation", "Ultrasound-guided ablation", "Ultrasound guidance element"],
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
  /** Detailed medical content */
  info: ProcedureInfo; // Made mandatory to match i18n structure
};

export const procedures: Procedure[] = [

  {
    slug: "angioplasty",
    name: "Angioplasty & stenting",
    oneLiner: "Reopening a narrowed artery from the inside.",
    storyboard: "angioplasty",
    featured: true,
    beats: [
      "Show the narrowed artery with plaque buildup.",
      "The guidewire crosses the narrowing — the hardest millimetres of the case.",
      "The balloon is introduced and expanded to open the channel.",
      "Plaque is compressed as the balloon opens the artery.",
      "The stent is deployed and holds the artery open.",
      "Blood flow is fully restored.",
    ],
    info: {
      symptoms: [
        "Pain or cramping in legs when walking (claudication)",
        "Coldness in the lower leg or foot",
        "Sores on toes, feet or legs that won't heal",
        "Change in the color of legs",
        "Hair loss or slower hair growth on feet and legs",
      ],
      causes: [
        "Atherosclerosis (buildup of fats, cholesterol and other substances)",
        "Blood clots",
        "Diabetes",
        "High blood pressure",
        "Smoking",
      ],
      diagnosis: [
        "Ankle-brachial index (ABI)",
        "Doppler ultrasound",
        "CT angiography",
        "Catheter angiography",
      ],
      treatment: [
        "A small puncture is made in the groin or wrist.",
        "A thin wire is passed across the narrowing.",
        "A balloon is inflated to open the artery.",
        "A stent is placed to keep the artery open if needed.",
      ],
      recovery: [
        "Procedure: Day 0 - Artery opened; stenting if needed. Hospital admission.",
        "Day 1: Discharged and walking. Puncture site checked.",
        "1 Week: Light activity and routine lifestyle resume.",
        "1 Month: Follow-up imaging and normal life.",
      ],


    },
  },
  {
    slug: "thrombectomy",
    name: "Mechanical thrombectomy",
    oneLiner: "Removing a clot before brain tissue is lost.",
    storyboard: "thrombectomy",
    featured: true,
    beats: [
      "A clot has stopped blood flow inside a brain blood vessel. Downstream, brain tissue is on a clock.",
      "A stent retriever is opened inside the clot and positioned to capture it.",
      "The clot is captured within the retriever.",
      "A catheter removes the clot as the retriever is withdrawn.",
      "The clot leaves the body. Blood flow is restored.",
      "Brain function can recover where tissue remains viable.",
    ],

    info: {
      symptoms: [
        "Sudden numbness or weakness in the face, arm or leg",
        "Sudden confusion or trouble speaking",
        "Sudden trouble seeing in one or both eyes",
        "Sudden trouble walking or loss of balance",
        "Sudden severe headache",
      ],
      causes: [
        "Blood clot traveling from the heart (atrial fibrillation)",
        "Blood clot forming on a plaque in the brain artery",
        "Carotid artery disease",
      ],
      diagnosis: [
        "CT scan of the brain",
        "CT angiography (CTA)",
        "CT perfusion scan",
        "MRI scan",
      ],
      treatment: [
        "Rapid access to the brain vessel via groin or wrist.",
        "Navigating a catheter to the site of the clot.",
        "Using a stent retriever or suction to remove the clot.",
        "Immediate restoration of blood flow.",
      ],
      recovery: [
        "Procedure: Day 0 - Clot removed; monitored in ICU.",
        "Day 1-3: Discharged from ICU; brain reperfused.",
        "1 Month: Early rehabilitation and follow-up.",
        "3 Months: Long-term recovery and stroke prevention.",

      ],

    },
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
    info: {
      symptoms: [
        "Often no symptoms (found during other tests)",
        "Pulsating feeling near the navel",
        "Deep, drilling pain in the abdomen or side",
        "Back pain",
      ],
      causes: [
        "Atherosclerosis",
        "High blood pressure",
        "Genetic factors",
        "Smoking",
      ],
      diagnosis: [
        "Abdominal ultrasound",
        "CT scan of the abdomen",
        "MRI",
      ],
      treatment: [
        "Small punctures in the groin.",
        "A stent-graft is guided to the aneurysm site.",
        "The graft is expanded to create a new path for blood flow.",
        "The aneurysm sac is excluded from high-pressure flow.",
      ],
      recovery: [
        "Procedure: Day 0 - Stent-graft delivered inside vessel. Monitored hospital stay.",
        "Day 1: Discharged and light activity.",
        "1 Month: Follow-up imaging and normal life.",
        "3 Months: Long-term graft surveillance.",

      ],

    },
  },
  {
    slug: "varicose-vein-ablation",
    name: "Endovenous laser ablation",
    oneLiner: "Closing a failing vein from within.",
    storyboard: "laser",
    featured: true,
    beats: [
      "Faulty vein and abnormal flow lead to a venous ulcer.",
      "Under ultrasound guidance, a laser fibre is passed inside.",
      "Treatment is delivered as the fibre is withdrawn.",
      "The vein shrinks and closes, rerouting blood flow.",
      "Healthy circulation is restored to the leg.",
      "The ulcer gradually shrinks and heals after treatment.",
    ],
    info: {
      symptoms: [
        "Bulging, rope-like veins",
        "Aching or heaviness in the legs",
        "Swelling in the ankles and feet",
        "Skin discoloration or hardening",
        "Non-healing ulcers near the ankle",
      ],
      causes: [
        "Weak or damaged vein valves",
        "Prolonged standing",
        "Family history",
        "Pregnancy",
      ],
      diagnosis: [
        "Clinical examination",
        "Venous duplex ultrasound (standing)",
      ],
      treatment: [
        "Ultrasound-guided access to the vein.",
        "Laser or radiofrequency fiber insertion.",
        "Heat energy delivered to seal the vein.",
        "Rerouting blood to healthy deep veins.",
      ],
      recovery: [
        "Procedure: Day 0 - Discharged and walking within an hour.",
        "Day 1: Back to work / routine activity.",
        "1 Week: Normal lifestyle resume / walking distance improves.",
        "1 Month: Follow-up imaging and normal life / ulcers usually close.",
      ],

    },
  },


  {
    slug: "tace",
    name: "TACE — chemoembolization",
    oneLiner: "Delivering chemotherapy into a tumour's own artery.",
    storyboard: "tace",
    featured: true,
    beats: [
      "A liver tumour is fed by its own feeding artery.",
      "A microcatheter is navigated into that feeding branch.",
      "Drug-eluting beads are released directly into the tumour bed.",
      "The tumour blood supply is reduced by embolization.",
      "The tumour blush fades as its supply is cut off.",
    ],
    info: {
      symptoms: [
        "Abdominal pain",
        "Unexplained weight loss",
        "Loss of appetite",
        "Jaundice",
      ],
      causes: [
        "Primary liver cancer (HCC)",
        "Metastatic cancer from colon or breast",
        "Chronic hepatitis infection",
      ],
      diagnosis: [
        "Liver function tests",
        "Tumour markers (AFP)",
        "CT or MRI of the liver",
      ],
      treatment: [
        "Access via the groin or wrist artery.",
        "Selective navigation to the tumour artery.",
        "Infusion of chemotherapy-laden beads.",
        "Blocking the artery to trap the drug in the tumour.",
      ],
      recovery: [
        "Procedure: Day 0 - Selective navigation and treatment. Overnight admission for monitoring.",
        "Day 1-5: Discharged from hospital. Post-embolization syndrome managed.",
        "1 Month: Follow-up imaging (CT/MRI) and normal life resumes.",
        "3 Months: Decision on further treatment based on imaging surveillance.",
      ],

    },
  },
  {
    slug: "microwave-ablation",
    name: "Microwave ablation",
    oneLiner: "Destroying a tumour with heat, through a needle.",
    storyboard: "ablation",
    featured: true,
    beats: [
      "The tumour is located precisely on CT or ultrasound.",
      "A needle-antenna is guided through the skin into the tumour centre.",
      "Microwave energy raises the temperature inside the tumour ('burning').",
      "The treatment zone expands to cover the tumour and its margins.",
      "The tumour cells are destroyed ('charged') through a single puncture.",
    ],
    info: {
      symptoms: [
        "Small liver or kidney tumours often have no symptoms",
        "Found during routine surveillance scans",
      ],
      causes: [
        "Primary liver cancer",
        "Renal cell carcinoma",
        "Lung nodules",
      ],
      diagnosis: [
        "CT scan",
        "Ultrasound",
        "Biopsy (sometimes)",
      ],
      treatment: [
        "A needle-like antenna is guided into the tumour.",
        "Microwave energy creates precise heat.",
        "Cell death occurs within minutes.",
        "Targeted destruction sparing healthy tissue.",
      ],
      recovery: [
        "Procedure: Day 0 - Device enters tumour; heat destruction. Overnight stay or day-case.",
        "Day 1: Discharged and routine normal lifestyle resume.",
        "1 Month: Follow-up imaging and normal life.",
        "3 Months: Decision on further treatment based on imaging surveillance.",
      ],

    },
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
    info: {
      symptoms: [
        "Sudden, extremely severe headache ('thunderclap')",
        "Nausea and vomiting",
        "Stiff neck",
        "Blurred or double vision",
        "Sensitivity to light",
      ],
      causes: [
        "Weakness in the artery wall",
        "High blood pressure",
        "Smoking",
        "Genetic predisposition",
      ],
      diagnosis: [
        "CT Scan / CTA",
        "MRI / MRA",
        "Digital Subtraction Angiography (DSA)",
      ],
      treatment: [
        "Access via the femoral or radial artery.",
        "Microcatheter placement in the aneurysm sac.",
        "Packing the sac with platinum coils.",
        "Promoting blood to clot and seal the aneurysm.",
      ],
      recovery: [
        "Procedure: Day 0 - Sac packed with coils. 24-48 hours in ICU for observation.",
        "Day 1-3: Discharged from ICU. Regular neurological checks.",
        "1-2 Weeks: Gradual return to light activity and routine lifestyle resume.",
        "1 Month: Follow-up imaging and normal life.",
      ],

    },
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
    info: {
      symptoms: ["Neck swelling", "Thyroid lumps", "Pressure when swallowing"],
      causes: ["Benign nodules", "Goitre"],
      diagnosis: ["Ultrasound", "Biopsy"],
      treatment: ["Radiofrequency ablation", "Microwave ablation"],
      recovery: [
        "Procedure: Day 0 - Discharged same day. No scar.",
        "Day 1: Light activity and routine normal lifestyle resume.",
        "1 Month: Follow-up imaging and normal life.",
      ],

    },
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
    info: {
      symptoms: ["Chronic knee pain", "Pain not relieved by medicines"],
      causes: ["Osteoarthritis", "Inflammation"],
      diagnosis: ["X-ray / MRI", "Clinical exam"],
      treatment: ["Genicular artery embolization"],
      recovery: ["Procedure: Day 0", "Day 1: Routine activity", "1 Month: Pain relief onset"],
    },
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
    info: {
      symptoms: ["Decreased flow for dialysis", "High venous pressures"],
      causes: ["Stenosis", "Clot"],
      diagnosis: ["Physical exam (thrill)", "Ultrasound"],
      treatment: ["Angioplasty", "Stenting"],
      recovery: [
        "Procedure: Day 0 - High-pressure balloon inflation. Light activity same day.",
        "Day 1: Discharged and back to work. Immediate use for dialysis often possible.",
        "1 Week: Routine normal lifestyle resume.",
      ],

    },
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
    info: {
      symptoms: ["Ascites (fluid in abdomen)", "Variceal bleeding"],
      causes: ["Liver cirrhosis", "Portal hypertension"],
      diagnosis: ["Ultrasound", "CT", "Endoscopy"],
      treatment: ["Transjugular Intrahepatic Portosystemic Shunt"],
      recovery: [
        "Procedure: Day 0 - Tract created; portal pressure falls. Hospital stay 2-3 days.",
        "Day 1: Monitoring for encephalopathy. Early walking encouraged.",
        "1 Month: Follow-up ultrasound and normal life.",
      ],

    },
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
    info: {
      symptoms: ["Frequent urination", "Weak stream", "Nocturia"],
      causes: ["Benign Prostatic Hyperplasia (BPH)"],
      diagnosis: ["PSA test", "Ultrasound", "Uroflowmetry"],
      treatment: ["Prostate artery embolization"],
      recovery: [
        "Procedure: Day 0 -Wrist or groin puncture; particles released. Same day or overnight stay.",
        "Day 1: Discharged and light activity.",
        "1 Week: Return to work / routine activity.",
        "1-3 Months: Symptoms improve; follow-up imaging and normal life.",
      ],

    },
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
    info: {
      symptoms: ["Heavy menstrual bleeding", "Pelvic pain", "Pressure"],
      causes: ["Uterine fibroids"],
      diagnosis: ["Ultrasound", "MRI"],
      treatment: ["Uterine fibroid embolization"],
      recovery: [
        "Procedure: Day 0 - Particles cut off fibroid supply. Overnight stay.",
        "Day 1: Discharged and light activity.",
        "1 Week: Recovery at home / routine activity.",
        "3 Months: Significant symptom relief; follow-up imaging and normal life.",
      ],

    },
  },
];


export const featuredProcedures = procedures.filter((p) => p.featured);

// ── Region → procedures & guide ────────────────────────────────────────────

/** Procedures offered per anatomical region, shown alongside conditions on the map. */
export const regionProcedures: Record<Region, string[]> = {
  brain: ["Mechanical thrombectomy", "Aneurysm coiling", "Flow diversion", "AVM embolization"],
  neck: ["Carotid stenting", "Angioplasty with protection", "Radiofrequency / microwave ablation", "Thyroid artery embolization"],
  chest: ["EVAR / TEVAR", "Bronchial artery embolization", "Aortic stent grafting"],
  abdomen: ["Visceral aneurysm embolization", "Liver tumour TACE/ablation", "Renal artery stenting", "Gastrointestinal bleeding treatment"],
  liver: ["TACE", "Microwave ablation", "TIPS", "Portal vein embolization"],
  kidneys: ["Renal artery angioplasty", "Renal tumour ablation", "Renal embolization"],
  arms: ["Fistuloplasty", "Declotting", "Central vein recanalisation"],
  pelvis: ["Uterine fibroid embolization", "Prostate artery embolization", "Pelvic vein embolization"],
  knee: ["Genicular artery embolization"],
  legs: ["Angioplasty & stenting", "Atherectomy", "Below-knee revascularisation"],
  veins: ["Endovenous laser ablation", "Catheter-directed thrombolysis", "Venous stenting"],
};


/** Region → the pillar guide that best represents it, when one exists. */
export const regionGuide: Partial<Record<Region, string>> = {
  brain: "stroke",
  neck: "thyroid-nodules",
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
    text: "How a clot in a brain artery is captured and withdrawn through a single puncture. Real patient imaging included.",
    related: ["acute-ischemic-stroke"],
    procedure: "thrombectomy",
  },
  {
    id: "video-aneurysm-coiling",
    kind: "Video",
    title: "Cerebral aneurysm coiling, animated",
    text: "The aneurysm sac is packed from inside the vessel until flow no longer enters it. Real angiography videos available.",
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
