import { ArrowUpRight, Expand } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTx } from "@/lib/i18n/tx";
import type { Evidence, ShowcaseItem } from "@/lib/credentials";
import { LocaleLink } from "../locale-link";
import { CertificateButton } from "./EvidenceViewer";

type Props = { items: ShowcaseItem[]; onOpen: (item: Evidence) => void };

function ShowcaseImage({ item, onOpen, featured = false }: { item: ShowcaseItem; onOpen: Props["onOpen"]; featured?: boolean }) {
  const tx = useTx();
  const isCertificate = item.image.kind === "certificate";
  return (
    <Button
      variant="ghost"
      onClick={() => onOpen({ ...item.image, caption: item.title })}
      aria-label={`${tx("Open image")}: ${tx(item.image.alt)}`}
      title={tx("Open image")}
      data-cursor="link"
      className={`group relative block h-auto w-full overflow-hidden rounded-lg border border-border bg-secondary p-0 hover:bg-secondary ${featured ? "aspect-[4/3] sm:aspect-[3/2]" : "aspect-[4/3]"}`}
    >
      <img src={item.image.src} alt={tx(item.image.alt)} loading="lazy" decoding="async" width={800} height={600}
        className={`absolute inset-0 h-full w-full motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:scale-[1.025] ${isCertificate ? "object-contain p-4" : "object-cover"}`} />
      <span className="absolute bottom-3 right-3 flex size-10 items-center justify-center rounded-md border border-border bg-background/90 text-foreground" aria-hidden="true"><Expand /></span>
    </Button>
  );
}

function Caption({ item, onOpen, featured = false }: { item: ShowcaseItem; onOpen: Props["onOpen"]; featured?: boolean }) {
  const tx = useTx();
  return (
    <figcaption className={featured ? "flex min-w-0 flex-col justify-center py-2 lg:py-6" : "flex flex-1 flex-col pt-5"}>
      <span className="text-xs font-medium uppercase tracking-normal text-primary">{tx(item.category)}</span>
      <h3 className={`mt-3 font-semibold tracking-normal ${featured ? "text-2xl leading-snug sm:text-3xl" : "text-lg leading-snug"}`}>{tx(item.title)}</h3>
      <p className="mt-3 text-caption text-muted-foreground">{tx(item.meta)}</p>
      <p className={`mt-4 leading-relaxed text-muted-foreground ${featured ? "text-base" : "text-small"}`}>{tx(item.description)}</p>
      {item.certificates?.length ? <div className="mt-5 flex flex-wrap gap-2">{item.certificates.map((cert) => <CertificateButton key={cert.src} item={cert} onOpen={onOpen} />)}</div> : null}
    </figcaption>
  );
}

/** Image-led homepage selection; descriptions remain in the evidence registry. */
export function HomeCredentialsShowcase({ items, onOpen }: Props) {
  const tx = useTx();
  const [lead, ...supporting] = items;
  if (!lead) return null;
  return (
    <>
      <figure className="mt-9 grid items-stretch gap-6 border-y border-border py-6 sm:mt-12 lg:grid-cols-[1.55fr_1fr] lg:gap-10 lg:py-9">
        <ShowcaseImage item={lead} onOpen={onOpen} featured />
        <Caption item={lead} onOpen={onOpen} featured />
      </figure>
      <ul className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {supporting.map((item) => <li key={item.id} className="min-w-0"><figure className="flex h-full flex-col"><ShowcaseImage item={item} onOpen={onOpen} /><Caption item={item} onOpen={onOpen} /></figure></li>)}
      </ul>
      <div className="mt-9 flex flex-col gap-3 border-t border-border pt-7 sm:flex-row sm:flex-wrap">
        <Button asChild className="h-auto min-h-12 whitespace-normal px-5 py-3 text-left leading-relaxed">
          <LocaleLink to="/expertise" data-cursor="cta">{tx("See the full professional journey")}<ArrowUpRight aria-hidden="true" /></LocaleLink>
        </Button>
        <Button asChild variant="outline" className="h-auto min-h-12 whitespace-normal px-5 py-3 text-left leading-relaxed">
          <LocaleLink to="/media" data-cursor="link">{tx("All photographs & certificates")}<ArrowUpRight aria-hidden="true" /></LocaleLink>
        </Button>
      </div>
    </>
  );
}