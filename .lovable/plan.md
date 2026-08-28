# Procedure animations: polish pass

Each of the 13 procedures now has its own scene. This pass tightens how they read and how they behave, without changing the procedure list, copy or clinical beats.

## 1. Captions become bilingual

Every scene caption ("Narrowed segment", "Sac packed", "Blush reduced", "Nodule shrinks, gland preserved", …) is currently hard-coded English, so the Malayalam site shows English inside the animations. Captions move into the translation dictionaries and each scene receives its labels through a small caption lookup keyed by storyboard, with parallel Malayalam strings.

Caption typography also gets a Malayalam-safe treatment: uppercase and wide letter-spacing are dropped for Malayalam, and long labels wrap to two lines instead of running off the frame.

## 2. Pacing tied to the beat track

Today every scene hard-codes its own ramp positions (0.18–0.46, 0.48–0.74, …) while the text track divides the scroll evenly by beat count, so on 5-beat procedures the visual runs slightly ahead of or behind the sentence it illustrates. Each scene declares its stages against beat indices instead of raw numbers, so stage N lands with beat N for every procedure regardless of beat count.

Result: the balloon inflates while the balloon beat is on screen, coils pack while the coil beat is on screen, and the final treated state is fully settled by the last beat rather than mid-way through it.

## 3. The final state holds

Several scenes fade their device and end captions out near the end of the scroll. The end state (open artery, deployed graft, excluded sac, shrunken nodule) is held to the very end of the section so the procedure ends on its result, not on an empty frame.

## 4. Motion quality

- Ease the ramps instead of using purely linear interpolation, so devices decelerate as they arrive rather than stopping dead.
- Device travel gets a subtle lead-in so wires and catheters appear to be pushed rather than drawn.
- Flow dashes slow down and lose contrast when a vessel is occluded, and recover after treatment — currently flow speed is constant regardless of the clinical state.
- Respect `prefers-reduced-motion`: infinite flow animations stop, scroll-driven stage changes remain.

## 5. Mobile and small-viewport sizing

- The animation frame currently clamps at `52svh`; on short landscape phones and small tablets this leaves the scene cramped against the beat block. Sizing becomes a clamp against both remaining height and column width, computed from the actual header and copy heights.
- Caption font size scales with frame size so labels stay legible in the compact mobile frame instead of shrinking to unreadable.
- Scroll length per procedure is tightened slightly on mobile so a procedure is a few flicks rather than a long drag.

## 6. Consistency sweep

Walk all 13 scenes at desktop, tablet and mobile in both languages and check: anatomy readable at the smallest frame, no element crossing the frame edge, exactly one or two captions on screen at a time, device visible whenever its beat is active, and the progress bar segments matching the visual stages.

## Technical details

- `src/components/procedures/canvases/shared.tsx`: add `useStage(progress, index, total)` beat-aligned ramp helpers, an eased variant of `useRamp`, a reduced-motion aware `Flow`, and a responsive `Caption` that takes a translation key.
- New `src/lib/i18n` entries for scene captions (English + Malayalam), consumed by a `useSceneCaptions(storyboard)` hook.
- Each of the 13 scene files: swap raw ramp constants for beat-index stages, hold the final state, replace literal caption text with keys.
- `src/components/procedures/Procedures.tsx`: pass beat count into the canvas, refine the frame sizing clamp and per-procedure scroll length.
- No content, routing or backend changes.
