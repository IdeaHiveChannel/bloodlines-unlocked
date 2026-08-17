import { createFileRoute } from '@tanstack/react-router';
import { useTx } from '@/lib/i18n/tx';
import { useT } from '@/lib/i18n/react';

export const Route = createFileRoute('/{-$locale}/privacy')({
  component: PrivacyPage,
});

function PrivacyPage() {
  const tx = useTx();
  const t = useT();

  return (
    <main className="pt-32 pb-20">
      <div className="shell max-w-3xl">
        <h1 className="text-display-lg mb-8">{tx(t.footer.privacy)}</h1>
        <div className="prose prose-invert prose-light max-w-none text-[var(--ink-dim)]">
          <p>Medical privacy is our priority. This page is currently being updated with detailed privacy policies.</p>
        </div>
      </div>
    </main>
  );
}
