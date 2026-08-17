/**
 * Search-intent layer for procedure pages.
 *
 * Adds, for each procedure: the phrase patients search for, a plain-language
 * opening paragraph, what it is used for, and the questions people actually
 * ask. English and Malayalam. Existing procedure content is untouched.
 */

export type ProcedureSeo = {
  /** How patients describe the procedure when searching. */
  patientTerm: string;
  patientTermMl: string;
  /** Opening paragraph written for search intent, in plain language. */
  searchIntro: string;
  searchIntroMl: string;
  /** Conditions this procedure is used for — displayed and used for links. */
  usedFor: string[];
  usedForMl: string[];
  /** Condition slugs to cross-link to. */
  conditions: string[];
  faqs: { q: string; a: string; qMl: string; aMl: string }[];
};

export const procedureSeo: Record<string, ProcedureSeo> = {
  angioplasty: {
    patientTerm: "Balloon treatment to open a blocked blood vessel",
    patientTermMl: "ബ്ലോക്ക് തുറക്കാനുള്ള ബലൂൺ ചികിത്സ (Angioplasty)",
    searchIntro:
      "Angioplasty and stenting is the image-guided treatment for a blocked or narrowed artery. A balloon is passed inside the blood vessel through a pinhole opening and inflated to reopen it; a stent may be left behind to hold it open. It is used most often for poor blood circulation in the legs, diabetic foot wounds and narrowed kidney or neck arteries.",
    searchIntroMl:
      "ബ്ലോക്ക് ആയതോ ചുരുങ്ങിയതോ ആയ രക്തക്കുഴൽ തുറക്കാനുള്ള ഇമേജ്-ഗൈഡഡ് ചികിത്സയാണ് ആൻജിയോപ്ലാസ്റ്റി. പിൻഹോൾ ദ്വാരത്തിലൂടെ രക്തക്കുഴലിനുള്ളിൽ ബലൂൺ കടത്തി വികസിപ്പിക്കുന്നു; ആവശ്യമെങ്കിൽ സ്റ്റെന്റ് സ്ഥാപിക്കുന്നു. കാലിലെ രക്തയോട്ടക്കുറവ്, പ്രമേഹ കാൽ മുറിവ്, വൃക്ക-കഴുത്ത് ധമനികളിലെ ബ്ലോക്ക് എന്നിവയ്ക്ക് ഇത് ഉപയോഗിക്കുന്നു.",
    usedFor: [
      "Poor blood circulation in the legs",
      "Diabetic foot wounds that will not heal",
      "Critical limb ischemia and gangrene",
      "Narrowed kidney artery",
    ],
    usedForMl: [
      "കാലിലെ രക്തയോട്ടക്കുറവ്",
      "ഉണങ്ങാത്ത പ്രമേഹ കാൽ മുറിവ്",
      "ക്രിട്ടിക്കൽ ലിംബ് ഇസ്കീമിയ, ഗാൻഗ്രീൻ",
      "വൃക്കയിലെ ധമനി ചുരുങ്ങൽ",
    ],
    conditions: ["peripheral-artery-disease", "diabetic-foot", "critical-limb-ischemia", "renal-artery-stenosis"],
    faqs: [
      {
        q: "How long does recovery after angioplasty take?",
        a: "Most patients walk within hours and go home the same or next day. Heavy lifting is avoided for about a week, and medication to keep the artery open is continued as advised.",
        qMl: "ആൻജിയോപ്ലാസ്റ്റിക്ക് ശേഷം സുഖം പ്രാപിക്കാൻ എത്ര സമയം വേണം?",
        aMl: "മിക്ക രോഗികളും മണിക്കൂറുകൾക്കുള്ളിൽ നടക്കും, അന്നോ പിറ്റേന്നോ വീട്ടിൽ പോകാം. ഒരാഴ്ചത്തേക്ക് ഭാരമുള്ള ജോലി ഒഴിവാക്കണം.",
      },
      {
        q: "What are the risks of angioplasty?",
        a: "Bruising at the puncture site is common. Less commonly, the artery can re-narrow over time, or contrast can stress the kidneys — both are checked for and managed.",
        qMl: "ആൻജിയോപ്ലാസ്റ്റിയുടെ അപകടസാധ്യതകൾ എന്തൊക്കെ?",
        aMl: "സൂചി കുത്തിയ ഭാഗത്ത് നീലിപ്പ് സാധാരണമാണ്. അപൂർവമായി ധമനി വീണ്ടും ചുരുങ്ങാം, അല്ലെങ്കിൽ ഡൈ വൃക്കയെ ബാധിക്കാം.",
      },
    ],
  },
  thrombectomy: {
    patientTerm: "Clot removal from a blood vessel",
    patientTermMl: "രക്തക്കട്ട നീക്കം ചെയ്യൽ (Thrombectomy)",
    searchIntro:
      "Mechanical thrombectomy removes a blood clot from inside a blood vessel through a pinhole opening. In stroke it is the treatment for a blocked blood vessel in the brain; in the leg it is used for extensive deep vein thrombosis and acutely blocked arteries.",
    searchIntroMl:
      "രക്തക്കുഴലിനുള്ളിലെ കട്ട പിൻഹോൾ ദ്വാരത്തിലൂടെ നീക്കം ചെയ്യുന്ന ചികിത്സയാണ് മെക്കാനിക്കൽ ത്രോംബെക്ടമി. സ്ട്രോക്കിൽ മസ്തിഷ്ക രക്തക്കുഴലിലെ ബ്ലോക്കിനും, കാലിൽ വ്യാപകമായ ഡിവിടിക്കും ഇത് ഉപയോഗിക്കുന്നു.",
    usedFor: [
      "Acute ischemic stroke",
      "Deep vein thrombosis with extensive clot",
      "Sudden arterial blockage in a limb",
    ],
    usedForMl: [
      "അക്യൂട്ട് ഇസ്കീമിക് സ്ട്രോക്ക്",
      "വ്യാപകമായ ഡീപ് വെയിൻ ത്രോംബോസിസ്",
      "കൈകാലിലെ പെട്ടെന്നുള്ള ധമനി ബ്ലോക്ക്",
    ],
    conditions: ["acute-ischemic-stroke", "deep-vein-thrombosis"],
    faqs: [
      {
        q: "How soon must thrombectomy be done after a stroke?",
        a: "The earlier the better. Selected patients benefit up to 24 hours from symptom onset, but recovery is consistently better when treatment starts within the first few hours.",
        qMl: "സ്ട്രോക്കിന് ശേഷം എത്ര വേഗം ത്രോംബെക്ടമി ചെയ്യണം?",
        aMl: "എത്രയും വേഗം. തിരഞ്ഞെടുത്ത രോഗികളിൽ 24 മണിക്കൂർ വരെ ഗുണം ഉണ്ടാകാം, എങ്കിലും ആദ്യ മണിക്കൂറുകളിലെ ചികിത്സയാണ് ഏറ്റവും ഫലപ്രദം.",
      },
    ],
  },
  "aneurysm-repair": {
    patientTerm: "Stent-graft repair of an aneurysm",
    patientTermMl: "അന്യൂറിസം സ്റ്റെന്റ്-ഗ്രാഫ്റ്റ് ചികിത്സ",
    searchIntro:
      "Endovascular aneurysm repair treats a widened aorta by lining it from inside with a stent-graft, delivered through small groin punctures instead of a large abdominal or chest operation.",
    searchIntroMl:
      "വീർത്ത അയോർട്ടയെ ഉള്ളിൽ നിന്ന് സ്റ്റെന്റ്-ഗ്രാഫ്റ്റ് കൊണ്ട് ആവരണം ചെയ്യുന്ന ചികിത്സയാണിത്; വലിയ ശസ്ത്രക്രിയക്ക് പകരം തുടയിലെ ചെറിയ ദ്വാരങ്ങളിലൂടെയാണ് ചെയ്യുന്നത്.",
    usedFor: ["Abdominal or thoracic aortic aneurysm", "Aortic dissection", "Visceral artery aneurysm"],
    usedForMl: ["വയറിലെ അല്ലെങ്കിൽ നെഞ്ചിലെ അയോർട്ടിക് അന്യൂറിസം", "അയോർട്ടിക് ഡിസെക്ഷൻ", "വിസറൽ ധമനി അന്യൂറിസം"],
    conditions: ["aortic-aneurysm", "aortic-dissection", "visceral-aneurysm"],
    faqs: [
      {
        q: "Is aneurysm stent grafting safer than open surgery?",
        a: "For suitable anatomy, endovascular repair means less blood loss, a shorter hospital stay and faster recovery. It needs lifelong imaging follow-up, which open repair generally does not.",
        qMl: "അന്യൂറിസം സ്റ്റെന്റ് ചികിത്സ തുറന്ന ശസ്ത്രക്രിയയെക്കാൾ സുരക്ഷിതമാണോ?",
        aMl: "അനുയോജ്യമായ സാഹചര്യങ്ങളിൽ രക്തനഷ്ടം കുറവ്, ആശുപത്രിവാസം കുറവ്, വേഗത്തിലുള്ള സുഖം. എന്നാൽ ദീർഘകാല സ്കാൻ ഫോളോ-അപ്പ് ആവശ്യമാണ്.",
      },
    ],
  },
  "varicose-vein-ablation": {
    patientTerm: "Laser treatment for varicose veins",
    patientTermMl: "വരിക്കോസ് വെയിൻ ലേസർ ചികിത്സ",
    searchIntro:
      "Endovenous laser ablation is the day-care treatment for varicose veins. The faulty vein is closed from inside with heat through a needle puncture, so there is no stripping surgery and most patients walk out the same day.",
    searchIntroMl:
      "വരിക്കോസ് വെയിനിനുള്ള ഡേ-കെയർ ചികിത്സയാണ് എൻഡോവീനസ് ലേസർ അബ്ലേഷൻ. സൂചി ദ്വാരത്തിലൂടെ ചൂട് ഉപയോഗിച്ച് തകരാറുള്ള ഞരമ്പ് ഉള്ളിൽ നിന്ന് അടയ്ക്കുന്നു; അന്നുതന്നെ നടന്നു പോകാം.",
    usedFor: ["Varicose veins", "Venous leg ulcer", "Aching, heavy legs from vein reflux"],
    usedForMl: ["വരിക്കോസ് വെയിൻ", "ഉണങ്ങാത്ത കാൽ വ്രണം", "ഞരമ്പ് തകരാർ മൂലമുള്ള കാൽ ഭാരവും വേദനയും"],
    conditions: ["varicose-veins", "venous-ulcer"],
    faqs: [
      {
        q: "Do varicose veins come back after laser treatment?",
        a: "The treated vein stays closed. New veins can develop over years, which is why compression, weight and standing habits still matter after treatment.",
        qMl: "ലേസർ ചികിത്സയ്ക്ക് ശേഷം വരിക്കോസ് വെയിൻ തിരികെ വരുമോ?",
        aMl: "ചികിത്സിച്ച ഞരമ്പ് അടഞ്ഞു തന്നെ നിൽക്കും. വർഷങ്ങൾക്കുള്ളിൽ പുതിയ ഞരമ്പുകൾ ഉണ്ടാകാം; അതിനാൽ കമ്പ്രഷൻ സ്റ്റോക്കിംഗ്സും ശീലങ്ങളും പ്രധാനമാണ്.",
      },
    ],
  },
  tace: {
    patientTerm: "Chemotherapy delivered into a liver tumour",
    patientTermMl: "കരൾ ട്യൂമറിലേക്ക് നേരിട്ട് നൽകുന്ന കീമോതെറാപ്പി (TACE)",
    searchIntro:
      "Trans-arterial chemoembolisation (TACE) treats liver tumours through the tumour's own artery. Chemotherapy is delivered directly into the tumour and its blood supply is blocked, so healthy liver is largely spared.",
    searchIntroMl:
      "ട്യൂമറിന്റെ സ്വന്തം ധമനിയിലൂടെ കരൾ ട്യൂമർ ചികിത്സിക്കുന്ന രീതിയാണ് TACE. കീമോതെറാപ്പി നേരിട്ട് ട്യൂമറിൽ എത്തിക്കുകയും രക്തയോട്ടം അടയ്ക്കുകയും ചെയ്യുന്നു.",
    usedFor: ["Hepatocellular carcinoma", "Liver secondaries", "Tumour bridging before transplant"],
    usedForMl: ["ഹെപ്പറ്റോസെല്ലുലാർ കാർസിനോമ", "കരളിലേക്ക് പടർന്ന അർബുദം", "ട്രാൻസ്പ്ലാന്റിന് മുൻപുള്ള ചികിത്സ"],
    conditions: ["hepatocellular-carcinoma", "liver-tumours"],
    faqs: [
      {
        q: "How many TACE sessions are needed?",
        a: "It depends on tumour size, number and response. Treatment is usually repeated at intervals guided by follow-up scans.",
        qMl: "എത്ര TACE സെഷനുകൾ വേണ്ടിവരും?",
        aMl: "ട്യൂമറിന്റെ വലുപ്പം, എണ്ണം, പ്രതികരണം എന്നിവയെ ആശ്രയിച്ചിരിക്കും. ഫോളോ-അപ്പ് സ്കാൻ അനുസരിച്ച് ആവർത്തിക്കാറുണ്ട്.",
      },
    ],
  },
  "microwave-ablation": {
    patientTerm: "Burning a tumour away with a needle",
    patientTermMl: "സൂചിയിലൂടെ ട്യൂമർ നശിപ്പിക്കൽ (Microwave Ablation)",
    searchIntro:
      "Microwave ablation destroys a tumour in place. A fine needle is placed into it under CT or ultrasound guidance and controlled heat kills the tumour cells, with no cut and a short hospital stay.",
    searchIntroMl:
      "ട്യൂമർ അതിരിക്കുന്നിടത്ത് വച്ചുതന്നെ നശിപ്പിക്കുന്ന ചികിത്സയാണ് മൈക്രോവേവ് അബ്ലേഷൻ. സിടി/അൾട്രാസൗണ്ട് സഹായത്തോടെ നേർത്ത സൂചി കടത്തി ചൂട് നൽകുന്നു.",
    usedFor: ["Small liver tumours", "Kidney tumours", "Lung nodules in selected patients"],
    usedForMl: ["ചെറിയ കരൾ ട്യൂമറുകൾ", "വൃക്ക ട്യൂമറുകൾ", "തിരഞ്ഞെടുത്ത ശ്വാസകോശ മുഴകൾ"],
    conditions: ["hepatocellular-carcinoma", "renal-tumour", "liver-tumours"],
    faqs: [
      {
        q: "Is tumour ablation painful?",
        a: "It is done under sedation or general anaesthesia. Afterwards there may be a dull ache and low-grade fever for a few days, which settles with simple medication.",
        qMl: "ട്യൂമർ അബ്ലേഷൻ വേദനാജനകമാണോ?",
        aMl: "സെഡേഷനിലോ ജനറൽ അനസ്തേഷ്യയിലോ ആണ് ചെയ്യുന്നത്. ശേഷം കുറച്ചു ദിവസം നേരിയ വേദനയും പനിയും ഉണ്ടാകാം.",
      },
    ],
  },
  "aneurysm-coiling": {
    patientTerm: "Coiling of a brain aneurysm",
    patientTermMl: "ബ്രെയിൻ അന്യൂറിസം കോയിലിംഗ്",
    searchIntro:
      "Endovascular coiling seals a brain aneurysm from inside the blood vessel. Soft platinum coils are packed into the aneurysm through a micro-catheter, so blood no longer enters the weak pouch — without opening the skull.",
    searchIntroMl:
      "രക്തക്കുഴലിനുള്ളിൽ നിന്ന് ബ്രെയിൻ അന്യൂറിസം അടയ്ക്കുന്ന ചികിത്സയാണ് കോയിലിംഗ്. മൈക്രോ കത്തീറ്റർ വഴി പ്ലാറ്റിനം കോയിലുകൾ നിറയ്ക്കുന്നു; തലയോട്ടി തുറക്കേണ്ടതില്ല.",
    usedFor: ["Ruptured and unruptured brain aneurysm", "Brain AVM and dural fistula", "Carotid cavernous fistula"],
    usedForMl: ["പൊട്ടിയതും പൊട്ടാത്തതുമായ ബ്രെയിൻ അന്യൂറിസം", "ബ്രെയിൻ AVM, ഡ്യൂറൽ ഫിസ്റ്റുല", "കരോട്ടിഡ് കാവർണസ് ഫിസ്റ്റുല"],
    conditions: ["cerebral-aneurysm", "brain-avm", "dural-avf", "carotid-cavernous-fistula"],
    faqs: [
      {
        q: "Is coiling better than clipping for a brain aneurysm?",
        a: "Neither is better for every aneurysm. Coiling avoids opening the skull and generally means faster recovery; the choice depends on the aneurysm's size, shape, position and the patient's condition.",
        qMl: "ബ്രെയിൻ അന്യൂറിസത്തിന് കോയിലിംഗ് ആണോ ക്ലിപ്പിംഗ് ആണോ നല്ലത്?",
        aMl: "എല്ലാ അന്യൂറിസത്തിനും ഒരേ ഉത്തരമില്ല. കോയിലിംഗിൽ തലയോട്ടി തുറക്കേണ്ട; തിരഞ്ഞെടുപ്പ് അന്യൂറിസത്തിന്റെ വലുപ്പം, ആകൃതി, സ്ഥാനം എന്നിവയെ ആശ്രയിച്ചിരിക്കും.",
      },
    ],
  },
  "thyroid-ablation": {
    patientTerm: "Thyroid nodule treatment without surgery",
    patientTermMl: "ശസ്ത്രക്രിയ ഇല്ലാത്ത തൈറോയ്ഡ് നോഡ്യൂൾ ചികിത്സ",
    searchIntro:
      "Radiofrequency ablation shrinks a benign thyroid nodule through a needle placed under ultrasound guidance. There is no neck scar, the rest of the thyroid keeps working, and it is done as a day-care procedure.",
    searchIntroMl:
      "അൾട്രാസൗണ്ട് സഹായത്തോടെ സൂചി കടത്തി അപകടകരമല്ലാത്ത തൈറോയ്ഡ് നോഡ്യൂൾ ചുരുക്കുന്ന ചികിത്സയാണിത്. കഴുത്തിൽ മുറിവില്ല, ബാക്കി തൈറോയ്ഡ് സാധാരണ പോലെ പ്രവർത്തിക്കും.",
    usedFor: ["Benign thyroid nodules", "Visible neck swelling", "Nodules causing pressure symptoms"],
    usedForMl: ["അപകടകരമല്ലാത്ത തൈറോയ്ഡ് നോഡ്യൂളുകൾ", "കഴുത്തിലെ വീക്കം", "അമർച്ച ലക്ഷണങ്ങൾ ഉണ്ടാക്കുന്ന നോഡ്യൂളുകൾ"],
    conditions: ["thyroid-nodules"],
    faqs: [
      {
        q: "Will I need thyroid tablets after ablation?",
        a: "Usually not. Ablation targets the nodule and leaves normal thyroid tissue intact, so hormone function is generally preserved.",
        qMl: "അബ്ലേഷന് ശേഷം തൈറോയ്ഡ് ഗുളിക കഴിക്കേണ്ടി വരുമോ?",
        aMl: "സാധാരണയായി വേണ്ട. നോഡ്യൂൾ മാത്രമാണ് ചികിത്സിക്കുന്നത്, ബാക്കി ഗ്രന്ഥി അതേപടി നിലനിൽക്കും.",
      },
    ],
  },
  "genicular-artery-embolization": {
    patientTerm: "Knee pain treatment without replacement surgery",
    patientTermMl: "മുട്ട് മാറ്റിവയ്ക്കാതെയുള്ള കാൽമുട്ട് വേദന ചികിത്സ",
    searchIntro:
      "Genicular artery embolisation treats long-standing knee pain from osteoarthritis by reducing the abnormal blood vessels feeding the inflamed joint lining — through a pinhole, with no joint surgery.",
    searchIntroMl:
      "ഓസ്റ്റിയോ ആർത്രൈറ്റിസ് മൂലമുള്ള കാൽമുട്ട് വേദനയ്ക്ക്, വീക്കമുള്ള ഭാഗത്തേക്കുള്ള അസാധാരണ രക്തക്കുഴലുകൾ കുറച്ചുകൊണ്ടുള്ള പിൻഹോൾ ചികിത്സയാണിത്.",
    usedFor: ["Knee osteoarthritis pain", "Chronic knee pain not responding to medication"],
    usedForMl: ["കാൽമുട്ട് ഓസ്റ്റിയോ ആർത്രൈറ്റിസ് വേദന", "മരുന്നിന് വഴങ്ങാത്ത ദീർഘകാല കാൽമുട്ട് വേദന"],
    conditions: ["knee-osteoarthritis", "chronic-knee-pain"],
    faqs: [
      {
        q: "How long does relief last after knee embolisation?",
        a: "Most studies report meaningful pain relief for one to two years or more. It does not reverse cartilage loss, so joint replacement remains available later if needed.",
        qMl: "മുട്ട് എംബോളൈസേഷന് ശേഷം ആശ്വാസം എത്രകാലം നിലനിൽക്കും?",
        aMl: "ഒന്നു മുതൽ രണ്ട് വർഷമോ അതിലധികമോ വേദനാശ്വാസം പഠനങ്ങൾ കാണിക്കുന്നു. തേയ്മാനം മാറ്റുന്നില്ല, അതിനാൽ പിന്നീട് ശസ്ത്രക്രിയ ചെയ്യാം.",
      },
    ],
  },
  "dialysis-fistuloplasty": {
    patientTerm: "Fixing a blocked dialysis fistula",
    patientTermMl: "ബ്ലോക്ക് ആയ ഡയാലിസിസ് ഫിസ്റ്റുല ശരിയാക്കൽ",
    searchIntro:
      "Fistuloplasty reopens a narrowed or clotted dialysis fistula or graft from inside, using a balloon through a needle puncture, so dialysis can continue on the same access.",
    searchIntroMl:
      "ചുരുങ്ങിയതോ കട്ടപിടിച്ചതോ ആയ ഡയാലിസിസ് ഫിസ്റ്റുല സൂചി ദ്വാരത്തിലൂടെ ബലൂൺ ഉപയോഗിച്ച് ഉള്ളിൽ നിന്ന് തുറക്കുന്നു; അതേ ആക്സസിൽ ഡയാലിസിസ് തുടരാം.",
    usedFor: ["Poor flow in a dialysis fistula", "Clotted fistula or graft", "Central vein stenosis"],
    usedForMl: ["ഡയാലിസിസ് ഫിസ്റ്റുലയിലെ ഒഴുക്ക് കുറവ്", "കട്ടപിടിച്ച ഫിസ്റ്റുല", "സെൻട്രൽ വെയിൻ ചുരുങ്ങൽ"],
    conditions: ["dialysis-access-failure", "central-vein-stenosis"],
    faqs: [
      {
        q: "Can dialysis be done the same day as fistuloplasty?",
        a: "Often yes — once flow is restored the access can usually be used, following the nephrology team's advice on timing.",
        qMl: "ഫിസ്റ്റുലോപ്ലാസ്റ്റി ചെയ്ത അതേ ദിവസം ഡയാലിസിസ് ചെയ്യാമോ?",
        aMl: "പലപ്പോഴും ചെയ്യാം — ഒഴുക്ക് പുനഃസ്ഥാപിച്ചാൽ, നെഫ്രോളജി ടീമിന്റെ നിർദേശപ്രകാരം ആക്സസ് ഉപയോഗിക്കാം.",
      },
    ],
  },
  tips: {
    patientTerm: "Shunt for liver pressure and variceal bleeding",
    patientTermMl: "കരൾ സമ്മർദ്ദത്തിനും രക്തസ്രാവത്തിനുമുള്ള ഷണ്ട് (TIPS)",
    searchIntro:
      "TIPS creates a new channel inside the liver to relieve portal hypertension. It is used for repeated variceal bleeding and fluid in the abdomen that does not respond to medication, and is performed through a neck vein.",
    searchIntroMl:
      "കരളിനുള്ളിൽ പുതിയ ചാൽ സൃഷ്ടിച്ച് പോർട്ടൽ ഹൈപ്പർടെൻഷൻ കുറയ്ക്കുന്ന ചികിത്സയാണ് TIPS. ആവർത്തിച്ചുള്ള രക്തസ്രാവത്തിനും വയറ്റിൽ വെള്ളം കെട്ടുന്നതിനും ഉപയോഗിക്കുന്നു; കഴുത്തിലെ ഞരമ്പിലൂടെയാണ് ചെയ്യുന്നത്.",
    usedFor: ["Portal hypertension", "Recurrent variceal bleeding", "Refractory ascites"],
    usedForMl: ["പോർട്ടൽ ഹൈപ്പർടെൻഷൻ", "ആവർത്തിച്ചുള്ള വെരിസിയൽ രക്തസ്രാവം", "മരുന്നിന് വഴങ്ങാത്ത അസൈറ്റിസ്"],
    conditions: ["portal-hypertension", "variceal-bleeding"],
    faqs: [
      {
        q: "What are the side effects of TIPS?",
        a: "The main one is confusion from hepatic encephalopathy, which is watched for and usually manageable with medication and shunt adjustment.",
        qMl: "TIPS-ന്റെ പാർശ്വഫലങ്ങൾ എന്തൊക്കെ?",
        aMl: "പ്രധാനമായും ഹെപ്പാറ്റിക് എൻസെഫലോപ്പതി മൂലമുള്ള ആശയക്കുഴപ്പം; ഇത് മരുന്നുകൊണ്ടും ഷണ്ട് ക്രമീകരണംകൊണ്ടും നിയന്ത്രിക്കാം.",
      },
    ],
  },
  "prostate-artery-embolization": {
    patientTerm: "Prostate treatment without surgery",
    patientTermMl: "ശസ്ത്രക്രിയ ഇല്ലാത്ത പ്രോസ്റ്റേറ്റ് ചികിത്സ",
    searchIntro:
      "Prostate artery embolisation treats an enlarged prostate by reducing its blood supply through a pinhole in the wrist or groin. Urinary flow improves over weeks, without an incision or an instrument passed through the urinary passage.",
    searchIntroMl:
      "വലുതായ പ്രോസ്റ്റേറ്റിലേക്കുള്ള രക്തയോട്ടം കുറച്ചുകൊണ്ടുള്ള പിൻഹോൾ ചികിത്സയാണിത്. ആഴ്ചകൾക്കുള്ളിൽ മൂത്രമൊഴിക്കൽ എളുപ്പമാകുന്നു; മുറിവോ മൂത്രനാളിയിലൂടെ ഉപകരണം കടത്തലോ വേണ്ട.",
    usedFor: ["Enlarged prostate (BPH)", "Weak urine flow and night-time waking", "Catheter dependence from BPH"],
    usedForMl: ["പ്രോസ്റ്റേറ്റ് വലുതാകൽ (BPH)", "മൂത്രത്തിന്റെ ഒഴുക്ക് കുറവ്, രാത്രിയിൽ ഉണരൽ", "BPH മൂലമുള്ള കത്തീറ്റർ ആശ്രിതത്വം"],
    conditions: ["enlarged-prostate"],
    faqs: [
      {
        q: "Does prostate embolisation affect sexual function?",
        a: "Unlike some surgical options, it carries a low risk of retrograde ejaculation and does not typically affect erectile function.",
        qMl: "പ്രോസ്റ്റേറ്റ് എംബോളൈസേഷൻ ലൈംഗിക പ്രവർത്തനത്തെ ബാധിക്കുമോ?",
        aMl: "ചില ശസ്ത്രക്രിയകളിൽ നിന്ന് വ്യത്യസ്തമായി, ഇതിൽ പാർശ്വഫല സാധ്യത കുറവാണ്.",
      },
    ],
  },
  "uterine-fibroid-embolization": {
    patientTerm: "Fibroid treatment without removing the uterus",
    patientTermMl: "ഗർഭപാത്രം നീക്കാതെയുള്ള ഫൈബ്രോയിഡ് ചികിത്സ",
    searchIntro:
      "Uterine fibroid embolisation treats fibroids by blocking their blood supply through a pinhole in the wrist or groin. Heavy bleeding and pressure symptoms settle over months and the uterus is preserved.",
    searchIntroMl:
      "ഫൈബ്രോയിഡിലേക്കുള്ള രക്തയോട്ടം അടച്ചുകൊണ്ടുള്ള പിൻഹോൾ ചികിത്സയാണിത്. അമിത രക്തസ്രാവവും അമർച്ചയും മാസങ്ങൾക്കുള്ളിൽ കുറയുന്നു; ഗർഭപാത്രം നിലനിർത്തുന്നു.",
    usedFor: ["Uterine fibroids", "Heavy menstrual bleeding from fibroids", "Adenomyosis in selected patients"],
    usedForMl: ["ഗർഭാശയ ഫൈബ്രോയിഡ്", "ഫൈബ്രോയിഡ് മൂലമുള്ള അമിത ആർത്തവ രക്തസ്രാവം", "തിരഞ്ഞെടുത്ത അഡിനോമയോസിസ് രോഗികൾ"],
    conditions: ["uterine-fibroids", "endometriosis-pelvic-congestion"],
    faqs: [
      {
        q: "Is fibroid embolisation better than hysterectomy?",
        a: "It treats symptoms while keeping the uterus, with a shorter recovery. Hysterectomy is definitive. The right choice depends on symptoms, fibroid pattern and personal priorities.",
        qMl: "ഫൈബ്രോയിഡ് എംബോളൈസേഷൻ ഹിസ്റ്ററെക്ടമിയെക്കാൾ നല്ലതാണോ?",
        aMl: "ഗർഭപാത്രം നിലനിർത്തി ലക്ഷണങ്ങൾ ചികിത്സിക്കുന്നു, സുഖം പ്രാപിക്കൽ വേഗത്തിലാണ്. ശരിയായ തിരഞ്ഞെടുപ്പ് ലക്ഷണങ്ങളെയും വ്യക്തിപരമായ മുൻഗണനകളെയും ആശ്രയിച്ചിരിക്കും.",
      },
    ],
  },
  'bronchial-artery-embolisation': {
    patientTerm: 'Treatment for coughing up blood',
    patientTermMl: 'രക്തം ചുമയ്ക്കുന്നതിനുള്ള ചികിത്സ (BAE)',
    searchIntro: 'Bronchial artery embolisation is a life-saving procedure to stop severe coughing up of blood (hemoptysis). In selected patients, bleeding comes from abnormal or damaged blood vessels in the lungs, which are blocked from within using embolic materials.',
    searchIntroMl: 'രക്തം ചുമച്ചു തുപ്പുന്ന അവസ്ഥയ്ക്കുള്ള (Hemoptysis) അടിയന്തര ചികിത്സയാണിത്. ശ്വാസകോശത്തിലെ തകരാറിലായ രക്തക്കുഴലുകൾ ഉള്ളിൽ നിന്ന് അടച്ചാണ് ഇത് ചെയ്യുന്നത്.',
    usedFor: ['Hemoptysis', 'Coughing up blood'],
    usedForMl: ['രക്തം ചുമയ്ക്കൽ', 'കഫത്തിൽ രക്തം കാണുക'],
    conditions: ['hemoptysis'],
    faqs: [
      {
        q: 'Is this a permanent cure for coughing up blood?',
        a: 'It is highly effective at stopping the immediate bleeding. The underlying lung condition (like bronchiectasis or TB) still needs medical management to prevent recurrence.',
        qMl: 'ഇതൊരു ശാശ്വത പരിഹാരമാണോ?',
        aMl: 'അടിയന്തര രക്തസ്രാവം നിർത്താൻ ഇത് വളരെ ഫലപ്രദമാണ്. എന്നാൽ അടിസ്ഥാന രോഗത്തിന് ചികിത്സ തുടരേണ്ടതുണ്ട്.',
      },
    ],
  },
  'pulmonary-avm-embolisation': {
    patientTerm: 'Treatment for abnormal lung blood vessels',
    patientTermMl: 'ശ്വാസകോശത്തിലെ രക്തക്കുഴൽ വൈകല്യത്തിനുള്ള ചികിത്സ',
    searchIntro: "Pulmonary AVM embolisation closes abnormal connections between arteries and veins in the lungs. This prevents complications like strokes or brain abscesses that can occur when blood bypasses the lung's filtering mechanism.",
    searchIntroMl: 'ശ്വാസകോശത്തിലെ ധമനികളും സിരകളും തമ്മിലുള്ള അസ്വാഭാവികമായ ബന്ധം (AVM) അടയ്ക്കുന്ന ചികിത്സയാണിത്.',
    usedFor: ['Pulmonary AVM'],
    usedForMl: ['ശ്വാസകോശത്തിലെ രക്തക്കുഴൽ തകരാർ'],
    conditions: ['pulmonary-avm'],
    faqs: [],
  },
  'renal-artery-stenting': {
    patientTerm: 'Stenting for kidney blood vessel narrowing',
    patientTermMl: 'വൃക്കയിലെ രക്തക്കുഴൽ തടസ്സത്തിനുള്ള സ്റ്റെന്റിംഗ്',
    searchIntro: 'When high blood pressure remains difficult to control despite several medicines, narrowing of the renal artery may be a cause. Stenting restores blood flow to the kidney and may help in blood pressure management in selected cases.',
    searchIntroMl: 'മരുന്നുകൾ കഴിച്ചിട്ടും രക്തസമ്മർദ്ദം കുറയാത്ത സാഹചര്യത്തിൽ വൃക്കയിലെ ധമനികളിലെ തടസ്സം ഒരു കാരണമായേക്കാം. സ്റ്റെന്റിംഗ് വഴി രക്തയോട്ടം പുനഃസ്ഥാപിക്കുന്നു.',
    usedFor: ['Renal artery stenosis', 'Resistant hypertension'],
    usedForMl: ['വൃക്കയിലെ ധമനി തടസ്സം', 'നിയന്ത്രിക്കാനാവാത്ത രക്തസമ്മർദ്ദം'],
    conditions: ['renal-artery-stenosis'],
    faqs: [],
  },
};

export function procedureSeoFor(slug: string): ProcedureSeo | undefined {
  return procedureSeo[slug];
}
