import { describe, it, expect } from "vitest";
import { buildIntro, composeReview, PREFER_NOT } from "./reviews";

describe("review draft", () => {
  it("omits the condition unless the patient opts in", () => {
    expect(buildIntro("consultation", "Varicose Veins / Venous Ulcers", false)).toBe("I consulted Dr. Mandeep Sagar.");
  });
  it("includes the condition when opted in", () => {
    expect(buildIntro("consultation", "Varicose Veins", true)).toBe("I consulted Dr. Mandeep Sagar regarding varicose veins.");
  });
  it("never names a condition for Prefer Not to Say", () => {
    expect(buildIntro("treatment", PREFER_NOT, true)).toBe("I was treated by Dr. Mandeep Sagar.");
  });
  it("adds only the patient's own words", () => {
    expect(composeReview("I consulted Dr. Mandeep Sagar.", " Clear explanation. ")).toBe("I consulted Dr. Mandeep Sagar. Clear explanation.");
  });
});
