import { multiply } from "./multiply";

describe("Test multiply function", () => {
  test("Positive Positive value", () => {
    let result = multiply(10, 5)
    expect(result).toEqual(50);
  });
  test("Positive Negative value", () => {
    let result = multiply(10, -5)
    expect(result).toEqual(-50);
  });
  test("Negative Negative value", () => {
    let result = multiply(-10, -5)
    expect(result).toEqual(50);
  });
  test("Decimal value", () => {
    let result = multiply(10, 0.5)
    expect(result).toEqual(5);
  });
});
