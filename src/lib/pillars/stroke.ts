import type { Pillar } from "./types";

export const stroke: Pillar = {
  slug: "stroke",
  name: "Stroke",
  title: "Stroke",
  heroQuote: "Suddenly can't speak?",
  heroLead:
    "A stroke is a blocked or bleeding artery in the brain. From the moment flow stops, roughly two million nerve cells are lost every minute. Reaching the clot early — through a single puncture in the wrist or groin — can return a person to the life they had that morning.",
  summary:
    "Sudden weakness, facial droop or loss of speech is a brain emergency. Mechanical thrombectomy removes the clot and restores blood flow to the brain.",

  symptoms: [
    "Sudden weakness or numbness of the face, arm or leg — usually on one side",
    "Facial droop, noticed when smiling",
    "Slurred, jumbled or absent speech",
    "Inability to understand what is being said",
    "Sudden loss or blurring of vision in one or both eyes",
    "Sudden severe headache with no known cause",
    "Loss of balance, dizziness or a fall without warning",
    "Confusion or unexplained drowsiness",
  ],
  causes: [
    "A clot forming on a plaque inside a brain artery (thrombotic stroke)",
    "A clot travelling from the heart, usually in atrial fibrillation (embolic stroke)",
    "A clot travelling from a narrowed carotid artery in the neck",
    "Narrowing of the small vessels deep in the brain (lacunar stroke)",
    "Rupture of a weakened vessel, causing bleeding into the brain (haemorrhagic stroke)",
    "Tearing of the wall of the carotid or vertebral artery (dissection), often after injury",
  ],
  riskFactors: [
    "High blood pressure — the single largest contributor",
    "Diabetes",
    "Atrial fibrillation or other irregular heart rhythm",
    "Smoking",
    "High cholesterol",
    "Previous stroke or transient ischemic attack (TIA)",
    "Carotid artery narrowing",
    "Age above 55, with risk rising each decade",
    "Obesity and physical inactivity",
    "Heavy alcohol use",
  ],
  warningSigns: [
    "Any of the sudden symptoms above — call for emergency transport immediately, do not wait to see if they pass",
    "Symptoms that resolve within minutes still matter: a TIA is a warning that a major stroke may follow within days",
    "Note the exact time symptoms began — treatment decisions depend on it",
    "Do not give food, water or aspirin until a scan has ruled out bleeding",
  ],
  diagnosis: [
    {
      step: "History",
      detail:
        "The time symptoms began is the most important piece of information in the entire assessment. It decides which treatments remain open.",
    },
    {
      step: "Clinical examination",
      detail:
        "A structured neurological examination scores speech, facial movement, limb power, sensation and vision, giving an objective measure of severity.",
    },
    {
      step: "Blood tests",
      detail:
        "Glucose, clotting profile, platelets and kidney function are checked — low sugar can mimic a stroke, and clotting values decide whether clot-dissolving drugs are safe.",
    },
    {
      step: "Imaging",
      detail:
        "A plain CT first, to separate a blocked artery from a bleed. Then vessel imaging to locate the blockage and perfusion imaging to see how much brain is still salvageable.",
    },
  ],
  tests: [
    {
      name: "Non-contrast CT",
      why: "Done within minutes of arrival. Its one job is to answer whether there is bleeding. Clot-dissolving treatment cannot begin until it is clear.",
    },
    {
      name: "CT angiography",
      why: "Contrast maps the arteries from the aortic arch to the top of the brain, showing exactly which vessel is blocked and how a catheter can reach it.",
    },
    {
      name: "CT perfusion",
      why: "Distinguishes brain that is already dead from brain that is starved but still alive. This is what justifies thrombectomy even many hours after onset.",
    },
    {
      name: "MRI (DWI)",
      why: "Diffusion-weighted MRI shows infarcted tissue within minutes of the event and finds small strokes that CT misses entirely.",
    },
    {
      name: "Carotid Doppler",
      why: "An ultrasound of the neck arteries, looking for the narrowing that sent the clot upward — it shapes what is done to prevent the next stroke.",
    },
    {
      name: "Echocardiogram and ECG",
      why: "Looks for atrial fibrillation or clot inside the heart, the commonest hidden source of an embolic stroke.",
    },
  ],
  treatments: [
    {
      name: "Intravenous thrombolysis",
      kind: "Medication",
      detail:
        "A clot-dissolving drug given through a vein, effective in a narrow window from symptom onset and only after bleeding is excluded.",
    },
    {
      name: "Mechanical thrombectomy",
      kind: "Endovascular",
      detail:
        "A catheter is navigated to the blocked artery and the clot is captured with a stent retriever and aspiration, then withdrawn. Flow returns immediately.",
    },
    {
      name: "Intra-arterial thrombolysis",
      kind: "Endovascular",
      detail:
        "Clot-dissolving drug delivered directly at the clot face through a microcatheter, used for distal vessels or residual clot after retrieval.",
    },
    {
      name: "Carotid stenting",
      kind: "Endovascular",
      detail:
        "When a tight carotid narrowing is the source, a stent holds the neck artery open to prevent the next event.",
    },
    {
      name: "Antiplatelets and anticoagulation",
      kind: "Medication",
      detail:
        "Long-term prevention. Antiplatelets for artery-to-artery stroke; anticoagulation where the heart is the source.",
    },
    {
      name: "Blood pressure, sugar and lipid control",
      kind: "Lifestyle",
      detail:
        "The measures that decide whether there is a second stroke. Unglamorous, and more powerful than any single procedure.",
    },
  ],
  approach: [
    "Stroke is treated as a clock, not a diagnosis. The first task is to know when the patient was last seen well.",
    "Imaging is read personally and immediately — the decision to take a patient to the angiography suite is not delegated to a report.",
    "Access is usually through the radial artery at the wrist or the femoral artery at the groin. Nothing is opened.",
    "Thrombectomy is performed under conscious sedation wherever possible, so the neurological examination can continue during the case.",
    "The cause is pursued after flow is restored — heart rhythm, carotids, clotting — because preventing the second stroke is half the work.",
  ],
  procedures: ["thrombectomy", "angioplasty"],
  recovery: [
    { when: "First hours", what: "Monitored in a stroke or intensive care unit. Blood pressure is kept in a narrow band while the brain reperfuses." },
    { when: "Day 1", what: "Repeat imaging confirms the territory is open and that no bleeding has occurred. Many patients are already speaking and moving." },
    { when: "Days 2 to 5", what: "Cause investigation completed. Swallowing assessed, early mobilisation and physiotherapy begin." },
    { when: "Week 1 to 2", what: "Discharge for most patients, on prevention medication, with a written rehabilitation plan." },
    { when: "Month 1 to 3", what: "The period of fastest neurological recovery. Speech and physical therapy carry more weight than anything else at this stage." },
    { when: "Month 6 to 12", what: "Recovery continues more slowly. Risk factor control is reviewed and imaging repeated if indicated." },
  ],
  prevention: [
    "Keep blood pressure consistently below target — measured at home, not only in clinic",
    "Treat atrial fibrillation with proper anticoagulation, not aspirin alone",
    "Stop smoking completely; there is no safe reduced amount",
    "Control diabetes and cholesterol to the numbers your physician sets",
    "Take prevention medication daily and without gaps, including when you feel well",
    "Have carotid narrowing assessed if you have had a TIA",
    "Thirty minutes of walking most days",
  ],
  faqs: [
    { q: "What is a stroke?", a: "An interruption of blood supply to part of the brain — either a blocked artery (ischemic) or a bleeding one (haemorrhagic). Brain tissue begins to die within minutes." },
    { q: "How do I recognise a stroke quickly?", a: "Face drooping, arm weakness, speech difficulty — and the time it started. Any one of these is enough to call for emergency help." },
    { q: "Is a stroke painful?", a: "An ischemic stroke is usually painless, which is why people wait. A sudden, severe headache more often suggests bleeding." },
    { q: "What is a mini-stroke?", a: "A transient ischemic attack: identical symptoms that resolve within minutes to hours. It carries a high risk of a full stroke in the following days and must be investigated urgently." },
    { q: "What is mechanical thrombectomy?", a: "A catheter is passed from the wrist or groin up to the blocked brain artery, the clot is gripped by a stent retriever and suction, and pulled out. The skull is never opened." },
    { q: "How long after symptoms can thrombectomy be done?", a: "Traditionally within six hours, but with perfusion imaging selected patients benefit up to twenty-four hours. Earlier is always better." },
    { q: "Is thrombectomy done under general anaesthesia?", a: "Often under conscious sedation so neurological function can be monitored during the procedure. General anaesthesia is used when the patient cannot cooperate." },
    { q: "How long does the procedure take?", a: "Typically thirty to ninety minutes from puncture to restored flow, depending on how difficult the vessel is to reach." },
    { q: "What are the risks of thrombectomy?", a: "Vessel injury, bleeding into the stroke area, clot fragments travelling to a new territory, and groin or wrist access complications. These are weighed against the certainty of damage if the artery stays blocked." },
    { q: "Will I recover completely?", a: "It depends on how much brain was already lost before flow was restored, which is why time matters more than anything else. Many patients treated early return to independence." },
    { q: "What is the difference between CT and MRI in stroke?", a: "CT is faster and rules out bleeding immediately. MRI shows the infarct itself in far more detail and detects small strokes CT cannot see." },
    { q: "Why is a perfusion scan done?", a: "It separates brain that is dead from brain that is starved but recoverable — the second is what treatment is trying to save." },
    { q: "Can a stroke happen again?", a: "Yes, and the risk is highest in the first year. Prevention treatment and risk factor control substantially reduce it." },
    { q: "Does high blood pressure cause stroke?", a: "It is the largest single risk factor for both types of stroke, and the most treatable." },
    { q: "Can young people have a stroke?", a: "Yes. In younger patients the cause is more often arterial dissection, a clotting disorder or a hole in the heart, so investigation differs." },
    { q: "Is aspirin enough to prevent a stroke?", a: "For some causes yes, but in atrial fibrillation aspirin is inadequate — anticoagulation is required." },
    { q: "How soon should rehabilitation start?", a: "Within days, once the patient is medically stable. Early mobilisation is associated with better outcomes." },
    { q: "Can speech return after a stroke?", a: "Frequently, especially in the first three to six months with structured speech therapy. Improvement can continue more slowly beyond a year." },
    { q: "Is stroke hereditary?", a: "Family history raises risk, largely through inherited blood pressure, diabetes and cholesterol patterns, all of which can be treated." },
    { q: "What should I do while waiting for the ambulance?", a: "Keep the person lying on their side, do not give food, water or medication, note the time symptoms began, and collect the medication list." },
    { q: "Does a stroke show on a normal CT immediately?", a: "Often not in the first hours. A normal CT does not rule out a stroke; vessel and perfusion imaging are required." },
    { q: "Can a stroke be treated at any hospital?", a: "Clot-dissolving drugs can be given widely, but thrombectomy needs a catheterisation suite and a trained interventionalist. Transfer to such a centre should not be delayed." },
  ],
  relatedConditions: ["carotid-artery-disease", "cerebral-aneurysm", "brain-avm", "dural-avf"],
  relatedSymptoms: ["Sudden weakness on one side", "Facial drooping", "Speech difficulty", "Sudden vision loss", "Loss of balance"],
};
