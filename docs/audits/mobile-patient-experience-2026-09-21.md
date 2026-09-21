# Mobile-first patient-experience audit

Date: 21 September 2026
Viewport: 375–390 px wide
Method: Real browser navigation and tap testing against the local production preview. Findings below distinguish working interactions, corrected code defects, and operational facts still awaiting verification.

## 1. Non-healing diabetic foot wound
**Task:** Find the relevant guide, understand urgency, and identify the next step.

**Result:** Completed with qualification.
- The English and Malayalam diabetic-foot guides load and the language switch keeps the same guide open.
- The guide describes non-healing wounds, blackening, infection, and sudden cold severe pain.
- Added a prominent emergency notice before routine actions and again beside warning signs. It directs sudden/worsening symptoms to 112 or the nearest emergency department and explicitly says not to wait for WhatsApp, email, booking, or a second-opinion reply.
- Routine consultation remains available for non-emergency assessment.

**Remaining clinical decision:** Dr. Sagar must approve the exact same-day thresholds, wound wording, and real local emergency pathway.

## 2. Family member researching stroke
**Task:** Distinguish emergency stroke care from routine consultation.

**Result:** Completed after correction.
- The main mobile menu’s “Acute ischemic stroke” link incorrectly opened `/conditions/acute-ischemic-stroke`, which returned 404. It now opens the live `/conditions/stroke` guide in both languages.
- The homepage and stroke page now provide emergency-first instructions, a direct 112 action, and a warning not to wait for routine messages.
- Routine booking and second-opinion choices remain available but are visually separated from emergency guidance.

**Remaining clinical decision:** Dr. Sagar must approve all treatment-window and eligibility claims; the site cannot identify a receiving stroke centre.

## 3. Patient advised fibroid surgery
**Task:** Understand alternatives, limitations, and second-opinion process.

**Result:** Completed.
- The fibroid guide explains observation, medicines, embolization, myomectomy, and hysterectomy, including selected risks and fertility considerations.
- The second-opinion page now frames review as support for an informed choice, without assuming surgery is avoidable or prior advice is wrong.
- The form clearly states that files are not uploaded to the website; WhatsApp opens after consent and the patient attaches files there.
- Submission is disabled until the patient acknowledges that the service is not emergency care, does not replace in-person assessment, and transfers information through WhatsApp.
- The unverified one-working-day response promise was removed.

**Remaining operational facts:** review fee, reviewer, response process, record retention, and scheduling owner are not verified.

## 4. Malayalam-speaking older patient
**Task:** Navigate, understand safety information, and contact the practice.

**Result:** Completed after accessibility correction.
- Language switching retains the equivalent page and exposes the correct selected state to assistive technology.
- New emergency, privacy, terms, recovery, imaging, second-opinion, and contact-safety text has natural Malayalam copy rather than English fallback.
- The language buttons measured approximately 28.5 px tall, creating a dexterity barrier. Their control now has a minimum 44 px overall height, with each button at least 40 px high and wider horizontal padding.
- Routine WhatsApp/email/call routes remain available; emergency copy directs the user elsewhere.

**Remaining validation:** a native Malayalam-speaking clinician must review the clinical meaning and readability with older patients.

## 5. Referring doctor
**Task:** Verify clinical scope, facilities, credentials, and referral process.

**Result:** Not completable from verified information.
- No dedicated referring-doctor workflow is published.
- The general contact page works in both languages, but does not identify a referral coordinator, response standard, secure clinical channel, hospital privileges, facilities, or emergency transfer pathway.
- Qualifications, registration details, and affiliations remain intentionally unpublished because verified source material has not been supplied.

**Required owner input:** verified credentials and affiliations; personally performed/team/referred procedure list; facilities; referral acceptance criteria; secure transfer method; named operational owner; response and follow-up process.

## Additional defects found and corrected
- Fixed dead mobile/menu destinations for stroke, liver tumours, brain AVM/AVF, and dialysis-access treatment.
- Kidney-blood-vessel navigation now goes to the conditions directory until a verified full guide exists.
- A misleading abdominal-aneurysm destination was prevented from returning 404; a dedicated verified abdominal-aneurysm guide is still needed before that label can have a condition-specific destination.
- Homepage recovery is now procedure-dependent guidance rather than a fixed Day 0–Month 3 promise.
- Six image comparisons are now labelled representative educational imaging, not patient records, evidence of expected results, or outcome predictions.

## Launch blockers outside code
1. Dr. Sagar’s documented review of every condition, procedure, emergency threshold, numerical claim, recovery statement, and treatment pathway.
2. Verified qualifications, registration, affiliations, consultation locations/hours, facilities, and personally performed versus team/referred scope.
3. Named enquiry owner, response process, missed-contact follow-up, emergency/out-of-scope handling, fees, and appointment confirmation process.
4. Approved privacy retention/deletion schedules and legal review of the Privacy and Terms pages.
5. Referring-doctor pathway and secure clinical-record transfer process.
