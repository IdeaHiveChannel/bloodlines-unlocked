# Fix: procedures 07–13 all show the angioplasty animation

## What's actually wrong

The homepage Procedures section renders all 13 procedures from the translation list, but it looks up each procedure's animation only inside the **featured** procedure set — and only 6 procedures are marked featured (angioplasty, thrombectomy, EVAR, laser ablation, TACE, microwave ablation).

For procedures 07–13 the lookup finds nothing and falls back to the angioplasty scene. That is exactly why coiling, thyroid ablation, genicular embolization, fistuloplasty, TIPS, PAE and UFE all show the same artery with the captions "Narrowed segment" and "Flow restored".

The dedicated scenes for those seven procedures already exist and are already correctly mapped in the content file — they are simply never reached.

## The fix

1. Look the storyboard up against the **full** procedure list (slug → storyboard), not the featured subset, so every procedure on the page gets its own scene.
2. Remove the silent angioplasty fallback: if a slug has no scene, render nothing rather than a wrong, misleading animation.
3. Walk all 13 procedures in the preview at desktop and mobile and confirm each shows its own anatomy, device and captions:
   - 07 Coiling — aneurysm sac, microcatheter at the neck, coils packing loop by loop, "Sac packed, parent artery preserved"
   - 08 Thyroid ablation — ultrasound gland view, electrode, nodule shrinking
   - 09 Genicular — knee joint, abnormal blush fading after microspheres
   - 10 Fistuloplasty — forearm fistula, outflow narrowing, balloon, thrill restored
   - 11 TIPS — cirrhotic liver, tract between portal and hepatic veins, covered stent
   - 12 PAE — bladder, enlarged gland, urethral channel opening
   - 13 UFE — uterus, both uterine arteries, fibroids shrinking

## Technical details

- `src/components/procedures/Procedures.tsx`: replace the `featuredProcedures.find(...) || "angioplasty"` lookup with a slug→storyboard map built from the full `procedures` export in `src/lib/content.ts`.
- `src/components/procedures/canvases/index.tsx`: drop the `?? Angioplasty` fallback so a missing mapping is visibly empty instead of wrong.
- No content, copy, or beat changes; no changes to the six procedures that already animate correctly.
