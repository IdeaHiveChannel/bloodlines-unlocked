import type { Locale } from "./i18n/index";

export type InfoSection = { heading: string; body: string; points?: string[] };
export type InfoPage = {
  slug: string;
  eyebrow: string;
  title: string;
  lead: string;
  sections: InfoSection[];
};

type Bilingual = { en: InfoPage; ml: InfoPage };

const howTreatmentWorks: Bilingual = {
  en: {
    slug: "how-treatment-works",
    eyebrow: "Patient information",
    title: "How image-guided treatment works",
    lead: "Interventional radiology treats disease from inside the body, using live imaging to guide thin tubes through blood vessels or through a small skin puncture. There is no large surgical incision, but it is still a medical procedure with preparation, risk and recovery.",
    sections: [
      {
        heading: "What happens first",
        body: "Your scans and reports are reviewed to confirm the diagnosis and to see whether an image-guided approach is technically possible for your anatomy. This assessment decides everything that follows.",
      },
      {
        heading: "How the doctor reaches the problem",
        body: "A small access point is made — usually in the groin, wrist or directly over the target under ultrasound. A fine catheter or needle is passed through that access point and steered to the exact site using X-ray, ultrasound or CT guidance.",
      },
      {
        heading: "What happens at the target",
        body: "Treatment is delivered only where it is needed. Depending on the condition, that may mean opening a narrowed artery, removing a clot, closing an abnormal vessel, or destroying a small tumour or nodule.",
      },
      {
        heading: "Anaesthesia and comfort",
        body: "Many procedures are done under local anaesthetic with sedation; some, particularly emergency brain procedures, need general anaesthesia. What is appropriate for you is decided with the anaesthetist beforehand.",
      },
      {
        heading: "Afterwards",
        body: "The access point is closed or held with pressure, and you are observed for a period that depends on the procedure. Recovery time varies with the procedure, the condition being treated and your general health.",
      },
      {
        heading: "Where this treatment fits",
        body: "Image-guided treatment is one option among several. For some patients medication or lifestyle change is the right answer, for others open surgery remains necessary, and sometimes another specialty should lead the care. Suitability is decided after clinical assessment, not from a website.",
      },
    ],
  },
  ml: {
    slug: "how-treatment-works",
    eyebrow: "രോഗികൾക്കുള്ള വിവരങ്ങൾ",
    title: "ഇമേജ്-ഗൈഡഡ് ചികിത്സ എങ്ങനെയാണ് നടക്കുന്നത്",
    lead: "ഇന്റർവെൻഷണൽ റേഡിയോളജിയിൽ ശരീരത്തിനുള്ളിൽ നിന്നാണ് ചികിത്സ നൽകുന്നത്. സ്കാൻ ചിത്രങ്ങൾ നോക്കിക്കൊണ്ട്, രക്തക്കുഴലിലൂടെയോ ചർമത്തിലെ ഒരു ചെറിയ ദ്വാരത്തിലൂടെയോ നേർത്ത ട്യൂബ് കടത്തിയാണ് രോഗമുള്ള ഭാഗത്ത് എത്തുന്നത്. വലിയ മുറിവ് വേണ്ട എന്നത് ശരിയാണ്; എങ്കിലും ഇതും ഒരു ചികിത്സാ നടപടിയാണ് — തയ്യാറെടുപ്പും സാധ്യതയുള്ള പ്രശ്നങ്ങളും വിശ്രമവും ഇതിനുമുണ്ട്.",
    sections: [
      {
        heading: "ആദ്യം എന്ത് നടക്കും",
        body: "നിങ്ങളുടെ സ്കാനുകളും റിപ്പോർട്ടുകളും ആദ്യം പരിശോധിക്കും. രോഗം ഏതാണെന്ന് ഉറപ്പിക്കാനും, നിങ്ങളുടെ രക്തക്കുഴലുകളുടെ ഘടന വെച്ച് ഈ രീതി സാധ്യമാണോ എന്ന് അറിയാനുമാണ് ഇത്. ബാക്കിയെല്ലാം ഇതിനെ ആശ്രയിച്ചാണ്.",
      },
      {
        heading: "രോഗമുള്ള ഭാഗത്ത് എങ്ങനെ എത്തുന്നു",
        body: "തുടയിലോ കൈത്തണ്ടയിലോ, അല്ലെങ്കിൽ ചികിത്സിക്കേണ്ട ഭാഗത്തിന് നേരെയോ ഒരു ചെറിയ ദ്വാരം ഉണ്ടാക്കും. അതിലൂടെ നേർത്ത ട്യൂബോ സൂചിയോ കടത്തി, എക്സ്-റേ, അൾട്രാസൗണ്ട്, CT എന്നിവയുടെ സഹായത്തോടെ കൃത്യമായ സ്ഥലത്ത് എത്തിക്കും.",
      },
      {
        heading: "ചികിത്സ എങ്ങനെയാണ് നൽകുന്നത്",
        body: "ആവശ്യമുള്ള ഭാഗത്ത് മാത്രമാണ് ചികിത്സ നൽകുന്നത്. രോഗം അനുസരിച്ച് അത് ചുരുങ്ങിയ രക്തക്കുഴൽ തുറക്കുന്നതാകാം, കട്ട നീക്കുന്നതാകാം, തകരാറുള്ള കുഴൽ അടയ്ക്കുന്നതാകാം, അല്ലെങ്കിൽ ചെറിയ മുഴ നശിപ്പിക്കുന്നതാകാം.",
      },
      {
        heading: "മയക്കും വേദനയും",
        body: "മിക്ക ചികിത്സകളും ഭാഗികമായ മരവിപ്പിക്കലിലും ചെറിയ മയക്കത്തിലുമാണ് ചെയ്യുന്നത്. തലച്ചോറിലെ അടിയന്തര ചികിത്സകൾ പോലുള്ളവയ്ക്ക് പൂർണ മയക്ക് (ജനറൽ അനസ്തീഷ്യ) വേണ്ടിവരാം. നിങ്ങൾക്ക് ഏതാണ് വേണ്ടത് എന്ന് അനസ്തീഷ്യ ഡോക്ടറുമായി ചേർന്ന് മുൻകൂട്ടി തീരുമാനിക്കും.",
      },
      {
        heading: "ചികിത്സയ്ക്ക് ശേഷം",
        body: "ദ്വാരം അടയ്ക്കുകയോ കുറച്ചു നേരം അമർത്തിപ്പിടിക്കുകയോ ചെയ്യും. ചികിത്സ അനുസരിച്ച് കുറച്ചു സമയം നിരീക്ഷണത്തിൽ ഉണ്ടാകും. സുഖം പ്രാപിക്കാൻ എടുക്കുന്ന സമയം ചികിത്സാരീതിയും രോഗാവസ്ഥയും ഓരോ ആളുടെയും ആരോഗ്യവും അനുസരിച്ച് മാറും.",
      },
      {
        heading: "ഈ ചികിത്സ എവിടെയാണ് ചേരുന്നത്",
        body: "ഇത് ലഭ്യമായ പല വഴികളിൽ ഒന്ന് മാത്രമാണ്. ചിലർക്ക് മരുന്നും ജീവിതരീതിയിലെ മാറ്റവുമാണ് ശരിയായ ഉത്തരം; മറ്റു ചിലർക്ക് ശസ്ത്രക്രിയ തന്നെ വേണ്ടിവരും; ചിലപ്പോൾ മറ്റൊരു വിഭാഗം ഡോക്ടറാണ് ചികിത്സിക്കേണ്ടത്. ഇത് നിങ്ങൾക്ക് അനുയോജ്യമാണോ എന്ന് പരിശോധനയ്ക്ക് ശേഷം മാത്രമേ പറയാൻ കഴിയൂ.",
      },
    ],
  },
};

