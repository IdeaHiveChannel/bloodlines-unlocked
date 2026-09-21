import { AlertTriangle, Phone } from "lucide-react";
import { useTx } from "@/lib/i18n/tx";

export const emergencyConditionSlugs = new Set([
  "stroke",
  "brain-aneurysm",
  "brain-avm-avf",
  "deep-vein-thrombosis",
  "gangrene",
  "diabetic-foot",
  "peripheral-arterial-disease",
  "poor-blood-circulation",
]);

export function EmergencyNotice({ compact = false }: { compact?: boolean }) {
  const tx = useTx();

  return (
    <aside
      role="alert"
      aria-labelledby="emergency-title"
      className={`border-y border-red-400/30 bg-red-950/20 ${compact ? "p-5 sm:rounded-2xl sm:border" : "py-6"}`}
    >
      <div className={compact ? "" : "shell"}>
        <div className="flex items-start gap-4">
          <AlertTriangle aria-hidden="true" className="mt-0.5 shrink-0 text-red-300" size={22} />
          <div>
            <h2 id="emergency-title" className="text-card-title text-red-100">
              {tx("Possible emergency? Act now.")}
            </h2>
            <p className="mt-2 max-w-3xl text-small leading-relaxed text-red-50/80">
              {tx("For sudden weakness or speech difficulty, severe breathlessness or chest pain, a cold painful limb, uncontrolled bleeding, collapse, or another rapidly worsening symptom, call 112 or go immediately to the nearest emergency department.")}
            </p>
            <p className="mt-2 max-w-3xl text-caption leading-relaxed text-red-100/70">
              {tx("Do not wait for a WhatsApp, email, appointment, or second-opinion reply. This website cannot provide emergency care.")}
            </p>
            <a
              href="tel:112"
              className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-full border border-red-200/30 px-5 text-button text-red-50 transition-colors hover:bg-red-100/10"
            >
              <Phone aria-hidden="true" size={16} />
              {tx("Call emergency services: 112")}
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}