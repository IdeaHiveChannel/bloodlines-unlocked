export const regionOrder = [
  "brain",
  "eye",
  "carotid",
  "thyroid",
  "chest",
  "abdomen",
  "liver",
  "kidney",
  "arms",
  "pelvis",
  "knee",
  "legs",
  "veins",
] as const;

export type Region = (typeof regionOrder)[number];

export const regionLabels: Record<Region, string> = {
  brain: "Brain",
  eye: "Eye",
  carotid: "Carotid",
  thyroid: "Thyroid",
  chest: "Aorta & chest",
  abdomen: "Abdomen",
  liver: "Liver",
  kidney: "Kidneys",
  arms: "Arms — dialysis access",
  pelvis: "Pelvis",
  knee: "Knee",
  legs: "Lower limbs",
  veins: "Veins",
};

export type Condition = {
  slug: string;
  name: string;
  region: Region;
  intervention: string;
  intro: string;
  symptoms: string[];
  treatments: string[];
};

export const conditions: Condition[] = [
  // Keeping existing content and updating regions...