const beforeConsultation: Bilingual = {
  en: {
    slug: "before-consultation",
    eyebrow: "Patient information",
    title: "Before your consultation",
    lead: "A consultation is more useful when the information is in front of the doctor. Bringing the right reports often saves a repeat visit and avoids repeating scans you have already had.",
    sections: [
      {
        heading: "What to bring",
        body: "Bring the actual images, not only the typed report, wherever possible.",
        points: [
          "CT, MRI, CT or MR angiography — films or the CD, plus the report",
          "Doppler ultrasound reports",
          "Any catheter angiogram images or report",
          "Discharge summaries from previous admissions",
          "Recent blood tests, including kidney function and sugar levels",
          "Biopsy or pathology reports where relevant",
          "A current list of your medicines, including blood thinners",
        ],
      },
      {
        heading: "What to write down beforehand",
        body: "When the problem started, how it has changed, what makes it better or worse, what treatment has already been advised, and by whom. A short written note is easier than remembering during the visit.",
      },
      {
        heading: "Questions worth asking",
        body: "It helps to arrive with your own questions.",
        points: [
          "What exactly is my diagnosis?",
          "What are all my treatment options, not just one?",
          "Is an image-guided procedure suitable in my case?",
          "What happens if I do nothing for now?",
          "What are the risks and the likely recovery?",
        ],
      },
      {
        heading: "Coming with someone",
        body: "Bring a family member if the decision is a significant one. Two people remember a consultation better than one.",
      },
    ],
  },
  ml: {
    slug: "before-consultation",
    eyebrow: "രോഗികൾക്കുള്ള വിവരങ്ങൾ",
    title: "കൺസൾട്ടേഷന് മുൻപ്",
    lead: "ആവശ്യമായ വിവരങ്ങൾ ഡോക്ടറുടെ മുന്നിലുണ്ടെങ്കിൽ കൺസൾട്ടേഷൻ കൂടുതൽ ഉപകാരപ്പെടും. ശരിയായ റിപ്പോർട്ടുകൾ കൊണ്ടുവന്നാൽ വീണ്ടും വരേണ്ടി വരുന്നതും ഇതിനകം ചെയ്ത സ്കാനുകൾ ആവർത്തിക്കുന്നതും ഒഴിവാക്കാം.",
    sections: [
      {
        heading: "എന്തൊക്കെ കൊണ്ടുവരണം",
        body: "കഴിയുന്നതും റിപ്പോർട്ട് മാത്രമല്ല, സ്കാൻ ചിത്രങ്ങളും കൊണ്ടുവരിക.",
        points: [
          "CT, MRI, CT/MR ആൻജിയോഗ്രഫി — ഫിലിമോ CD-യോ, ഒപ്പം റിപ്പോർട്ടും",
          "ഡോപ്ലർ സ്കാൻ റിപ്പോർട്ടുകൾ",
          "ആൻജിയോഗ്രാം ചിത്രങ്ങളോ റിപ്പോർട്ടോ ഉണ്ടെങ്കിൽ അത്",
          "മുൻപ് ആശുപത്രിയിൽ കിടന്നിട്ടുണ്ടെങ്കിൽ ഡിസ്ചാർജ് സമ്മറി",
          "അടുത്തിടെ ചെയ്ത രക്തപരിശോധനകൾ — വൃക്കയുടെ പ്രവർത്തനവും ഷുഗറും ഉൾപ്പെടെ",
          "ബയോപ്സി റിപ്പോർട്ട് ഉണ്ടെങ്കിൽ അത്",
          "ഇപ്പോൾ കഴിക്കുന്ന മരുന്നുകളുടെ പട്ടിക — രക്തം നേർപ്പിക്കുന്ന മരുന്നുകൾ ഉൾപ്പെടെ",
        ],
      },
      {
        heading: "മുൻകൂട്ടി എഴുതിവെക്കേണ്ടത്",
        body: "ബുദ്ധിമുട്ട് എപ്പോൾ തുടങ്ങി, എങ്ങനെ മാറി വന്നു, എപ്പോൾ കൂടും, എപ്പോൾ കുറയും, ഇതുവരെ ആരൊക്കെ എന്ത് ചികിത്സ നിർദേശിച്ചു — ഇത്രയും ചെറിയൊരു കുറിപ്പായി എഴുതിവെക്കുന്നത് നല്ലതാണ്.",
      },
      {
        heading: "ചോദിക്കാൻ നല്ല ചോദ്യങ്ങൾ",
        body: "നിങ്ങളുടെ സ്വന്തം ചോദ്യങ്ങളുമായി വരുന്നത് സഹായകമാണ്.",
        points: [
          "എനിക്കുള്ള രോഗം കൃത്യമായി എന്താണ്?",
          "ഒരു വഴി മാത്രമല്ല, ആകെ എന്തൊക്കെ ചികിത്സാ വഴികളുണ്ട്?",
          "ഇമേജ്-ഗൈഡഡ് ചികിത്സ എന്റെ കാര്യത്തിൽ ചേരുമോ?",
          "ഇപ്പോൾ ചികിത്സ ചെയ്തില്ലെങ്കിൽ എന്ത് സംഭവിക്കും?",
          "എന്തൊക്കെ പ്രശ്നങ്ങൾ ഉണ്ടാകാം, സുഖം പ്രാപിക്കാൻ എത്ര സമയം വേണ്ടിവരും?",
        ],
      },
      {
        heading: "കൂടെ ഒരാളെ കൂട്ടുക",
        body: "വലിയ തീരുമാനമാണെങ്കിൽ വീട്ടിൽ നിന്ന് ഒരാളെ കൂടെ കൂട്ടുക. പറഞ്ഞ കാര്യങ്ങൾ ഓർത്തുവെക്കാൻ രണ്ടു പേരുള്ളത് നല്ലതാണ്.",
      },
    ],
  },
};

