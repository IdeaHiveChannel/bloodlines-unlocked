/**
 * Patient-search language paired with clinical terminology.
 *
 * Nothing here replaces existing content. Each entry adds the words patients
 * actually type into a search box, so the same phrasing can be reused across
 * hero copy, cards, condition intros, procedure pages, metadata and Malayalam.
 *
 * Keyed by condition / pillar slug from content.ts and pillars/.
 */

export type Alias = {
  /** Clinical name, as it already appears on the site. */
  clinical: string;
  /** The phrase patients use. Shown beside the clinical name. */
  patient: string;
  /** A full sentence that can be dropped into an introduction. */
  alsoKnownAs: string;
  /** Malayalam patient phrase, paired with the recognised English term. */
  ml: string;
  /** Malayalam version of the "also known as" sentence. */
  mlAlsoKnownAs: string;
};

export const aliases: Record<string, Alias> = {
  "acute-ischemic-stroke": {
    clinical: "Acute ischemic stroke",
    patient: "Blocked blood vessel in the brain",
    alsoKnownAs:
      "An acute ischemic stroke occurs when a blood clot blocks a blood vessel supplying the brain — often described by families simply as a brain stroke or a block in a brain blood vessel.",
    ml: "ബ്രെയിൻ സ്ട്രോക്ക് (Acute Ischemic Stroke)",
    mlAlsoKnownAs:
      "മസ്തിഷ്കത്തിലേക്കുള്ള രക്തക്കുഴലിൽ രക്തം കട്ടപിടിച്ച് ബ്ലോക്ക് ഉണ്ടാകുമ്പോഴാണ് അക്യൂട്ട് ഇസ്കീമിക് സ്ട്രോക്ക് (ബ്രെയിൻ സ്ട്രോക്ക്) ഉണ്ടാകുന്നത്.",
  },
  stroke: {
    clinical: "Stroke",
    patient: "Blocked blood vessels in the brain",
    alsoKnownAs:
      "A stroke happens when blood flow to part of the brain stops — most often because a clot blocks a blood vessel in the brain.",
    ml: "ബ്രെയിൻ സ്ട്രോക്ക് (Stroke)",
    mlAlsoKnownAs:
      "മസ്തിഷ്കത്തിലെ രക്തക്കുഴലിൽ ബ്ലോക്ക് വന്ന് രക്തയോട്ടം നിലയ്ക്കുമ്പോഴാണ് സ്ട്രോക്ക് ഉണ്ടാകുന്നത്.",
  },
  "peripheral-artery-disease": {
    clinical: "Peripheral artery disease",
    patient: "Poor blood circulation in the legs",
    alsoKnownAs:
      "Peripheral arterial disease (PAD), also commonly described as poor blood circulation in the legs or blocked leg arteries, occurs when arteries supplying the legs become narrowed or blocked.",
    ml: "കാലിലെ രക്തയോട്ടക്കുറവ് (Peripheral Artery Disease)",
    mlAlsoKnownAs:
      "കാലുകളിലേക്കുള്ള രക്തക്കുഴലുകൾ ചുരുങ്ങുകയോ ബ്ലോക്ക് ആകുകയോ ചെയ്യുമ്പോൾ കാലിലെ രക്തയോട്ടം കുറയുന്നു — ഇതാണ് പെരിഫറൽ ആർട്ടറി ഡിസീസ്.",
  },
  "peripheral-arterial-disease": {
    clinical: "Peripheral arterial disease",
    patient: "Poor blood circulation in the legs",
    alsoKnownAs:
      "Peripheral arterial disease (PAD), also commonly described as poor blood circulation in the legs or blocked leg arteries, occurs when arteries supplying the legs become narrowed or blocked.",
    ml: "കാലിലെ രക്തയോട്ടക്കുറവ് (Peripheral Arterial Disease)",
    mlAlsoKnownAs:
      "കാലുകളിലേക്കുള്ള രക്തക്കുഴലുകൾ ചുരുങ്ങുകയോ ബ്ലോക്ക് ആകുകയോ ചെയ്യുമ്പോൾ കാലിലെ രക്തയോട്ടം കുറയുന്നു — ഇതാണ് പെരിഫറൽ ആർട്ടീരിയൽ ഡിസീസ്.",
  },
  "poor-blood-circulation": {
    clinical: "Poor blood circulation",
    patient: "Reduced blood supply to the legs and feet",
    alsoKnownAs:
      "Poor blood circulation in the legs is the patient description of reduced arterial blood supply, most often caused by peripheral artery disease — narrowed or blocked leg arteries.",
    ml: "കാലിലെ രക്തയോട്ടം കുറയുന്നത് (Poor Blood Circulation)",
    mlAlsoKnownAs:
      "കാലിലേക്കുള്ള രക്തയോട്ടം കുറയുന്നതിന്റെ പ്രധാന കാരണം കാലിലെ രക്തക്കുഴലിൽ ബ്ലോക്ക് ഉണ്ടാകുന്നതാണ്.",
  },
  "diabetic-foot": {
    clinical: "Diabetic foot",
    patient: "Poor blood supply and non-healing wounds",
    alsoKnownAs:
      "A diabetic foot wound may become difficult to heal when blood circulation to the foot is reduced — patients often search for a diabetic foot ulcer that will not heal.",
    ml: "പ്രമേഹ കാലിലെ മുറിവ് ഉണങ്ങാത്തത് (Diabetic Foot)",
    mlAlsoKnownAs:
      "കാലിലേക്കുള്ള രക്തയോട്ടം കുറയുമ്പോൾ പ്രമേഹ രോഗികളുടെ കാലിലെ മുറിവ് ഉണങ്ങാതെ നിൽക്കാം.",
  },
  "varicose-veins": {
    clinical: "Varicose veins",
    patient: "Enlarged leg veins and venous problems",
    alsoKnownAs:
      "Varicose veins are enlarged, twisted veins caused by abnormal blood flow in the veins of the legs — often described as swollen or bulging leg veins.",
    ml: "വരിക്കോസ് വെയിൻ (Varicose Veins)",
    mlAlsoKnownAs:
      "കാലിലെ ഞരമ്പുകളിൽ രക്തയോട്ടം തിരിച്ചൊഴുകുമ്പോൾ ഞരമ്പുകൾ വീർത്ത് പുറത്തേക്ക് തള്ളി നിൽക്കുന്നതാണ് വരിക്കോസ് വെയിൻ.",
  },
  "deep-vein-thrombosis": {
    clinical: "Deep vein thrombosis",
    patient: "Blood clots in the deep veins",
    alsoKnownAs:
      "Deep vein thrombosis (DVT) is a blood clot forming in a deep vein, usually of the leg, causing swelling and pain.",
    ml: "കാലിലെ ഞരമ്പിൽ രക്തം കട്ടപിടിക്കൽ (Deep Vein Thrombosis)",
    mlAlsoKnownAs:
      "കാലിന്റെ ഉള്ളിലെ ഞരമ്പിൽ രക്തം കട്ടപിടിക്കുന്ന അവസ്ഥയാണ് ഡീപ് വെയിൻ ത്രോംബോസിസ്.",
  },
  "brain-aneurysm": {
    clinical: "Brain aneurysm",
    patient: "Aneurysm of a brain blood vessel",
    alsoKnownAs:
      "A brain (cerebral) aneurysm is a weak, ballooned area in the wall of a blood vessel supplying the brain.",
    ml: "മസ്തിഷ്കത്തിലെ അന്യൂറിസം (Cerebral Aneurysm)",
    mlAlsoKnownAs:
      "മസ്തിഷ്കത്തിലെ ഒരു രക്തക്കുഴലിന്റെ ഭിത്തി ദുർബലമായി ബലൂൺ പോലെ വീർത്തുവരുന്നതാണ് ബ്രെയിൻ അന്യൂറിസം.",
  },
  "cerebral-aneurysm": {
    clinical: "Cerebral aneurysm",
    patient: "Aneurysm of a brain blood vessel",
    alsoKnownAs:
      "A cerebral aneurysm is a ballooned weak point on a brain blood vessel, treated from inside the vessel in selected cases.",
    ml: "മസ്തിഷ്കത്തിലെ അന്യൂറിസം (Cerebral Aneurysm)",
    mlAlsoKnownAs:
      "മസ്തിഷ്കത്തിലെ രക്തക്കുഴലിൽ വീർത്തുവരുന്ന ദുർബല ഭാഗമാണ് സെറിബ്രൽ അന്യൂറിസം.",
  },
  "aortic-aneurysm": {
    clinical: "Aortic aneurysm",
    patient: "Aneurysm of the main artery",
    alsoKnownAs:
      "An aortic aneurysm is a widening of the aorta, the main artery of the body, which can enlarge silently over years.",
    ml: "അയോർട്ടിക് അന്യൂറിസം (Aortic Aneurysm)",
    mlAlsoKnownAs:
      "ശരീരത്തിലെ പ്രധാന രക്തക്കുഴലായ അയോർട്ട വീർത്തുവരുന്ന അവസ്ഥയാണ് അയോർട്ടിക് അന്യൂറിസം.",
  },
  "thyroid-nodules": {
    clinical: "Thyroid nodules",
    patient: "Thyroid swelling and benign nodules",
    alsoKnownAs:
      "Thyroid nodules are lumps within the thyroid gland, often noticed as a swelling in the front of the neck.",
    ml: "തൈറോയ്ഡ് വീക്കം (Thyroid Nodules)",
    mlAlsoKnownAs:
      "കഴുത്തിന്റെ മുൻഭാഗത്ത് തൈറോയ്ഡ് ഗ്രന്ഥിയിൽ ഉണ്ടാകുന്ന മുഴകളാണ് തൈറോയ്ഡ് നോഡ്യൂളുകൾ.",
  },
  "enlarged-prostate": {
    clinical: "Enlarged prostate",
    patient: "Benign prostatic hyperplasia (BPH)",
    alsoKnownAs:
      "An enlarged prostate, medically benign prostatic hyperplasia (BPH), presses on the urinary passage and disturbs urine flow.",
    ml: "പ്രോസ്റ്റേറ്റ് വലുതാകുന്നത് (Benign Prostatic Hyperplasia)",
    mlAlsoKnownAs:
      "പ്രോസ്റ്റേറ്റ് ഗ്രന്ഥി വലുതായി മൂത്രനാളിയിൽ അമർത്തുമ്പോൾ മൂത്രമൊഴിക്കാൻ ബുദ്ധിമുട്ട് ഉണ്ടാകുന്നു.",
  },
  "carotid-artery-disease": {
    clinical: "Carotid artery disease",
    patient: "Narrowing of the blood vessels supplying the brain",
    alsoKnownAs:
      "Carotid artery disease is narrowing of the neck arteries that carry blood to the brain, a recognised cause of stroke.",
    ml: "കഴുത്തിലെ രക്തക്കുഴലിൽ ബ്ലോക്ക് (Carotid Artery Disease)",
    mlAlsoKnownAs:
      "മസ്തിഷ്കത്തിലേക്ക് രക്തം എത്തിക്കുന്ന കഴുത്തിലെ രക്തക്കുഴൽ ചുരുങ്ങുന്ന അവസ്ഥയാണ് കരോട്ടിഡ് ആർട്ടറി ഡിസീസ്.",
  },
  "renal-artery-stenosis": {
    clinical: "Renal artery stenosis",
    patient: "Narrowing of the kidney artery",
    alsoKnownAs:
      "Renal artery stenosis is narrowing of the kidney artery, which can raise blood pressure and reduce kidney function.",
    ml: "വൃക്കയിലെ രക്തക്കുഴൽ ചുരുങ്ങൽ (Renal Artery Stenosis)",
    mlAlsoKnownAs:
      "വൃക്കയിലേക്കുള്ള രക്തക്കുഴൽ ചുരുങ്ങുമ്പോൾ രക്തസമ്മർദ്ദം കൂടുകയും വൃക്കയുടെ പ്രവർത്തനം കുറയുകയും ചെയ്യാം.",
  },
  "venous-ulcer": {
    clinical: "Venous leg ulcer",
    patient: "Non-healing leg ulcer caused by venous disease",
    alsoKnownAs:
      "A venous leg ulcer is a non-healing wound around the ankle caused by long-standing vein disease and abnormal venous blood flow.",
    ml: "ഉണങ്ങാത്ത കാൽ വ്രണം (Venous Leg Ulcer)",
    mlAlsoKnownAs:
      "കാലിലെ ഞരമ്പുകളുടെ തകരാർ മൂലം കണങ്കാലിനടുത്ത് ഉണ്ടാകുന്ന ഉണങ്ങാത്ത വ്രണമാണ് വീനസ് അൾസർ.",
  },
  "uterine-fibroids": {
    clinical: "Uterine fibroids",
    patient: "Non-cancerous growths in the womb",
    alsoKnownAs:
      "Uterine fibroids are non-cancerous growths in the wall of the womb that can cause heavy bleeding and pressure symptoms.",
    ml: "ഗർഭാശയ ഫൈബ്രോയിഡ് (Uterine Fibroids)",
    mlAlsoKnownAs:
      "ഗർഭാശയ ഭിത്തിയിൽ ഉണ്ടാകുന്ന അർബുദമല്ലാത്ത മുഴകളാണ് ഫൈബ്രോയിഡുകൾ.",
  },
  "liver-tumours": {
    clinical: "Liver tumours",
    patient: "Growths and cancer in the liver",
    alsoKnownAs:
      "Liver tumours include primary liver cancer and secondary deposits, several of which can be treated through the tumour's own blood supply.",
    ml: "കരൾ ട്യൂമർ (Liver Tumours)",
    mlAlsoKnownAs:
      "കരളിൽ ഉണ്ടാകുന്ന മുഴകളും അർബുദവും ചില സാഹചര്യങ്ങളിൽ രക്തക്കുഴലിലൂടെ ചികിത്സിക്കാം.",
  },
  "knee-osteoarthritis": {
    clinical: "Knee osteoarthritis",
    patient: "Long-standing knee pain",
    alsoKnownAs:
      "Knee osteoarthritis is wear-related knee joint pain, often described simply as long-standing knee pain and stiffness.",
    ml: "കാൽമുട്ട് വേദന (Knee Osteoarthritis)",
    mlAlsoKnownAs:
      "കാൽമുട്ടിലെ തേയ്മാനം മൂലം ദീർഘകാലമായി തുടരുന്ന വേദനയാണ് നീ ഓസ്റ്റിയോ ആർത്രൈറ്റിസ്.",
  },
  gangrene: {
    clinical: "Gangrene",
    patient: "Blackened tissue from loss of blood supply",
    alsoKnownAs:
      "Gangrene is tissue death caused by loss of blood supply, most often to a toe, foot or finger.",
    ml: "ഗാൻഗ്രീൻ (Gangrene)",
    mlAlsoKnownAs:
      "രക്തയോട്ടം പൂർണമായി നിലയ്ക്കുമ്പോൾ കാൽവിരലിലോ പാദത്തിലോ ടിഷ്യൂ നശിക്കുന്ന അവസ്ഥയാണ് ഗാൻഗ്രീൻ.",
  },
  "brain-avm-avf": {
    clinical: "Brain AVM and AVF",
    patient: "Abnormal tangle of brain blood vessels",
    alsoKnownAs:
      "A brain arteriovenous malformation (AVM) or fistula (AVF) is an abnormal connection between arteries and veins inside or around the brain.",
    ml: "മസ്തിഷ്കത്തിലെ രക്തക്കുഴൽ വൈകല്യം (Brain AVM / AVF)",
    mlAlsoKnownAs:
      "മസ്തിഷ്കത്തിലെ ധമനികളും സിരകളും തമ്മിലുള്ള അസാധാരണ ബന്ധമാണ് ബ്രെയിൻ AVM / AVF.",
  },
  hemoptysis: {
    clinical: "Hemoptysis",
    patient: "Coughing up blood",
    alsoKnownAs:
      "Hemoptysis means coughing up blood, which in selected cases comes from an abnormally enlarged bronchial artery.",
    ml: "ചുമയ്ക്കുമ്പോൾ രക്തം വരുന്നത് (Hemoptysis)",
    mlAlsoKnownAs:
      "ചുമയ്ക്കൊപ്പം രക്തം വരുന്ന അവസ്ഥയാണ് ഹീമോപ്റ്റിസിസ്; ചില സാഹചര്യങ്ങളിൽ ഇത് ബ്രോങ്കിയൽ ധമനിയിൽ നിന്നാണ്.",
  },
  "dialysis-access-failure": {
    clinical: "Dialysis access problems",
    patient: "Failing dialysis fistula or graft",
    alsoKnownAs:
      "Dialysis access problems include a narrowed, clotted or poorly flowing fistula or graft that makes dialysis difficult.",
    ml: "ഡയാലിസിസ് ഫിസ്റ്റുല തകരാർ (Dialysis Access Problems)",
    mlAlsoKnownAs:
      "ഡയാലിസിസിനുള്ള ഫിസ്റ്റുലയോ ഗ്രാഫ്റ്റോ ചുരുങ്ങുകയോ ബ്ലോക്ക് ആകുകയോ ചെയ്യുന്ന അവസ്ഥ.",
  },
  "visceral-aneurysm": {
    clinical: "Visceral aneurysm",
    patient: "Aneurysm of an abdominal organ artery",
    alsoKnownAs:
      "A visceral aneurysm is a ballooned weak point on an artery supplying an abdominal organ, such as the splenic or renal artery.",
    ml: "ഉദരാവയവ ധമനിയിലെ അന്യൂറിസം (Visceral Aneurysm)",
    mlAlsoKnownAs:
      "വയറിലെ അവയവങ്ങളിലേക്കുള്ള ധമനികളിൽ ഉണ്ടാകുന്ന അന്യൂറിസമാണ് വിസറൽ അന്യൂറിസം.",
  },
  "carotid-body-tumour": {
    clinical: "Carotid body tumour",
    patient: "Lump in the neck near the carotid artery",
    alsoKnownAs:
      "A carotid body tumour is a highly vascular swelling at the division of the carotid artery in the neck.",
    ml: "കഴുത്തിലെ കരോട്ടിഡ് ബോഡി ട്യൂമർ (Carotid Body Tumour)",
    mlAlsoKnownAs:
      "കഴുത്തിലെ കരോട്ടിഡ് ധമനി പിരിയുന്ന ഭാഗത്ത് ഉണ്ടാകുന്ന രക്തസമൃദ്ധമായ മുഴയാണിത്.",
  },
  "preoperative-tumour-embolisation": {
    clinical: "Pre-operative tumour embolisation",
    patient: "Blocking a tumour's blood supply before surgery",
    alsoKnownAs:
      "Pre-operative tumour embolisation blocks the blood supply of a vascular tumour shortly before surgery to reduce blood loss.",
    ml: "ശസ്ത്രക്രിയയ്ക്ക് മുൻപുള്ള ട്യൂമർ എംബോളൈസേഷൻ",
    mlAlsoKnownAs:
      "ശസ്ത്രക്രിയയ്ക്ക് മുൻപ് ട്യൂമറിലേക്കുള്ള രക്തയോട്ടം അടച്ച് രക്തനഷ്ടം കുറയ്ക്കുന്ന ചികിത്സ.",
  },
  "juvenile-angiofibroma": {
    clinical: "Juvenile nasopharyngeal angiofibroma",
    patient: "Vascular nose and throat tumour in young men",
    alsoKnownAs:
      "Juvenile nasopharyngeal angiofibroma is a benign but highly vascular tumour of the back of the nose, typically in adolescent boys.",
    ml: "ജുവനൈൽ ആൻജിയോഫൈബ്രോമ (Juvenile Angiofibroma)",
    mlAlsoKnownAs:
      "കൗമാരക്കാരായ ആൺകുട്ടികളിൽ മൂക്കിന്റെ പിൻഭാഗത്ത് കാണുന്ന രക്തസമൃദ്ധമായ മുഴയാണിത്.",
  },
  "bronchial-artery-embolisation": {
    clinical: "Bronchial artery embolisation",
    patient: "Treatment for coughing up blood",
    alsoKnownAs:
      "Bronchial artery embolisation stops bleeding into the airway by closing the abnormal bronchial artery from inside.",
    ml: "ബ്രോങ്കിയൽ ആർട്ടറി എംബോളൈസേഷൻ",
    mlAlsoKnownAs:
      "ശ്വാസകോശത്തിലേക്കുള്ള രക്തസ്രാവം രക്തക്കുഴലിനുള്ളിൽ നിന്ന് അടച്ച് നിർത്തുന്ന ചികിത്സ.",
  },
  "pulmonary-avm": {
    clinical: "Pulmonary arteriovenous malformation",
    patient: "Abnormal blood vessel connection in the lung",
    alsoKnownAs:
      "A pulmonary AVM is an abnormal direct connection between a lung artery and vein, which can lower blood oxygen.",
    ml: "ശ്വാസകോശത്തിലെ രക്തക്കുഴൽ വൈകല്യം (Pulmonary AVM)",
    mlAlsoKnownAs:
      "ശ്വാസകോശത്തിലെ ധമനിയും സിരയും തമ്മിലുള്ള അസാധാരണ ബന്ധമാണ് പൾമണറി AVM.",
  },
  "hepatic-hemangioma": {
    clinical: "Hepatic hemangioma",
    patient: "Benign blood vessel growth in the liver",
    alsoKnownAs:
      "A hepatic hemangioma is a benign collection of blood vessels in the liver, treated only when it causes symptoms.",
    ml: "കരളിലെ ഹീമാൻജിയോമ (Hepatic Hemangioma)",
    mlAlsoKnownAs:
      "കരളിൽ രക്തക്കുഴലുകൾ ചേർന്നുണ്ടാകുന്ന അർബുദമല്ലാത്ത മുഴയാണിത്.",
  },
  angiomyolipoma: {
    clinical: "Renal angiomyolipoma",
    patient: "Benign fatty kidney tumour that can bleed",
    alsoKnownAs:
      "A renal angiomyolipoma is a benign kidney tumour containing blood vessels and fat, which can bleed once it grows large.",
    ml: "വൃക്കയിലെ ആൻജിയോമയോലിപ്പോമ (Angiomyolipoma)",
    mlAlsoKnownAs:
      "വൃക്കയിൽ കൊഴുപ്പും രക്തക്കുഴലുകളും ചേർന്ന അർബുദമല്ലാത്ത മുഴയാണിത്; വലുതാകുമ്പോൾ രക്തസ്രാവം ഉണ്ടാകാം.",
  },
  "peripheral-vascular-malformation": {
    clinical: "Peripheral vascular malformation",
    patient: "Birthmark-like vein or artery malformation in an arm or leg",
    alsoKnownAs:
      "A peripheral or extremity vascular malformation is an abnormal cluster of veins, arteries or lymphatics in a limb, present from birth.",
    ml: "കൈകാലുകളിലെ രക്തക്കുഴൽ വൈകല്യം (Vascular Malformation)",
    mlAlsoKnownAs:
      "ജന്മനാ ഉണ്ടാകുന്ന, കൈകാലുകളിലെ അസാധാരണ രക്തക്കുഴൽ കൂട്ടമാണിത്.",
  },
  "pelvic-congestion-syndrome": {
    clinical: "Pelvic congestion syndrome",
    patient: "Chronic pelvic pain from swollen veins",
    alsoKnownAs:
      "Pelvic congestion syndrome is chronic pelvic pain caused by enlarged veins in the pelvis, similar to varicose veins in the legs.",
    ml: "ഇടുപ്പിലെ ഞരമ്പ് വീക്കം (Pelvic Congestion Syndrome)",
    mlAlsoKnownAs:
      "സ്ത്രീകളിൽ ഇടുപ്പിലെ സിരകൾ (veins) വീർത്ത് രക്തം കെട്ടിക്കിടക്കുന്ന അവസ്ഥയാണ് പെൽവിക് കൺജഷൻ സിൻഡ്രോം.",
  },
};


export function aliasFor(slug: string): Alias | undefined {
  return aliases[slug];
}

/** "Clinical name — patient phrase", for cards and lists. */
export function aliasLabel(slug: string, locale: "en" | "ml" = "en"): string | undefined {
  const a = aliases[slug];
  if (!a) return undefined;
  return locale === "ml" ? a.ml : `${a.clinical} — ${a.patient}`;
}
