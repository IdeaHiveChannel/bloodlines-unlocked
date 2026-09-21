import { createFileRoute } from "@tanstack/react-router";
import { localeHead } from "@/lib/i18n/meta";
import { useLocale } from "@/lib/i18n/react";

export const Route = createFileRoute("/{-$locale}/terms")({
  head: ({ params }) => localeHead(params, "/terms", {
    title: "Website terms — Dr. Mandeep Sagar",
    description: "Terms for medical information, emergencies, second opinions, external messaging, outcomes, and use of this website.",
    ogTitle: "Website terms",
    ogDescription: "Important limits and responsibilities when using this medical information website.",
  }),
  component: TermsPage,
});

const en = [
  ["Educational information, not a diagnosis", "This website provides general education. It cannot examine you, diagnose you, confirm eligibility for a procedure, prescribe treatment, or replace advice from a clinician who knows your medical history."],
  ["Not for emergencies", "Do not use this website, WhatsApp, email, appointment forms, or second-opinion requests for an emergency. Call 112 or go immediately to the nearest emergency department. Online messages may not be read promptly."],
  ["Treatment decisions", "Suitability depends on clinical examination, imaging, tests, available facilities, multidisciplinary input where needed, and informed discussion of alternatives, risks, limitations, and likely benefits. A listed condition or procedure does not mean it is appropriate, available, or performed personally by Dr. Sagar in every case."],
  ["No promised outcome", "No result, recovery time, hospital stay, pain level, limb salvage, avoidance of surgery, or complication rate is guaranteed. Images and timelines are educational illustrations. Individual outcomes vary."],
  ["Second opinions", "A second opinion is an additional review to support an informed decision. It does not imply that earlier advice was wrong, that surgery should be avoided, or that an image-guided option will be suitable. Remote review may be incomplete without examination, complete records, or further tests."],
  ["WhatsApp, email, phone, and maps", "Links may open third-party services. Their availability, privacy, security, delivery, and content are controlled by those providers. Opening or sending a message does not create a confirmed appointment or a doctor-patient relationship. Wait for explicit confirmation from the practice."],
  ["Accuracy and review", "Medical information changes and may contain errors or become outdated. Content should be reviewed by Dr. Sagar before being relied on as a description of his current scope, facilities, or treatment pathway. If website information conflicts with instructions from your treating team, ask that team for clarification."],
  ["Acceptable use", "You may read and share links for personal, non-commercial education. Do not misuse forms, impersonate another person, attempt to disrupt the website, copy substantial content for commercial use, or present educational material as personal medical advice."],
  ["Copyright", "Unless otherwise stated, the site's writing, layout, graphics, and original educational material may not be republished commercially without permission. Third-party marks and services remain their owners' property."],
  ["Liability", "To the extent permitted by applicable law, the website and its content are provided without a promise that every page will always be available, complete, or suitable for a particular person. Nothing here excludes responsibilities that cannot legally be excluded."],
  ["Changes", "These terms may be updated when the website, clinical services, or legal requirements change. Continued use after an update means the current terms apply."],
] as const;

