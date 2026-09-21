import { AlertTriangle } from "lucide-react";
import { useTx } from "../lib/i18n/tx";

const MESSAGE =
  "If you are experiencing sudden weakness, facial drooping, difficulty speaking, severe sudden headache, coughing or vomiting blood, or a cold or painful limb, seek emergency medical care immediately.";

export function EmergencyTicker() {
  const tx = useTx();
  const label = tx("Urgent medical care");
  const message = tx(MESSAGE);

  return (
    <aside
      className="emergency-ticker fixed inset-x-0 top-0 z-[100] border-b border-red-300/15 bg-[#100b13] text-red-50"
      aria-label={`${label}: ${message}`}
    >
      <div className="sr-only">{label}: {message}</div>
      <div aria-hidden="true" className="emergency-ticker-viewport flex h-[var(--ticker-h)] items-center overflow-hidden">
        <div className="emergency-ticker-track flex min-w-max items-center">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 items-center gap-3 px-6 sm:px-10">
              <AlertTriangle className="size-3.5 shrink-0 text-red-300" />
              <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-red-200">{label}</span>
              <span className="text-[0.75rem] text-red-50/80">·</span>
              <span className="text-[0.75rem] text-red-50/80">{message}</span>
              <span className="text-[0.75rem] text-red-50/45">·</span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}