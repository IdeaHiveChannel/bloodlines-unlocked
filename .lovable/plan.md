# Procedures: per-procedure animation system + viewport-aware layout

The procedure list, names, one-liners and clinical content stay as they are. What changes is the interaction model, the layout sizing, and the animation engine — today all 13 procedures share 6 generic storyboards (`angioplasty`, `thrombectomy`, `evar`, `laser`, `tace`, `ablation`, `coiling`, `embolization`), with `embolization` reused for prostate, fibroid, knee and TIPS, and `angioplasty` reused for fistuloplasty. That reuse is the root of the "everything looks the same" problem.

## 1. Section introduction

Keep the eyebrow "Procedures" and heading "Every procedure has its own story." Replace the supporting sentence (English and Malayalam) with:

> Advanced image-guided procedures are performed through a small access point, with real-time imaging guiding each step.

## 2. One storyboard per procedure

Split the shared storyboards into 13 distinct scenes, each with its own anatomy, device, imaging style, stage count and motion:

| Procedure | Setting / modality | Distinct mechanic |
|---|---|---|
| Angioplasty & stenting | Peripheral artery, angiographic | wire travels → balloon → plaque compressed → stent → flow |
| Mechanical thrombectomy | Cerebral vessel tree, angiographic | catheter reaches → retriever expands in clot → clot withdrawn out of frame → reperfusion |
| EVAR | Aorta + iliac bifurcation | delivery system → graft unsheathes → sac excluded |
| Endovenous laser ablation | Leg vein, ultrasound-style greyscale | fibre in vein → energy along segment → vein shrinks → flow reroutes |
| TACE | Liver with hepatic arterial tree | microcatheter into feeding branch → beads → supply drops |
| Microwave ablation | Liver, needle from skin | antenna into tumour → ablation zone grows past tumour margin |
| Cerebral aneurysm coiling | Intracranial artery + sac | microcatheter → coils loop in one by one → sac stops filling |
| Thyroid nodule ablation | Thyroid, ultrasound-style | electrode into nodule → treatment zone → nodule gradually smaller |
| Genicular artery embolization | Knee with genicular branches | blush → microcatheter → particles → blush fades |
| Dialysis fistuloplasty | Arm fistula, outflow stenosis | puncture → wire → balloon → access flow restored |
| TIPS | Portal + hepatic veins | jugular access path → tract created → covered stent → flow diverted |
| Prostate artery embolization | Prostate + urethra | prostatic artery → particles → gradual shrinkage, urethra opens |
| Uterine fibroid embolization | Uterus with separate fibroid | uterine artery → particles into fibroid feeders only → fibroid shrinks, uterus unchanged |

Beat counts vary per procedure (5–6), matching the sequences in the brief; beat text in `en.ts`/`ml.ts` is aligned to the new visuals.

Wording corrections: "NO ENDOLEAK" becomes "Aneurysm sac excluded from direct blood flow"; no instant ulcer healing (laser), no instant pain relief (knee), no instant ascites resolution (TIPS), no sexual-function guarantee (prostate), gradual shrinkage for thyroid/prostate/fibroid.

## 3. Continuous scroll-driven motion, not slideshow beats

The beat system stays as the text track, but visuals become one continuous timeline: elements persist and transform across beats instead of fading in and out per scene. Devices travel along real path geometry (`getPointAtLength` on the vessel path) so a wire physically crosses the narrowing. Beat text cross-fades over the running visual, and the final state (open artery, flowing blood, deployed graft) remains visible at the end of the scroll.

## 4. Viewport-aware sizing

Desktop: two-column sticky frame — left holds number, name, one-liner and the active beat text; right holds the animation. Animation size is derived from available height (`min(available viewport height, column width)`) rather than any fixed pixel height, so the pinned panel always fits between the header and the next procedure. Scroll length per procedure shortens so the next procedure arrives without dead space.

Mobile: name and one-liner first, then a compact animation, then the beat text below it — with a shorter scroll distance per procedure so a single procedure is a few flicks, not a marathon.

## 5. Visual language

Restrained angiography- and ultrasound-inspired rendering: asymmetric vessels with natural taper and branching, muted contrast-on-dark for arterial scenes, greyscale sector for ultrasound scenes, one or two labels max per stage, no neon tubes, no particle fields, no heavy glow or gradients.

## 6. Real clinical material vs animation

No overlap between sections: Procedures explains mechanism (animation); Evidence shows before/after result; Inside the Work shows the real environment. Where a supplied clinical film exists for a procedure (coiling, thrombectomy, EVAR, vein ablation), the detail page keeps the real video as evidence beneath the explanatory animation rather than replacing it.

## Technical notes

- `src/components/procedures/canvases.tsx` splits into `src/components/procedures/canvases/` — one file per storyboard plus a shared `Frame`/path-travel/flow helpers module.
- `Storyboard` union in `src/lib/content.ts` expands to 13 keys; each procedure gets its own key.
- `Procedures.tsx`: scroll height per procedure becomes beat-count-aware and clamped; animation sized with `svh`/`dvh`-based clamps instead of fixed max widths.
- Beat strings updated in `src/lib/i18n/en.ts` and `ml.ts` (parallel Malayalam, no English left over).
- No backend, data, or routing changes.
