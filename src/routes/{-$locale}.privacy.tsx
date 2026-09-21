import { createFileRoute } from "@tanstack/react-router";
import { localeHead } from "@/lib/i18n/meta";
import { useLocale } from "@/lib/i18n/react";
import { contact } from "@/lib/contact";

export const Route = createFileRoute("/{-$locale}/privacy")({
  head: ({ params }) => localeHead(params, "/privacy", {
    title: "Privacy and patient information — Dr. Mandeep Sagar",
    description: "How this website and practice handle enquiries, medical reports, personal information, external messaging services, retention, and privacy requests.",
    ogTitle: "Privacy and patient information",
    ogDescription: "Plain-language information about enquiries, medical reports, privacy, access, retention, and deletion requests.",
  }),
  component: PrivacyPage,
});

const en = [
  ["Who is responsible", "Dr. Mandeep Sagar is responsible for personal and medical information received through this website's contact routes and for ensuring that authorised people involved in responding or providing care handle it appropriately. Privacy questions can be sent to Vascularcaredr@gmail.com."],
  ["Information you choose to share", "You may provide your name, age, phone number, email address, city, symptoms, diagnosis, treatment advice, appointment preferences, and details of reports you hold. If you continue to WhatsApp or email, you may also attach scans, photographs, reports, discharge summaries, or other health information."],
  ["How the website works", "The forms on this website do not upload, submit, or store your entries on this website. They prepare a message and open WhatsApp or your email application. You decide whether to send it and whether to attach files. WhatsApp, your email provider, mobile network, and device then handle that information under their own privacy and security terms."],
  ["Why information is used", "Information you send may be used to understand your enquiry, arrange a consultation, review a second-opinion request, communicate with you, coordinate appropriate care, maintain clinical or administrative records where required, and meet legal or professional obligations. It is not sold."],
  ["Who may access it", "Access should be limited to Dr. Sagar and authorised people who need the information to respond, schedule, review records, coordinate care, or meet legal duties. If another hospital, clinician, or service is needed, information should be shared only as required for the requested care or with your permission, unless disclosure is required by law or necessary to protect life."],
  ["Medical reports and sensitive information", "Health information is sensitive. Avoid sending records over public or shared devices. Check the recipient before sending. Do not use WhatsApp, email, or this website for emergencies. If formal hospital care begins, the receiving hospital's own privacy, consent, access, and medical-record policies also apply."],
  ["Retention and deletion", "Enquiries and second-opinion material should be kept only as long as needed for the purpose, follow-up, safety, and applicable legal or medical-record duties. Formal clinical records may have mandatory retention periods and cannot always be deleted on request. The exact approved schedule for routine enquiries, second opinions, and clinical records is being finalised; until then, requests are assessed individually against applicable obligations."],
  ["Your choices and requests", "You may ask what information has been received, request a correction, withdraw from non-essential communication, or request deletion where the law and clinical record duties allow it. Email Vascularcaredr@gmail.com with enough detail to locate the communication. Identity may need to be verified before sensitive information is disclosed or changed."],
  ["Cookies and analytics", "Analytics cookies are optional and remain off until you accept them. If accepted, they help measure how pages are used. Do not enter medical information into analytics or cookie controls. You may decline analytics without losing access to the website."],
  ["Security and limits", "Reasonable care is expected when handling information, but ordinary WhatsApp and email are third-party communication channels and cannot be described as risk-free or as a dedicated medical-record portal. Send only what is necessary. If you sent information to the wrong recipient, contact the practice promptly."],
  ["Changes and contact", "This notice may be updated when processes, legal requirements, or approved retention schedules change. For a privacy concern, access, correction, or deletion request, email Vascularcaredr@gmail.com."],
] as const;

