import { sum } from "./sum";

describe("Test sum function", () => {
  test("Positive Positive value", () => {
    let result = sum(10, 5)
    expect(result).toEqual(15);
  });
  test("Positive Negative value", () => {
    let result = sum(10, -5)
    expect(result).toEqual(5);
  });
  test("Negative Negative value", () => {
    let result = sum(-10, -5)
    expect(result).toEqual(-15);
  });
  test("Decimal value", () => {
    let result = sum(10, 0.5)
    expect(result).toEqual(10.5);
  });
});