const preparingForTreatment: Bilingual = {
  en: {
    slug: "preparing-for-treatment",
    eyebrow: "Patient information",
    title: "Preparing for a procedure",
    lead: "Preparation depends on the procedure, on your other medical conditions and on the medicines you take. You will be given specific instructions; what follows is only what is generally involved.",
    sections: [
      {
        heading: "Tests before the procedure",
        body: "Blood tests are usually needed, commonly clotting, haemoglobin, kidney function and sugar. Kidney function matters because contrast dye is used in many procedures.",
      },
      {
        heading: "Medicines",
        body: "Blood thinners, antiplatelets, diabetes medication and some blood pressure medicines may need to be adjusted, stopped or continued deliberately. Never stop a prescribed medicine on your own — ask first.",
      },
      {
        heading: "Fasting",
        body: "For most procedures you are asked not to eat for a set number of hours beforehand. Sips of water with essential tablets are often allowed, but follow the instruction you are given.",
      },
      {
        heading: "On the day",
        body: "Come with your reports and images, wear something loose, and leave jewellery at home. If sedation or anaesthesia is planned, arrange for someone to travel home with you.",
      },
      {
        heading: "Tell the team about",
        body: "Some things change how a procedure is planned.",
        points: [
          "Any allergy, especially to contrast dye or iodine",
          "Kidney disease or dialysis",
          "Pregnancy or the possibility of pregnancy",
          "Previous reaction to anaesthesia or sedation",
          "Bleeding problems, or any blood thinner you take",
        ],
      },
    ],
  },
  ml: {
    slug: "preparing-for-treatment",
    eyebrow: "രോഗികൾക്കുള്ള വിവരങ്ങൾ",
    title: "ചികിത്സയ്ക്കുള്ള തയ്യാറെടുപ്പ്",
    lead: "തയ്യാറെടുപ്പ് ഏത് ചികിത്സയാണ്, മറ്റ് എന്തൊക്കെ അസുഖങ്ങളുണ്ട്, ഏതൊക്കെ മരുന്നുകൾ കഴിക്കുന്നു എന്നതിനെ ആശ്രയിച്ചിരിക്കും. നിങ്ങൾക്ക് പ്രത്യേകം നിർദേശങ്ങൾ തരും; ഇവിടെ പൊതുവായ കാര്യങ്ങൾ മാത്രമാണ്.",
    sections: [
      {
        heading: "ചികിത്സയ്ക്ക് മുൻപുള്ള പരിശോധനകൾ",
        body: "സാധാരണയായി രക്തപരിശോധന വേണ്ടിവരും — രക്തം കട്ടപിടിക്കുന്ന നില, ഹീമോഗ്ലോബിൻ, വൃക്കയുടെ പ്രവർത്തനം, ഷുഗർ. പല ചികിത്സകളിലും ഡൈ ഉപയോഗിക്കുന്നതിനാൽ വൃക്കയുടെ നില പ്രധാനമാണ്.",
      },
      {
        heading: "മരുന്നുകൾ",
        body: "രക്തം നേർപ്പിക്കുന്ന മരുന്നുകൾ, ഷുഗറിന്റെ മരുന്നുകൾ, ചില രക്തസമ്മർദ മരുന്നുകൾ എന്നിവ കുറയ്ക്കുകയോ നിർത്തുകയോ തുടരുകയോ വേണ്ടിവരാം. സ്വയം ഒരു മരുന്നും നിർത്തരുത് — ചോദിച്ചിട്ട് മാത്രം ചെയ്യുക.",
      },
      {
        heading: "ഭക്ഷണം ഒഴിവാക്കൽ",
        body: "മിക്ക ചികിത്സകൾക്കും മുൻപ് കുറച്ചു മണിക്കൂർ ഭക്ഷണം കഴിക്കരുതെന്ന് പറയും. അത്യാവശ്യ ഗുളികകൾ കുറച്ചു വെള്ളത്തോടെ കഴിക്കാൻ പലപ്പോഴും അനുവദിക്കും. നിങ്ങൾക്ക് കിട്ടിയ നിർദേശം കൃത്യമായി പാലിക്കുക.",
      },
      {
        heading: "ചികിത്സാ ദിവസം",
        body: "റിപ്പോർട്ടുകളും സ്കാൻ ചിത്രങ്ങളും കൊണ്ടുവരിക, അയഞ്ഞ വസ്ത്രം ധരിക്കുക, ആഭരണങ്ങൾ വീട്ടിൽ വെക്കുക. മയക്കോ അനസ്തീഷ്യയോ ഉണ്ടെങ്കിൽ, തിരികെ പോകാൻ കൂടെ ഒരാൾ വേണം.",
      },
      {
        heading: "ഇത് പറയാൻ മറക്കരുത്",
        body: "ചില കാര്യങ്ങൾ ചികിത്സ ആസൂത്രണം ചെയ്യുന്ന രീതി തന്നെ മാറ്റും.",
        points: [
          "ഏതെങ്കിലും അലർജി — പ്രത്യേകിച്ച് ഡൈയോട് അല്ലെങ്കിൽ അയഡിനോട്",
          "വൃക്കരോഗം അല്ലെങ്കിൽ ഡയാലിസിസ്",
          "ഗർഭം അല്ലെങ്കിൽ ഗർഭസാധ്യത",
          "മുൻപ് അനസ്തീഷ്യയോട് ഉണ്ടായ പ്രശ്നങ്ങൾ",
          "രക്തസ്രാവ പ്രശ്നങ്ങൾ, അല്ലെങ്കിൽ രക്തം നേർപ്പിക്കുന്ന മരുന്ന് കഴിക്കുന്നുണ്ടെങ്കിൽ അത്",
        ],
      },
    ],
  },
};

