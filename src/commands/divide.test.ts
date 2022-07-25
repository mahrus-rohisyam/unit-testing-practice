import { divide } from "./divide";

describe("Test divide function", () => {
  test("Positive Positive value", () => {
    let result = divide(10, 5)
    expect(result).toEqual(2);
  });
  test("Positive Negative value", () => {
    let result = divide(10, -5)
    expect(result).toEqual(-2);
  });
  test("Negative Negative value", () => {
    let result = divide(-10, -5)
    expect(result).toEqual(2);
  });
  test("Decimal value", () => {
    let result = divide(10, 0.5)
    expect(result).toEqual(20);
  });
});
