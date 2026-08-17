import { createFileRoute } from '@tanstack/react-router';
import { useTx } from '@/lib/i18n/tx';
import { useT } from '@/lib/i18n/react';

export const Route = createFileRoute('/{-$locale}/terms')({
  component: TermsPage,
});

function TermsPage() {
  const tx = useTx();
  const t = useT();

  return (
    <main className="pt-32 pb-20">
      <div className="shell max-w-3xl">
        <h1 className="text-display-lg mb-8">{tx(t.footer.terms)}</h1>
        <div className="prose prose-invert prose-light max-w-none text-[var(--ink-dim)]">
          <p>This page is currently being updated with detailed terms of use.</p>
        </div>
      </div>
    </main>
  );
}