const ml = [
  ["പൊതുവിവരം മാത്രം; രോഗനിർണ്ണയമല്ല", "ഈ വെബ്സൈറ്റ് പൊതുവായ ആരോഗ്യവിദ്യാഭ്യാസ വിവരങ്ങളാണ് നൽകുന്നത്. നിങ്ങളെ പരിശോധിക്കാനോ രോഗനിർണ്ണയം നടത്താനോ ചികിത്സയ്ക്ക് യോഗ്യത ഉറപ്പാക്കാനോ മരുന്ന് നിർദ്ദേശിക്കാനോ നിങ്ങളുടെ ചികിത്സാ ചരിത്രം അറിയുന്ന ഡോക്ടറുടെ ഉപദേശം മാറ്റിസ്ഥാപിക്കാനോ ഇതിന് കഴിയില്ല."],
  ["അടിയന്തര സേവനത്തിനല്ല", "അടിയന്തര സാഹചര്യത്തിൽ ഈ വെബ്സൈറ്റ്, വാട്സ്ആപ്പ്, ഇമെയിൽ, അപ്പോയിന്റ്മെന്റ് ഫോം, രണ്ടാം അഭിപ്രായ അപേക്ഷ എന്നിവ ഉപയോഗിക്കരുത്. 112-ൽ വിളിക്കുകയോ ഉടൻ അടുത്ത എമർജൻസി വിഭാഗത്തിലേക്ക് പോകുകയോ ചെയ്യുക. ഓൺലൈൻ സന്ദേശങ്ങൾ ഉടൻ വായിക്കപ്പെടുമെന്ന് ഉറപ്പില്ല."],
  ["ചികിത്സാ തീരുമാനം", "ക്ലിനിക്കൽ പരിശോധന, സ്കാനുകൾ, മറ്റു പരിശോധനകൾ, ലഭ്യമായ ആശുപത്രി സൗകര്യങ്ങൾ, ആവശ്യമായിടത്ത് വിവിധ വിദഗ്ധരുടെ അഭിപ്രായം, ഗുണം-ദോഷം-പരിമിതി-മറ്റ് മാർഗങ്ങൾ എന്നിവ വിശദമായി ചർച്ച ചെയ്തശേഷമാണ് ചികിത്സാ യോഗ്യത തീരുമാനിക്കുന്നത്. വെബ്സൈറ്റിൽ ഒരു രോഗമോ ചികിത്സയോ ഉൾപ്പെടുത്തിയിരിക്കുന്നത് അത് എല്ലാ രോഗികൾക്കും അനുയോജ്യമാണെന്നോ എല്ലായിടത്തും ലഭ്യമാണെന്നോ ഡോ. സാഗർ തന്നെ നിർബന്ധമായി ചെയ്യുന്നതാണെന്നോ അർഥമല്ല."],
  ["ഫലം ഉറപ്പുനൽകുന്നില്ല", "ചികിത്സാഫലം, സുഖം പ്രാപിക്കുന്ന സമയം, ആശുപത്രിവാസം, വേദന, അവയവം സംരക്ഷിക്കൽ, ശസ്ത്രക്രിയ ഒഴിവാക്കൽ, സങ്കീർണ്ണതയുടെ നിരക്ക് എന്നിവയിൽ ഒന്നും ഉറപ്പുനൽകുന്നില്ല. ചിത്രങ്ങളും സമയക്രമങ്ങളും പഠനത്തിനുള്ള ഉദാഹരണങ്ങളാണ്. ഓരോരുത്തരുടെയും ഫലം വ്യത്യസ്തമായിരിക്കും."],
  ["രണ്ടാം അഭിപ്രായം", "ചികിത്സയെക്കുറിച്ച് അറിവോടെ തീരുമാനമെടുക്കാൻ സഹായിക്കുന്ന അധിക വിദഗ്ധ വിലയിരുത്തലാണ് രണ്ടാം അഭിപ്രായം. മുമ്പത്തെ ഉപദേശം തെറ്റാണെന്നോ ശസ്ത്രക്രിയ ഒഴിവാക്കണമെന്നോ ഇമേജ്-ഗൈഡഡ് ചികിത്സ അനുയോജ്യമാകുമെന്നോ ഇത് സൂചിപ്പിക്കുന്നില്ല. നേരിട്ടുള്ള പരിശോധന, പൂർണ രേഖകൾ, അധിക പരിശോധനകൾ എന്നിവയില്ലാതെ ദൂരസ്ഥ വിലയിരുത്തൽ അപൂർണ്ണമായേക്കാം."],
  ["വാട്സ്ആപ്പ്, ഇമെയിൽ, ഫോൺ, മാപ്പ്", "ലിങ്കുകൾ മൂന്നാം കക്ഷി സേവനങ്ങൾ തുറക്കാം. ലഭ്യത, സ്വകാര്യത, സുരക്ഷ, സന്ദേശവിതരണം, ഉള്ളടക്കം എന്നിവ ആ സേവനദാതാക്കളുടെ നിയന്ത്രണത്തിലാണ്. ഒരു സന്ദേശം തുറക്കുകയോ അയയ്ക്കുകയോ ചെയ്തതുകൊണ്ട് അപ്പോയിന്റ്മെന്റ് ഉറപ്പാകുകയോ ഡോക്ടർ-രോഗി ബന്ധം ആരംഭിക്കുകയോ ചെയ്യുന്നില്ല. പ്രാക്ടീസിൽ നിന്നുള്ള വ്യക്തമായ സ്ഥിരീകരണം കാത്തിരിക്കണം."],
  ["കൃത്യതയും അവലോകനവും", "മെഡിക്കൽ വിവരം മാറിക്കൊണ്ടിരിക്കുന്നു; തെറ്റുകളോ പഴയ വിവരങ്ങളോ ഉണ്ടാകാം. ഡോ. സാഗറിന്റെ നിലവിലെ ചികിത്സാ പരിധി, സൗകര്യങ്ങൾ, ചികിത്സാ വഴി എന്നിവയായി ആശ്രയിക്കുന്നതിന് മുമ്പ് ഉള്ളടക്കം ഡോ. സാഗർ പരിശോധിക്കണം. വെബ്സൈറ്റിലെ വിവരം നിങ്ങളുടെ ചികിത്സാ ടീമിന്റെ നിർദ്ദേശത്തിന് വിരുദ്ധമാണെങ്കിൽ അവരോട് വിശദീകരണം തേടുക."],
  ["ഉചിതമായ ഉപയോഗം", "സ്വകാര്യവും വാണിജ്യേതരവുമായ ആരോഗ്യവിദ്യാഭ്യാസത്തിനായി വായിക്കാനും ലിങ്കുകൾ പങ്കിടാനും കഴിയും. ഫോമുകൾ ദുരുപയോഗം ചെയ്യരുത്, മറ്റൊരാളായി നടിക്കരുത്, വെബ്സൈറ്റ് തടസ്സപ്പെടുത്താൻ ശ്രമിക്കരുത്, വലിയ തോതിലുള്ള ഉള്ളടക്കം വാണിജ്യമായി പകർത്തരുത്, പൊതുവിവരം വ്യക്തിഗത ചികിത്സാ ഉപദേശമായി അവതരിപ്പിക്കരുത്."],
  ["പകർപ്പവകാശം", "വ്യത്യസ്തമായി സൂചിപ്പിച്ചിട്ടില്ലെങ്കിൽ, വെബ്സൈറ്റിലെ എഴുത്ത്, രൂപകൽപ്പന, ഗ്രാഫിക്സ്, സ്വന്തമായി തയ്യാറാക്കിയ പഠനസാമഗ്രികൾ എന്നിവ അനുമതിയില്ലാതെ വാണിജ്യമായി വീണ്ടും പ്രസിദ്ധീകരിക്കരുത്. മൂന്നാം കക്ഷികളുടെ ചിഹ്നങ്ങളും സേവനങ്ങളും അവരുടേതാണ്."],
  ["ഉത്തരവാദിത്തത്തിന്റെ പരിധി", "ബാധകമായ നിയമം അനുവദിക്കുന്ന പരിധിയിൽ, എല്ലാ പേജുകളും എല്ലായ്പ്പോഴും ലഭ്യമാകുമെന്നോ പൂർണമാകുമെന്നോ ഒരാൾക്ക് അനുയോജ്യമാകുമെന്നോ ഉറപ്പില്ലാതെയാണ് വെബ്സൈറ്റും ഉള്ളടക്കവും നൽകുന്നത്. നിയമപരമായി ഒഴിവാക്കാനാകാത്ത ഉത്തരവാദിത്തങ്ങൾ ഒന്നും ഇവിടെ ഒഴിവാക്കുന്നില്ല."],
  ["മാറ്റങ്ങൾ", "വെബ്സൈറ്റ്, ക്ലിനിക്കൽ സേവനങ്ങൾ, നിയമാവശ്യങ്ങൾ എന്നിവ മാറുമ്പോൾ ഈ നിബന്ധനകളും പുതുക്കാം. പുതുക്കിയതിനുശേഷം ഉപയോഗം തുടരുമ്പോൾ നിലവിലെ നിബന്ധനകൾ ബാധകമാണ്."],
] as const;

function TermsPage() {
  const isMl = useLocale() === "ml";
  const content = isMl ? ml : en;
  return (
    <main className="pb-20 pt-32">
      <div className="shell max-w-3xl">
        <p className="text-label text-[var(--accent)]">{isMl ? "അവസാനം പുതുക്കിയത്: 21 സെപ്റ്റംബർ 2026" : "Last updated: 21 September 2026"}</p>
        <h1 className="mb-8 mt-4 text-display-lg">{isMl ? "വെബ്സൈറ്റ് ഉപയോഗ നിബന്ധനകൾ" : "Website terms"}</h1>
        <div className="space-y-10">
          {content.map(([title, body]) => <section key={title}><h2 className="text-h3">{title}</h2><p className="mt-3 text-small leading-relaxed text-[var(--ink-dim)]">{body}</p></section>)}
        </div>
      </div>
    </main>
  );
}