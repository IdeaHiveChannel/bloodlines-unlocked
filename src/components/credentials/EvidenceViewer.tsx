import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useTx } from "@/lib/i18n/tx";
import type { Evidence } from "@/lib/credentials";

/** Thumbnail gallery: main image + supporting thumbnails, each opens a readable viewer. */
export function EvidenceGallery({ items }: { items: Evidence[] }) {
  const tx = useTx();
  const [active, setActive] = useState<Evidence | null>(null);
  const photos = items.filter((i) => i.kind === "photo");
  const certs = items.filter((i) => i.kind === "certificate");
  return (
    <div className="mt-5">
      {photos.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {photos.map((p, i) => (
            <button key={p.src} type="button" onClick={() => setActive(p)}
              className={`group relative overflow-hidden rounded-xl border border-white/[0.08] bg-[#0a1525] ${i === 0 ? "col-span-2 sm:col-span-1 sm:row-span-2 aspect-[4/5]" : "aspect-[4/3]"}`}>
              <img src={p.src} alt={tx(p.alt)} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
              {p.caption && <span className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-2 text-caption text-left">{tx(p.caption)}</span>}
            </button>
          ))}
        </div>
      )}
      {certs.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {certs.map((c) => <CertificateButton key={c.src} item={c} onOpen={setActive} />)}
        </div>
      )}
      <EvidenceDialog item={active} onClose={() => setActive(null)} />
    </div>
  );
}

export function CertificateButton({ item, onOpen, label }: { item: Evidence; onOpen: (e: Evidence) => void; label?: string }) {
  const tx = useTx();
  return (
    <button type="button" onClick={() => onOpen(item)} data-cursor="link"
      className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-caption hover:bg-white/5 transition-colors">
      <span aria-hidden>▢</span>{label ? tx(label) : tx("View certificate")}
      <span className="sr-only">: {tx(item.alt)}</span>
    </button>
  );
}

export function EvidenceDialog({ item, onClose }: { item: Evidence | null; onClose: () => void }) {
  const tx = useTx();
  return (
    <Dialog open={!!item} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-w-3xl border-white/10 bg-[#07101e] p-3 sm:p-5">
        <DialogTitle className="text-small pr-8">{item ? tx(item.caption ?? item.alt) : ""}</DialogTitle>
        {item && (
          <img src={item.src} alt={tx(item.alt)} className="max-h-[78vh] w-full rounded-lg object-contain bg-white/[0.03]" />
        )}
      </DialogContent>
    </Dialog>
  );
}