const ml = [
  ["ഉത്തരവാദിത്തം ആരുടെതാണ്", "ഈ വെബ്സൈറ്റിലെ ബന്ധപ്പെടൽ മാർഗങ്ങളിലൂടെ ലഭിക്കുന്ന വ്യക്തിഗതവും ആരോഗ്യവുമായി ബന്ധപ്പെട്ടതുമായ വിവരങ്ങളുടെ ഉത്തരവാദിത്തം ഡോ. മന്ദീപ് സാഗറിനാണ്. മറുപടി നൽകുന്നതിനോ ചികിത്സ ഏകോപിപ്പിക്കുന്നതിനോ ആവശ്യമായ അംഗീകൃത വ്യക്തികൾ മാത്രം വിവരങ്ങൾ കൈകാര്യം ചെയ്യണം. സ്വകാര്യത സംബന്ധിച്ച ചോദ്യങ്ങൾ Vascularcaredr@gmail.com എന്ന വിലാസത്തിലേക്ക് അയയ്ക്കാം."],
  ["നിങ്ങൾ നൽകുന്ന വിവരങ്ങൾ", "പേര്, വയസ്, ഫോൺ നമ്പർ, ഇമെയിൽ, നഗരം, ലക്ഷണങ്ങൾ, രോഗനിർണ്ണയം, ലഭിച്ച ചികിത്സാ നിർദ്ദേശം, അപ്പോയിന്റ്മെന്റ് മുൻഗണന, കൈവശമുള്ള റിപ്പോർട്ടുകളുടെ വിവരം എന്നിവ നിങ്ങൾക്ക് നൽകാം. വാട്സ്ആപ്പിലേക്കോ ഇമെയിലിലേക്കോ തുടർന്നാൽ സ്കാനുകൾ, മുറിവിന്റെ ചിത്രങ്ങൾ, റിപ്പോർട്ടുകൾ, ഡിസ്ചാർജ് സമ്മറി തുടങ്ങിയ ആരോഗ്യവിവരങ്ങളും ചേർക്കാം."],
  ["വെബ്സൈറ്റ് എങ്ങനെ പ്രവർത്തിക്കുന്നു", "ഈ വെബ്സൈറ്റിലെ ഫോമുകൾ വിവരങ്ങളോ ഫയലുകളോ ഇവിടെ അപ്‌ലോഡ് ചെയ്യുകയോ സൂക്ഷിക്കുകയോ ചെയ്യുന്നില്ല. ഫോം ഒരു സന്ദേശം തയ്യാറാക്കി വാട്സ്ആപ്പോ നിങ്ങളുടെ ഇമെയിൽ ആപ്പോ തുറക്കുന്നു. അയയ്ക്കണോ, ഫയലുകൾ ചേർക്കണോ എന്ന് നിങ്ങൾ തീരുമാനിക്കുന്നു. തുടർന്ന് വാട്സ്ആപ്പ്, ഇമെയിൽ സേവനം, മൊബൈൽ നെറ്റ്വർക്ക്, ഉപകരണം എന്നിവയുടെ സ്വകാര്യതാ നിബന്ധനകൾ ബാധകമാണ്."],
  ["വിവരങ്ങൾ ഉപയോഗിക്കുന്ന വിധം", "നിങ്ങളുടെ ചോദ്യം മനസ്സിലാക്കുക, കൺസൾട്ടേഷൻ ക്രമീകരിക്കുക, രണ്ടാം അഭിപ്രായം വിലയിരുത്തുക, നിങ്ങളുമായി ബന്ധപ്പെടുക, ആവശ്യമായ പരിചരണം ഏകോപിപ്പിക്കുക, ആവശ്യമായ ക്ലിനിക്കൽ/അഡ്മിനിസ്ട്രേറ്റീവ് രേഖകൾ സൂക്ഷിക്കുക, നിയമപരവും പ്രൊഫഷണലുമായ ബാധ്യതകൾ പാലിക്കുക എന്നിവയ്ക്കാണ് വിവരങ്ങൾ ഉപയോഗിക്കാവുന്നത്. വിവരങ്ങൾ വിൽക്കുന്നതല്ല."],
  ["ആർക്കാണ് വിവരങ്ങൾ കാണാനാകുക", "മറുപടി നൽകാനും സമയം നിശ്ചയിക്കാനും രേഖകൾ പരിശോധിക്കാനും പരിചരണം ഏകോപിപ്പിക്കാനും നിയമബാധ്യതകൾ പാലിക്കാനും വിവരം ആവശ്യമായ ഡോ. സാഗറിനും അംഗീകൃത വ്യക്തികൾക്കും മാത്രമായി പ്രവേശനം പരിമിതപ്പെടുത്തണം. മറ്റൊരു ആശുപത്രിയുടെയോ ഡോക്ടറുടെയോ സേവനം ആവശ്യമെങ്കിൽ, ആവശ്യപ്പെട്ട പരിചരണത്തിന് വേണ്ടത്രയോ നിങ്ങളുടെ അനുമതിയോടെയോ മാത്രം വിവരങ്ങൾ പങ്കിടണം; നിയമം ആവശ്യപ്പെടുന്ന സാഹചര്യങ്ങളും ജീവൻ രക്ഷിക്കേണ്ട അടിയന്തര സാഹചര്യങ്ങളും ഇതിൽ നിന്ന് വ്യത്യസ്തമാണ്."],
  ["മെഡിക്കൽ റിപ്പോർട്ടുകളും സ്വകാര്യ ആരോഗ്യവിവരങ്ങളും", "ആരോഗ്യവിവരങ്ങൾ അതീവ സ്വകാര്യമാണ്. പൊതുവായോ മറ്റുള്ളവർ ഉപയോഗിക്കുന്നതുമായ ഉപകരണങ്ങളിൽ നിന്ന് രേഖകൾ അയയ്ക്കാതിരിക്കുക. അയയ്ക്കുന്നതിന് മുമ്പ് സ്വീകരിക്കുന്ന വ്യക്തിയെ ഉറപ്പാക്കുക. അടിയന്തര സാഹചര്യങ്ങളിൽ വാട്സ്ആപ്പോ ഇമെയിലോ ഈ വെബ്സൈറ്റോ ഉപയോഗിക്കരുത്. ആശുപത്രിയിൽ ഔദ്യോഗിക ചികിത്സ ആരംഭിച്ചാൽ ആ ആശുപത്രിയുടെ സ്വകാര്യത, സമ്മതം, രേഖാസൂക്ഷിപ്പ് നയങ്ങളും ബാധകമാണ്."],
  ["വിവരങ്ങൾ സൂക്ഷിക്കുന്ന കാലവും ഇല്ലാതാക്കലും", "ചോദ്യങ്ങളും രണ്ടാം അഭിപ്രായത്തിനുള്ള രേഖകളും ആവശ്യത്തിനും ഫോളോ-അപ്പിനും സുരക്ഷയ്ക്കും ബാധകമായ നിയമ/മെഡിക്കൽ രേഖാ ചുമതലകൾക്കും വേണ്ട കാലം മാത്രം സൂക്ഷിക്കണം. ഔദ്യോഗിക ചികിത്സാരേഖകൾക്ക് നിർബന്ധിത സൂക്ഷിക്കൽ കാലയളവ് ഉണ്ടായേക്കാം; ആവശ്യപ്പെട്ടാലും എല്ലായ്പ്പോഴും ഇല്ലാതാക്കാൻ കഴിയണമെന്നില്ല. സാധാരണ ചോദ്യങ്ങൾ, രണ്ടാം അഭിപ്രായം, ക്ലിനിക്കൽ രേഖകൾ എന്നിവയ്ക്കുള്ള കൃത്യമായ അംഗീകൃത സമയക്രമം അന്തിമമാക്കുന്നതുവരെ ഓരോ അപേക്ഷയും ബാധകമായ ചുമതലകൾ പരിഗണിച്ച് പ്രത്യേകം വിലയിരുത്തും."],
  ["നിങ്ങളുടെ അവകാശങ്ങളും അപേക്ഷകളും", "ലഭിച്ച വിവരങ്ങളുടെ വിശദാംശം ചോദിക്കാം, തെറ്റ് തിരുത്താൻ ആവശ്യപ്പെടാം, അനാവശ്യ സന്ദേശങ്ങൾ നിർത്താം, നിയമവും ചികിത്സാരേഖാ ചുമതലകളും അനുവദിക്കുന്നിടത്ത് വിവരങ്ങൾ ഇല്ലാതാക്കാൻ ആവശ്യപ്പെടാം. ബന്ധപ്പെട്ട സന്ദേശം കണ്ടെത്താൻ ആവശ്യമായ വിവരങ്ങളോടെ Vascularcaredr@gmail.com എന്ന വിലാസത്തിലേക്ക് ഇമെയിൽ അയയ്ക്കുക. സ്വകാര്യവിവരം പുറത്തുവിടുന്നതിനോ മാറ്റുന്നതിനോ മുമ്പ് തിരിച്ചറിയൽ ഉറപ്പാക്കേണ്ടിവരും."],
  ["കുക്കികളും അനലിറ്റിക്സും", "അനലിറ്റിക്സ് കുക്കികൾ ഐച്ഛികമാണ്; നിങ്ങൾ സമ്മതിക്കുന്നതുവരെ അവ പ്രവർത്തിക്കില്ല. സമ്മതിച്ചാൽ ഏത് പേജുകൾ ഉപയോഗിക്കുന്നു എന്ന് പൊതുവായി മനസ്സിലാക്കാൻ സഹായിക്കും. കുക്കി നിയന്ത്രണങ്ങളിൽ ആരോഗ്യവിവരങ്ങൾ നൽകേണ്ടതില്ല. അനലിറ്റിക്സ് നിരസിച്ചാലും വെബ്സൈറ്റ് ഉപയോഗിക്കാം."],
  ["സുരക്ഷയും പരിമിതികളും", "വിവരങ്ങൾ ശ്രദ്ധാപൂർവ്വം കൈകാര്യം ചെയ്യണം. എങ്കിലും സാധാരണ വാട്സ്ആപ്പും ഇമെയിലും മൂന്നാം കക്ഷി സേവനങ്ങളാണ്; അപകടസാധ്യതയില്ലാത്ത പ്രത്യേക മെഡിക്കൽ റെക്കോർഡ് പോർട്ടൽ എന്ന് അവയെ വിശേഷിപ്പിക്കാനാവില്ല. ആവശ്യമായ വിവരങ്ങൾ മാത്രം അയയ്ക്കുക. തെറ്റായ ആളിലേക്ക് അയച്ചാൽ ഉടൻ പ്രാക്ടീസിനെ അറിയിക്കുക."],
  ["മാറ്റങ്ങളും ബന്ധപ്പെടലും", "നടപടിക്രമങ്ങളിലോ നിയമത്തിലോ അംഗീകൃത രേഖാസൂക്ഷിപ്പ് സമയക്രമത്തിലോ മാറ്റമുണ്ടെങ്കിൽ ഈ അറിയിപ്പ് പുതുക്കാം. സ്വകാര്യതാ പരാതി, വിവരം പരിശോധിക്കൽ, തിരുത്തൽ, ഇല്ലാതാക്കൽ എന്നിവയ്ക്ക് Vascularcaredr@gmail.com എന്ന വിലാസത്തിലേക്ക് ഇമെയിൽ അയയ്ക്കുക."],
] as const;