const afterTreatment: Bilingual = {
  en: {
    slug: "after-treatment",
    eyebrow: "Patient information",
    title: "After treatment",
    lead: "Recovery varies with the procedure, the condition treated and your general health. Your own discharge instructions always take priority over general information.",
    sections: [
      {
        heading: "The first hours",
        body: "You are observed after the procedure, and the access site is checked for bleeding or swelling. You may be asked to keep the leg or arm still for a period.",
      },
      {
        heading: "The access site",
        body: "A small bruise is common. Keep the site clean and dry as instructed, and avoid heavy lifting or straining for the period you are told.",
      },
      {
        heading: "Medicines afterwards",
        body: "Some procedures require antiplatelet or anticoagulant medicine afterwards, sometimes for a long period. Take these exactly as prescribed — stopping early can undo the treatment.",
      },
      {
        heading: "Follow-up",
        body: "Follow-up imaging or review is often part of the treatment rather than an optional extra. Keep the appointments you are given, even if you feel well.",
      },
      {
        heading: "When to seek help urgently",
        body: "Contact medical care without waiting if you notice any of the following.",
        points: [
          "Bleeding, rapidly increasing swelling or severe pain at the access site",
          "Fever with chills",
          "The treated limb becoming cold, pale, numb or weak",
          "Sudden chest pain or breathlessness",
          "Sudden weakness, facial droop or difficulty speaking",
        ],
      },
      {
        heading: "Emergencies",
        body: "For any sudden or severe symptom, go to the nearest emergency department. Do not wait for a reply to a message or a form.",
      },
    ],
  },
  ml: {
    slug: "after-treatment",
    eyebrow: "രോഗികൾക്കുള്ള വിവരങ്ങൾ",
    title: "ചികിത്സയ്ക്ക് ശേഷം",
    lead: "സുഖം പ്രാപിക്കുന്ന സമയം ചികിത്സാരീതിയും രോഗാവസ്ഥയും ഓരോ ആളുടെയും ആരോഗ്യവും അനുസരിച്ച് മാറും. നിങ്ങൾക്ക് ഡിസ്ചാർജ് സമയത്ത് കിട്ടിയ നിർദേശങ്ങൾക്കാണ് എപ്പോഴും മുൻഗണന.",
    sections: [
      {
        heading: "ആദ്യത്തെ ഏതാനും മണിക്കൂർ",
        body: "ചികിത്സയ്ക്ക് ശേഷം കുറച്ചു സമയം നിരീക്ഷണത്തിലുണ്ടാകും. ദ്വാരമുണ്ടാക്കിയ ഭാഗത്ത് രക്തസ്രാവമോ വീക്കമോ ഉണ്ടോ എന്ന് നോക്കും. കുറച്ചു നേരം കാലോ കൈയോ അനക്കാതെ വെക്കാൻ പറയാം.",
      },
      {
        heading: "ദ്വാരമുണ്ടാക്കിയ ഭാഗം",
        body: "ചെറിയ നീലിപ്പ് സാധാരണമാണ്. പറഞ്ഞതുപോലെ ആ ഭാഗം വൃത്തിയായും ഉണങ്ങിയും വെക്കുക. പറഞ്ഞ ദിവസങ്ങൾ വരെ ഭാരം എടുക്കുന്നതും ബലം പിടിക്കുന്നതും ഒഴിവാക്കുക.",
      },
      {
        heading: "ശേഷമുള്ള മരുന്നുകൾ",
        body: "ചില ചികിത്സകൾക്ക് ശേഷം രക്തം കട്ടപിടിക്കാതിരിക്കാനുള്ള മരുന്നുകൾ വേണ്ടിവരും, ചിലപ്പോൾ ദീർഘകാലം. പറഞ്ഞതുപോലെ തന്നെ കഴിക്കുക — ഇടയ്ക്ക് നിർത്തിയാൽ ചെയ്ത ചികിത്സ പാഴാകാം.",
      },
      {
        heading: "തുടർ പരിശോധന",
        body: "തുടർന്നുള്ള സ്കാനും പരിശോധനയും ചികിത്സയുടെ ഭാഗമാണ്, ഒഴിവാക്കാവുന്ന ഒന്നല്ല. സുഖം തോന്നിയാലും പറഞ്ഞ ദിവസങ്ങളിൽ വരിക.",
      },
      {
        heading: "എപ്പോൾ ഉടൻ സഹായം തേടണം",
        body: "താഴെ പറയുന്നവയിൽ എന്തെങ്കിലും കണ്ടാൽ കാത്തുനിൽക്കാതെ ചികിത്സ തേടുക.",
        points: [
          "ദ്വാരമുണ്ടാക്കിയ ഭാഗത്ത് രക്തസ്രാവം, പെട്ടെന്ന് കൂടുന്ന വീക്കം, കടുത്ത വേദന",
          "വിറയലോടു കൂടിയ പനി",
          "ചികിത്സിച്ച കൈയോ കാലോ തണുക്കുക, വിളറുക, മരവിക്കുക, ബലക്കുറവ് വരിക",
          "പെട്ടെന്നുള്ള നെഞ്ചുവേദനയോ ശ്വാസംമുട്ടലോ",
          "പെട്ടെന്നുള്ള ബലക്ഷയം, മുഖം കോടൽ, സംസാരിക്കാൻ ബുദ്ധിമുട്ട്",
        ],
      },
      {
        heading: "അടിയന്തര സാഹചര്യങ്ങൾ",
        body: "പെട്ടെന്നുള്ളതോ കടുത്തതോ ആയ ഏത് ലക്ഷണത്തിനും അടുത്തുള്ള അത്യാഹിത വിഭാഗത്തിൽ ഉടൻ എത്തുക. സന്ദേശത്തിനോ ഫോമിനോ മറുപടി കാത്തുനിൽക്കരുത്.",
      },
    ],
  },
};

const pages: Record<string, Bilingual> = {
  "how-treatment-works": howTreatmentWorks,
  "before-consultation": beforeConsultation,
  "preparing-for-treatment": preparingForTreatment,
  "after-treatment": afterTreatment,
};

export function infoPage(slug: string, locale: Locale): InfoPage {
  const entry = pages[slug];
  return locale === "ml" ? entry.ml : entry.en;
}

export const infoPageOrder = [
  "how-treatment-works",
  "before-consultation",
  "preparing-for-treatment",
  "after-treatment",
];
