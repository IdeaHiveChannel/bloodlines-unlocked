/**
 * Additive SEO / AEO layer for the 14 disease pillars.
 *
 * Nothing here replaces pillar content in src/lib/pillars/. It adds:
 *  - a "how image-guided treatment may help" block with links to procedures
 *  - natural-language FAQs phrased the way patients ask them in search
 *    and in voice assistants, in English and Malayalam.
 */

export type SearchFaq = { q: string; a: string; qMl: string; aMl: string };

export type PillarSeo = {
  /** Short answer paragraph — used for the AEO answer block and meta text. */
  answer: string;
  answerMl: string;
  /** How image-guided treatment may help, plus the procedures involved. */
  imageGuided: string;
  imageGuidedMl: string;
  procedures: string[];
  searchFaqs: SearchFaq[];
};

const treatedBy = (procs: string[]) => procs;

export const pillarSeo: Record<string, PillarSeo> = {
  stroke: {
    answer:
      "A stroke caused by a blocked blood vessel in the brain can be treated by mechanical thrombectomy — the clot is pulled out through a pinhole in an artery, without opening the skull. Treatment is time-critical and works best within hours of symptoms starting.",
    answerMl:
      "മസ്തിഷ്കത്തിലെ രക്തക്കുഴലിൽ ബ്ലോക്ക് വന്നുണ്ടാകുന്ന സ്ട്രോക്കിന്, തലയോട്ടി തുറക്കാതെ, ധമനിയിലൂടെ കത്തീറ്റർ കടത്തി രക്തക്കട്ട നീക്കം ചെയ്യുന്ന മെക്കാനിക്കൽ ത്രോംബെക്ടമി ചെയ്യാം. ലക്ഷണങ്ങൾ തുടങ്ങി ഏതാനും മണിക്കൂറിനുള്ളിൽ ചികിത്സ കിട്ടുന്നതാണ് ഏറ്റവും ഫലപ്രദം.",
    imageGuided:
      "Under live X-ray guidance, a catheter is passed from an artery in the wrist or groin up to the blocked blood vessel in the brain. The clot is captured and withdrawn, restoring blood flow to brain tissue that is still salvageable.",
    imageGuidedMl:
      "ലൈവ് എക്സ്-റേ മാർഗനിർദേശത്തിൽ, കൈത്തണ്ടയിലെയോ തുടയിലെയോ ധമനിയിലൂടെ കത്തീറ്റർ മസ്തിഷ്കത്തിലെ ബ്ലോക്കിലേക്ക് എത്തിക്കുന്നു. രക്തക്കട്ട പിടിച്ചെടുത്ത് പുറത്തെടുക്കുമ്പോൾ രക്തയോട്ടം പുനഃസ്ഥാപിക്കപ്പെടുന്നു.",
    procedures: treatedBy(["thrombectomy", "angioplasty"]),
    searchFaqs: [
      {
        q: "What is the treatment for a blocked blood vessel in the brain?",
        a: "When a large brain artery is blocked, mechanical thrombectomy removes the clot through a pinhole opening in an artery. Clot-dissolving medicine may be given as well, depending on how long ago symptoms began.",
        qMl: "മസ്തിഷ്കത്തിലെ രക്തക്കുഴലിലെ ബ്ലോക്കിന് എന്ത് ചികിത്സയാണുള്ളത്?",
        aMl: "വലിയ ധമനിയിൽ ബ്ലോക്ക് ഉണ്ടെങ്കിൽ, പിൻഹോൾ ദ്വാരത്തിലൂടെ കത്തീറ്റർ കടത്തി രക്തക്കട്ട നീക്കം ചെയ്യുന്ന ത്രോംബെക്ടമി ചെയ്യാം. സമയത്തെ ആശ്രയിച്ച് കട്ട അലിയിക്കുന്ന മരുന്നും നൽകാം.",
      },
      {
        q: "How soon should stroke treatment be started?",
        a: "As early as possible. Thrombectomy is generally considered within 24 hours of symptom onset in selected patients, but every hour of delay costs brain tissue. Sudden weakness, facial droop or slurred speech should be treated as an emergency.",
        qMl: "സ്ട്രോക്ക് ചികിത്സ എത്ര വേഗം തുടങ്ങണം?",
        aMl: "എത്രയും വേഗം. തിരഞ്ഞെടുത്ത രോഗികളിൽ ലക്ഷണങ്ങൾ തുടങ്ങി 24 മണിക്കൂറിനുള്ളിൽ ത്രോംബെക്ടമി പരിഗണിക്കാം; എന്നാൽ ഓരോ മണിക്കൂർ വൈകുമ്പോഴും മസ്തിഷ്ക കോശങ്ങൾ നഷ്ടപ്പെടും.",
      },
      {
        q: "Is brain surgery needed for a stroke?",
        a: "In most ischemic strokes, no. The treatment is performed from inside the blood vessel through a small puncture, so the skull is not opened.",
        qMl: "സ്ട്രോക്കിന് തലയോട്ടി തുറന്നുള്ള ശസ്ത്രക്രിയ വേണോ?",
        aMl: "മിക്ക ഇസ്കീമിക് സ്ട്രോക്കുകളിലും വേണ്ട. ചികിത്സ രക്തക്കുഴലിനുള്ളിലൂടെ, ചെറിയ ദ്വാരത്തിലൂടെയാണ് ചെയ്യുന്നത്.",
      },
    ],
  },
  "brain-aneurysm": {
    answer:
      "A brain aneurysm can often be treated from inside the blood vessel by endovascular coiling or flow diversion, sealing the aneurysm without opening the skull.",
    answerMl:
      "ബ്രെയിൻ അന്യൂറിസം പല സാഹചര്യങ്ങളിലും തലയോട്ടി തുറക്കാതെ, രക്തക്കുഴലിനുള്ളിലൂടെ കോയിലിംഗ് അല്ലെങ്കിൽ ഫ്ലോ ഡൈവേർഷൻ വഴി ചികിത്സിക്കാം.",
    imageGuided:
      "A micro-catheter is navigated into the aneurysm sac and soft platinum coils are packed inside it, or a flow-diverting stent is placed across its neck. Blood stops entering the weak pouch and it clots off safely.",
    imageGuidedMl:
      "മൈക്രോ കത്തീറ്റർ അന്യൂറിസത്തിനുള്ളിൽ എത്തിച്ച് പ്ലാറ്റിനം കോയിലുകൾ നിറയ്ക്കുകയോ, കഴുത്തിന് കുറുകെ ഫ്ലോ ഡൈവേർട്ടർ സ്റ്റെന്റ് സ്ഥാപിക്കുകയോ ചെയ്യുന്നു.",
    procedures: treatedBy(["aneurysm-coiling", "aneurysm-repair"]),
    searchFaqs: [
      {
        q: "Can a brain aneurysm be treated without open surgery?",
        a: "Yes. Most aneurysms suitable for treatment can be coiled or flow-diverted from inside the blood vessel through a pinhole in the wrist or groin artery.",
        qMl: "ബ്രെയിൻ അന്യൂറിസം ശസ്ത്രക്രിയ കൂടാതെ ചികിത്സിക്കാമോ?",
        aMl: "ചെയ്യാം. മിക്ക അന്യൂറിസങ്ങളും കൈത്തണ്ടയിലെയോ തുടയിലെയോ ധമനിയിലൂടെ കോയിലിംഗ് വഴി ചികിത്സിക്കാൻ കഴിയും.",
      },
      {
        q: "What are the warning signs of a brain aneurysm?",
        a: "Many are silent. A sudden, severe headache unlike any before, neck stiffness, double vision or a drooping eyelid needs urgent imaging.",
        qMl: "ബ്രെയിൻ അന്യൂറിസത്തിന്റെ മുന്നറിയിപ്പ് ലക്ഷണങ്ങൾ എന്തൊക്കെ?",
        aMl: "പലതും ലക്ഷണങ്ങളില്ലാത്തതാണ്. പെട്ടെന്നുള്ള കടുത്ത തലവേദന, കഴുത്ത് വേദന, ഇരട്ടക്കാഴ്ച, കണ്ണിമ താഴുന്നത് എന്നിവ ഉടൻ പരിശോധന ആവശ്യപ്പെടുന്നു.",
      },
    ],
  },
  "brain-avm-avf": {
    answer:
      "Brain AVMs and dural fistulas can be closed with embolisation — liquid embolic material delivered through a micro-catheter into the abnormal connection, sometimes combined with radiosurgery.",
    answerMl:
      "ബ്രെയിൻ AVM, ഡ്യൂറൽ ഫിസ്റ്റുല എന്നിവ മൈക്രോ കത്തീറ്റർ വഴി എംബോളിക് മെറ്റീരിയൽ നൽകി അടയ്ക്കാം; ചിലപ്പോൾ റേഡിയോസർജറിയും ചേർത്ത് ഉപയോഗിക്കുന്നു.",
    imageGuided:
      "The feeding arteries are mapped on angiography, and a micro-catheter is advanced into the nidus. Embolic material is injected to close the abnormal channels while protecting normal brain vessels.",
    imageGuidedMl:
      "ആൻജിയോഗ്രഫിയിലൂടെ രക്തം നൽകുന്ന ധമനികൾ കണ്ടെത്തി, മൈക്രോ കത്തീറ്റർ വഴി എംബോളിക് മെറ്റീരിയൽ നൽകി അസാധാരണ ചാലുകൾ അടയ്ക്കുന്നു.",
    procedures: treatedBy(["aneurysm-coiling"]),
    searchFaqs: [
      {
        q: "What is embolisation for a brain AVM?",
        a: "Embolisation closes the abnormal vessels of an AVM from within, using a micro-catheter passed up from an artery in the leg or wrist. It may be the whole treatment or a step before surgery or radiosurgery.",
        qMl: "ബ്രെയിൻ AVM എംബോളൈസേഷൻ എന്നാൽ എന്താണ്?",
        aMl: "കാലിലെയോ കൈയിലെയോ ധമനിയിലൂടെ മൈക്രോ കത്തീറ്റർ എത്തിച്ച് AVM-ലെ അസാധാരണ രക്തക്കുഴലുകൾ ഉള്ളിൽ നിന്ന് അടയ്ക്കുന്ന ചികിത്സയാണിത്.",
      },
    ],
  },
  "peripheral-arterial-disease": {
    answer:
      "Poor blood circulation in the legs from peripheral artery disease is treated by angioplasty and stenting — the narrowed artery is opened from inside through a pinhole, restoring blood flow to the leg and foot.",
    answerMl:
      "പെരിഫറൽ ആർട്ടറി ഡിസീസ് മൂലമുള്ള കാലിലെ രക്തയോട്ടക്കുറവ് ആൻജിയോപ്ലാസ്റ്റിയും സ്റ്റെന്റിംഗും വഴി ചികിത്സിക്കാം — ചുരുങ്ങിയ രക്തക്കുഴൽ പിൻഹോൾ ദ്വാരത്തിലൂടെ ഉള്ളിൽ നിന്ന് തുറക്കുന്നു.",
    imageGuided:
      "A wire is passed across the blockage under X-ray guidance, a balloon opens the artery, and a stent holds it open where needed. Inline flow to the foot is what allows rest pain to settle and wounds to heal.",
    imageGuidedMl:
      "എക്സ്-റേ മാർഗനിർദേശത്തിൽ ബ്ലോക്കിന് കുറുകെ വയർ കടത്തി, ബലൂൺ ഉപയോഗിച്ച് ധമനി വികസിപ്പിക്കുന്നു; ആവശ്യമെങ്കിൽ സ്റ്റെന്റ് സ്ഥാപിക്കുന്നു.",
    procedures: treatedBy(["angioplasty"]),
    searchFaqs: [
      {
        q: "What is the treatment for poor blood circulation in the legs?",
        a: "If leg arteries are narrowed or blocked, angioplasty with or without a stent reopens them through a pinhole puncture. Walking distance improves and non-healing wounds begin to close once blood flow returns.",
        qMl: "കാലിലെ രക്തയോട്ടക്കുറവിന് എന്താണ് ചികിത്സ?",
        aMl: "കാലിലെ ധമനികൾ ചുരുങ്ങുകയോ ബ്ലോക്ക് ആകുകയോ ചെയ്തിട്ടുണ്ടെങ്കിൽ, പിൻഹോൾ ദ്വാരത്തിലൂടെ ആൻജിയോപ്ലാസ്റ്റി ചെയ്ത് അവ തുറക്കാം.",
      },
      {
        q: "Can leg artery blockage be treated without surgery?",
        a: "In most cases, yes. Angioplasty is performed through a small puncture in the groin or arm, usually with same-day or next-day discharge.",
        qMl: "കാലിലെ രക്തക്കുഴൽ ബ്ലോക്ക് ശസ്ത്രക്രിയ കൂടാതെ ചികിത്സിക്കാമോ?",
        aMl: "മിക്കപ്പോഴും ചെയ്യാം. തുടയിലെയോ കൈയിലെയോ ചെറിയ ദ്വാരത്തിലൂടെയാണ് ആൻജിയോപ്ലാസ്റ്റി ചെയ്യുന്നത്.",
      },
    ],
  },
  "poor-blood-circulation": {
    answer:
      "Poor blood circulation in the legs usually reflects narrowed leg arteries. Once confirmed on Doppler or CT angiography, the narrowing can be opened by angioplasty through a pinhole opening.",
    answerMl:
      "കാലിലെ രക്തയോട്ടക്കുറവിന്റെ പ്രധാന കാരണം ധമനികൾ ചുരുങ്ങുന്നതാണ്. ഡോപ്ലർ അല്ലെങ്കിൽ സിടി ആൻജിയോഗ്രഫിയിലൂടെ സ്ഥിരീകരിച്ചാൽ, പിൻഹോൾ ദ്വാരത്തിലൂടെ ആൻജിയോപ്ലാസ്റ്റി ചെയ്യാം.",
    imageGuided:
      "Imaging first identifies where flow is lost. Treatment then targets that exact segment from within the vessel, rather than treating the leg as a whole.",
    imageGuidedMl:
      "ആദ്യം സ്കാനിലൂടെ രക്തയോട്ടം നഷ്ടപ്പെടുന്ന ഭാഗം കണ്ടെത്തുന്നു; തുടർന്ന് ആ ഭാഗം മാത്രം രക്തക്കുഴലിനുള്ളിൽ നിന്ന് ചികിത്സിക്കുന്നു.",
    procedures: treatedBy(["angioplasty"]),
    searchFaqs: [
      {
        q: "What causes poor blood circulation in the legs?",
        a: "Most often narrowing of the leg arteries by atherosclerosis, accelerated by diabetes, smoking, high blood pressure and high cholesterol. Vein disease causes a different pattern of swelling and skin change.",
        qMl: "കാലിലെ രക്തയോട്ടം കുറയാൻ കാരണം എന്താണ്?",
        aMl: "മിക്കപ്പോഴും കാലിലെ ധമനികൾ ചുരുങ്ങുന്നതാണ് കാരണം. പ്രമേഹം, പുകവലി, ഉയർന്ന രക്തസമ്മർദ്ദം, കൊളസ്ട്രോൾ എന്നിവ ഇത് വേഗത്തിലാക്കുന്നു.",
      },
    ],
  },
  "diabetic-foot": {
    answer:
      "A diabetic foot ulcer that will not heal often has reduced blood supply behind it. Restoring circulation by angioplasty gives the wound the blood flow it needs to close and can prevent amputation.",
    answerMl:
      "ഉണങ്ങാത്ത പ്രമേഹ കാൽ മുറിവിന്റെ പിന്നിൽ പലപ്പോഴും രക്തയോട്ടക്കുറവാണ്. ആൻജിയോപ്ലാസ്റ്റിയിലൂടെ രക്തയോട്ടം പുനഃസ്ഥാപിച്ചാൽ മുറിവ് ഉണങ്ങാൻ സാധ്യത കൂടും, ഛേദനം ഒഴിവാക്കാനും കഴിഞ്ഞേക്കാം.",
    imageGuided:
      "Angiography maps the vessels below the knee and into the foot. Balloons open the diseased segments so that at least one straight line of flow reaches the wound.",
    imageGuidedMl:
      "ആൻജിയോഗ്രഫിയിലൂടെ കാൽമുട്ടിന് താഴെയുള്ള രക്തക്കുഴലുകൾ പരിശോധിക്കുന്നു; ബലൂൺ ഉപയോഗിച്ച് ബ്ലോക്കുകൾ തുറന്ന് മുറിവിലേക്ക് രക്തയോട്ടം എത്തിക്കുന്നു.",
    procedures: treatedBy(["angioplasty"]),
    searchFaqs: [
      {
        q: "Why is my diabetic foot wound not healing?",
        a: "A wound cannot heal without blood supply. In diabetes, the small arteries below the knee are often narrowed, so the wound is starved even when dressings and antibiotics are correct.",
        qMl: "പ്രമേഹമുള്ള എന്റെ കാലിലെ മുറിവ് എന്തുകൊണ്ട് ഉണങ്ങുന്നില്ല?",
        aMl: "രക്തയോട്ടം ഇല്ലാതെ മുറിവ് ഉണങ്ങില്ല. പ്രമേഹത്തിൽ കാൽമുട്ടിന് താഴെയുള്ള ചെറിയ ധമനികൾ ചുരുങ്ങുന്നത് സാധാരണമാണ്.",
      },
      {
        q: "Can amputation be avoided in diabetic foot?",
        a: "Often, yes — if blood flow is restored early and infection is controlled. The decision depends on how much tissue is still viable.",
        qMl: "പ്രമേഹ കാലിൽ ഛേദനം ഒഴിവാക്കാനാകുമോ?",
        aMl: "പലപ്പോഴും കഴിയും — രക്തയോട്ടം നേരത്തെ പുനഃസ്ഥാപിക്കുകയും അണുബാധ നിയന്ത്രിക്കുകയും ചെയ്താൽ.",
      },
    ],
  },
  gangrene: {
    answer:
      "Gangrene of a toe or foot follows loss of blood supply. Reopening the blocked artery by angioplasty, alongside wound care, limits the tissue lost and may avoid a major amputation.",
    answerMl:
      "രക്തയോട്ടം നിലയ്ക്കുമ്പോഴാണ് കാൽവിരലിലോ പാദത്തിലോ ഗാൻഗ്രീൻ ഉണ്ടാകുന്നത്. ആൻജിയോപ്ലാസ്റ്റിയിലൂടെ ബ്ലോക്ക് തുറന്ന് നൽകുന്നത് നഷ്ടപ്പെടുന്ന ടിഷ്യൂ കുറയ്ക്കും.",
    imageGuided:
      "Blood flow is re-established to the foot first, so that any tissue removal that follows heals rather than extends.",
    imageGuidedMl:
      "ആദ്യം പാദത്തിലേക്കുള്ള രക്തയോട്ടം പുനഃസ്ഥാപിക്കുന്നു; അതിനുശേഷം ചെയ്യുന്ന ചികിത്സകൾ ഉണങ്ങാൻ സാധ്യത കൂടും.",
    procedures: treatedBy(["angioplasty"]),
    searchFaqs: [
      {
        q: "Is gangrene always treated by amputation?",
        a: "No. Dry gangrene limited to a toe may be managed after restoring circulation, with removal confined to dead tissue. Spreading infection is a separate emergency.",
        qMl: "ഗാൻഗ്രീനിന് എപ്പോഴും ഛേദനം വേണോ?",
        aMl: "വേണ്ട. രക്തയോട്ടം പുനഃസ്ഥാപിച്ചാൽ, നശിച്ച ഭാഗം മാത്രം നീക്കം ചെയ്താൽ മതിയാകാം. പടരുന്ന അണുബാധ വേറൊരു അടിയന്തിര സാഹചര്യമാണ്.",
      },
    ],
  },
  "varicose-veins": {
    answer:
      "Varicose veins are treated by endovenous laser or radiofrequency ablation — the faulty vein is sealed from inside through a needle puncture, with walking the same day and no vein stripping.",
    answerMl:
      "വരിക്കോസ് വെയിൻ ലേസർ അല്ലെങ്കിൽ റേഡിയോഫ്രീക്വൻസി അബ്ലേഷൻ വഴി ചികിത്സിക്കാം — തകരാറുള്ള ഞരമ്പ് സൂചി ദ്വാരത്തിലൂടെ ഉള്ളിൽ നിന്ന് അടയ്ക്കുന്നു; അന്നുതന്നെ നടക്കാം.",
    imageGuided:
      "Ultrasound locates the refluxing vein. A thin fibre is placed inside it and the vein is closed with heat, so blood reroutes through healthy deep veins.",
    imageGuidedMl:
      "അൾട്രാസൗണ്ട് ഉപയോഗിച്ച് തകരാറുള്ള ഞരമ്പ് കണ്ടെത്തി, നേർത്ത ഫൈബർ ഉള്ളിൽ കടത്തി ചൂട് ഉപയോഗിച്ച് അടയ്ക്കുന്നു.",
    procedures: treatedBy(["varicose-vein-ablation"]),
    searchFaqs: [
      {
        q: "What is the best treatment for varicose veins?",
        a: "For most people with truncal reflux, endovenous laser ablation is the current standard — a day-care treatment through a needle puncture, without the cuts of traditional stripping surgery.",
        qMl: "വരിക്കോസ് വെയിനിന് ഏറ്റവും നല്ല ചികിത്സ ഏതാണ്?",
        aMl: "മിക്ക രോഗികളിലും എൻഡോവീനസ് ലേസർ അബ്ലേഷനാണ് ഇന്നത്തെ നിലവാരം — സൂചി ദ്വാരത്തിലൂടെ, ഡേ-കെയർ ചികിത്സയായി ചെയ്യാം.",
      },
      {
        q: "Is varicose vein laser treatment painful?",
        a: "It is done under local anaesthesia with sedation if needed. Most patients describe pressure rather than pain, and walk out the same day.",
        qMl: "വരിക്കോസ് വെയിൻ ലേസർ ചികിത്സ വേദനാജനകമാണോ?",
        aMl: "ലോക്കൽ അനസ്തേഷ്യയിലാണ് ചെയ്യുന്നത്. മിക്കവരും വേദനയെക്കാൾ ഒരു അമർച്ചയാണ് അനുഭവിക്കുന്നത്; അന്നുതന്നെ നടന്നു പോകാം.",
      },
    ],
  },
  "deep-vein-thrombosis": {
    answer:
      "Deep vein thrombosis is treated with blood thinners, and in selected patients with extensive clot, by catheter-directed thrombolysis or clot removal to protect the vein valves.",
    answerMl:
      "ഡീപ് വെയിൻ ത്രോംബോസിസിന് രക്തം കട്ടപിടിക്കാതിരിക്കാനുള്ള മരുന്നുകളാണ് അടിസ്ഥാന ചികിത്സ; വ്യാപകമായ കട്ടയുള്ള ചില രോഗികളിൽ കത്തീറ്റർ വഴി കട്ട അലിയിക്കുകയോ നീക്കം ചെയ്യുകയോ ചെയ്യാം.",
    imageGuided:
      "A catheter is placed into the clotted vein under ultrasound and X-ray guidance so that clot-dissolving medicine acts directly where the clot is, or the clot is aspirated out.",
    imageGuidedMl:
      "അൾട്രാസൗണ്ട്, എക്സ്-റേ മാർഗനിർദേശത്തിൽ കട്ടയുള്ള ഞരമ്പിൽ കത്തീറ്റർ എത്തിച്ച് മരുന്ന് നേരിട്ട് നൽകുകയോ കട്ട വലിച്ചെടുക്കുകയോ ചെയ്യുന്നു.",
    procedures: treatedBy(["thrombectomy"]),
    searchFaqs: [
      {
        q: "What are the signs of a blood clot in the leg?",
        a: "Sudden swelling of one leg, calf pain or tightness, warmth and redness. Breathlessness or chest pain alongside these is an emergency.",
        qMl: "കാലിൽ രക്തം കട്ടപിടിച്ചതിന്റെ ലക്ഷണങ്ങൾ എന്തൊക്കെ?",
        aMl: "ഒരു കാൽ പെട്ടെന്ന് വീർക്കുക, കണങ്കാൽ വേദന, ചൂട്, ചുവപ്പ്. ഇവയോടൊപ്പം ശ്വാസംമുട്ടൽ ഉണ്ടെങ്കിൽ അടിയന്തിരമാണ്.",
      },
    ],
  },
  "liver-tumours": {
    answer:
      "Liver tumours can be treated through their own blood supply by TACE or TARE, or destroyed in place by microwave or radiofrequency ablation — both delivered through a pinhole, sparing healthy liver.",
    answerMl:
      "കരൾ ട്യൂമറുകൾ അവയുടെ സ്വന്തം രക്തക്കുഴലിലൂടെ TACE / TARE വഴി ചികിത്സിക്കാം, അല്ലെങ്കിൽ മൈക്രോവേവ് അബ്ലേഷൻ വഴി നശിപ്പിക്കാം — ആരോഗ്യമുള്ള കരൾ സംരക്ഷിച്ചുകൊണ്ട്.",
    imageGuided:
      "A catheter is steered into the artery feeding the tumour and chemotherapy or radioactive beads are delivered directly into it. Alternatively a needle is placed into the tumour under CT or ultrasound and heat destroys it.",
    imageGuidedMl:
      "ട്യൂമറിലേക്ക് രക്തം നൽകുന്ന ധമനിയിലേക്ക് കത്തീറ്റർ എത്തിച്ച് മരുന്ന് നേരിട്ട് നൽകുന്നു; അല്ലെങ്കിൽ സിടി/അൾട്രാസൗണ്ട് സഹായത്തോടെ സൂചി കടത്തി ചൂട് ഉപയോഗിച്ച് ട്യൂമർ നശിപ്പിക്കുന്നു.",
    procedures: treatedBy(["tace", "microwave-ablation", "tips"]),
    searchFaqs: [
      {
        q: "Can liver cancer be treated without surgery?",
        a: "In many cases, yes. TACE, TARE and thermal ablation are image-guided treatments delivered through a pinhole, used alone or alongside surgery and systemic therapy.",
        qMl: "കരൾ അർബുദം ശസ്ത്രക്രിയ കൂടാതെ ചികിത്സിക്കാമോ?",
        aMl: "പല സാഹചര്യങ്ങളിലും കഴിയും. TACE, TARE, അബ്ലേഷൻ എന്നിവ പിൻഹോൾ ദ്വാരത്തിലൂടെ ചെയ്യുന്ന ഇമേജ്-ഗൈഡഡ് ചികിത്സകളാണ്.",
      },
    ],
  },
  "uterine-fibroids": {
    answer:
      "Uterine fibroids can be treated by uterine fibroid embolisation — the fibroid's blood supply is blocked through a pinhole in the wrist or groin, so it shrinks while the uterus is preserved.",
    answerMl:
      "ഗർഭാശയ ഫൈബ്രോയിഡുകൾ യുട്ടറൈൻ ഫൈബ്രോയിഡ് എംബോളൈസേഷൻ വഴി ചികിത്സിക്കാം — ഗർഭപാത്രം നീക്കാതെ, ഫൈബ്രോയിഡിലേക്കുള്ള രക്തയോട്ടം അടച്ച് അത് ചുരുക്കുന്നു.",
    imageGuided:
      "Tiny particles are injected into the uterine arteries so the fibroids lose their blood supply and infarct. Bleeding and pressure symptoms settle over the following months.",
    imageGuidedMl:
      "ഗർഭാശയ ധമനികളിലേക്ക് ചെറിയ കണികകൾ നൽകി ഫൈബ്രോയിഡിലേക്കുള്ള രക്തയോട്ടം നിർത്തുന്നു; തുടർന്നുള്ള മാസങ്ങളിൽ ലക്ഷണങ്ങൾ കുറയുന്നു.",
    procedures: treatedBy(["uterine-fibroid-embolization"]),
    searchFaqs: [
      {
        q: "Can fibroids be treated without removing the uterus?",
        a: "Yes. Uterine fibroid embolisation treats fibroids while keeping the uterus in place, through a pinhole puncture rather than an abdominal operation.",
        qMl: "ഗർഭപാത്രം നീക്കാതെ ഫൈബ്രോയിഡ് ചികിത്സിക്കാമോ?",
        aMl: "കഴിയും. യുട്ടറൈൻ ഫൈബ്രോയിഡ് എംബോളൈസേഷനിൽ ഗർഭപാത്രം നിലനിർത്തിക്കൊണ്ടാണ് ചികിത്സ.",
      },
    ],
  },
  "enlarged-prostate": {
    answer:
      "An enlarged prostate can be treated by prostate artery embolisation — the prostate's blood supply is reduced through a pinhole, easing urinary symptoms without cutting or a catheter through the urethra.",
    answerMl:
      "വലുതായ പ്രോസ്റ്റേറ്റ് പ്രോസ്റ്റേറ്റ് ആർട്ടറി എംബോളൈസേഷൻ വഴി ചികിത്സിക്കാം — പിൻഹോൾ ദ്വാരത്തിലൂടെ പ്രോസ്റ്റേറ്റിലേക്കുള്ള രക്തയോട്ടം കുറച്ച് മൂത്ര ലക്ഷണങ്ങൾ ലഘൂകരിക്കുന്നു.",
    imageGuided:
      "Micro-particles are delivered into the prostatic arteries. The gland softens and shrinks over weeks, improving flow and reducing night-time waking.",
    imageGuidedMl:
      "പ്രോസ്റ്റേറ്റ് ധമനികളിലേക്ക് മൈക്രോ കണികകൾ നൽകുന്നു; ആഴ്ചകൾക്കുള്ളിൽ ഗ്രന്ഥി ചുരുങ്ങി മൂത്രമൊഴിക്കൽ എളുപ്പമാകുന്നു.",
    procedures: treatedBy(["prostate-artery-embolization"]),
    searchFaqs: [
      {
        q: "Is there a non-surgical treatment for an enlarged prostate?",
        a: "Yes. Prostate artery embolisation is performed through a pinhole in the wrist or groin artery, with no incision in the urinary passage and a low risk of sexual side effects.",
        qMl: "പ്രോസ്റ്റേറ്റ് വലുതാകുന്നതിന് ശസ്ത്രക്രിയ ഇല്ലാത്ത ചികിത്സയുണ്ടോ?",
        aMl: "ഉണ്ട്. പ്രോസ്റ്റേറ്റ് ആർട്ടറി എംബോളൈസേഷൻ കൈത്തണ്ടയിലെയോ തുടയിലെയോ ധമനിയിലൂടെയാണ് ചെയ്യുന്നത്.",
      },
    ],
  },
  "thyroid-nodules": {
    answer:
      "Benign thyroid nodules can be treated by radiofrequency ablation — a needle placed through the skin under ultrasound shrinks the nodule, avoiding a neck scar and lifelong thyroid tablets.",
    answerMl:
      "അപകടകരമല്ലാത്ത തൈറോയ്ഡ് നോഡ്യൂളുകൾ റേഡിയോഫ്രീക്വൻസി അബ്ലേഷൻ വഴി ചുരുക്കാം — കഴുത്തിൽ മുറിവോ ആജീവനാന്ത ഗുളികകളോ ഇല്ലാതെ.",
    imageGuided:
      "Ultrasound guides a fine needle into the nodule; controlled heat shrinks it over the following months while the rest of the gland keeps working.",
    imageGuidedMl:
      "അൾട്രാസൗണ്ട് സഹായത്തോടെ നേർത്ത സൂചി നോഡ്യൂളിൽ എത്തിച്ച്, നിയന്ത്രിത ചൂട് ഉപയോഗിച്ച് അത് ചുരുക്കുന്നു.",
    procedures: treatedBy(["thyroid-ablation"]),
    searchFaqs: [
      {
        q: "Can a thyroid nodule be treated without surgery?",
        a: "Benign nodules confirmed on biopsy can be treated with radiofrequency ablation as a day-care procedure, with no cut on the neck.",
        qMl: "തൈറോയ്ഡ് നോഡ്യൂൾ ശസ്ത്രക്രിയ കൂടാതെ ചികിത്സിക്കാമോ?",
        aMl: "ബയോപ്സിയിൽ അപകടകരമല്ലെന്ന് ഉറപ്പാക്കിയ നോഡ്യൂളുകൾ കഴുത്തിൽ മുറിവില്ലാതെ അബ്ലേഷൻ വഴി ചികിത്സിക്കാം.",
      },
    ],
  },
  "knee-osteoarthritis": {
    answer:
      "Long-standing knee pain from osteoarthritis can be eased by genicular artery embolisation, which reduces the abnormal blood vessels driving inflammation — an option for patients not ready for knee replacement.",
    answerMl:
      "ഓസ്റ്റിയോ ആർത്രൈറ്റിസ് മൂലമുള്ള കാൽമുട്ട് വേദന ജെനിക്കുലാർ ആർട്ടറി എംബോളൈസേഷൻ വഴി കുറയ്ക്കാം — മുട്ട് മാറ്റിവയ്ക്കൽ ശസ്ത്രക്രിയയ്ക്ക് തയ്യാറല്ലാത്തവർക്ക് ഒരു ഓപ്ഷൻ.",
    imageGuided:
      "Micro-particles are delivered into the small arteries feeding the inflamed joint lining, reducing pain over the weeks that follow.",
    imageGuidedMl:
      "വീക്കമുള്ള സന്ധി ആവരണത്തിലേക്ക് രക്തം നൽകുന്ന ചെറിയ ധമനികളിൽ മൈക്രോ കണികകൾ നൽകുന്നു; ആഴ്ചകൾക്കുള്ളിൽ വേദന കുറയുന്നു.",
    procedures: treatedBy(["genicular-artery-embolization"]),
    searchFaqs: [
      {
        q: "Is there a treatment for knee pain other than knee replacement?",
        a: "Genicular artery embolisation is a pinhole treatment for knee osteoarthritis pain in patients who have not responded to medication and physiotherapy but are not yet candidates for replacement.",
        qMl: "മുട്ട് മാറ്റിവയ്ക്കൽ അല്ലാതെ കാൽമുട്ട് വേദനയ്ക്ക് ചികിത്സയുണ്ടോ?",
        aMl: "മരുന്നും ഫിസിയോതെറാപ്പിയും ഫലിക്കാത്തവർക്ക് ജെനിക്കുലാർ ആർട്ടറി എംബോളൈസേഷൻ ഒരു പിൻഹോൾ ചികിത്സയാണ്.",
      },
    ],
  },
};

export function pillarSeoFor(slug: string): PillarSeo | undefined {
  return pillarSeo[slug];
}
