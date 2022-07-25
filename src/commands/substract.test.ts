import { substract } from "./substract";

describe("Test substract function", () => {
  test("Positive Positive value", () => {
    let result = substract(10, 5)
    expect(result).toEqual(5);
  });
  test("Positive Negative value", () => {
    let result = substract(10, -5)
    expect(result).toEqual(15);
  });
  test("Negative Negative value", () => {
    let result = substract(-10, -5)
    expect(result).toEqual(-5);
  });
  test("Decimal value", () => {
    let result = substract(10, 0.5)
    expect(result).toEqual(9.5);
  });
});