function PrivacyPage() {
  const content = useLocale() === "ml" ? ml : en;
  return (
    <main className="pb-20 pt-32">
      <div className="shell max-w-3xl">
        <p className="text-label text-[var(--accent)]">{useLocale() === "ml" ? "അവസാനം പുതുക്കിയത്: 21 സെപ്റ്റംബർ 2026" : "Last updated: 21 September 2026"}</p>
        <h1 className="mb-8 mt-4 text-display-lg">{useLocale() === "ml" ? "സ്വകാര്യതയും രോഗിവിവരങ്ങളും" : "Privacy and patient information"}</h1>
        <p className="mb-12 text-body leading-relaxed text-[var(--ink-dim)]">{useLocale() === "ml" ? "ഈ അറിയിപ്പ് വെബ്സൈറ്റിലൂടെയും അതിൽ നിന്ന് തുറക്കുന്ന വാട്സ്ആപ്പ്/ഇമെയിൽ മാർഗങ്ങളിലൂടെയും നൽകുന്ന വിവരങ്ങൾ എങ്ങനെ കൈകാര്യം ചെയ്യുന്നു എന്ന് വിശദീകരിക്കുന്നു." : "This notice explains how information is handled when you use this website or continue from it to WhatsApp or email."}</p>
        <div className="space-y-10">
          {content.map(([title, body]) => <section key={title}><h2 className="text-h3">{title}</h2><p className="mt-3 text-small leading-relaxed text-[var(--ink-dim)]">{body}</p></section>)}
        </div>
        <a className="mt-12 inline-block text-button text-[var(--accent)]" href={contact.emailHref}>{contact.email}</a>
      </div>
    </main>
  );
}