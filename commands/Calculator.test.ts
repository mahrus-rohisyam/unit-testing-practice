import { Calculator } from "./Calculator";

describe("Calculator can Calculate", () => {
  it("10 + 5 = 15", () => {
    expect(Calculator.add(10, 5)).toEqual(15);
  })
  it("10 - 5 = 5", () => {
    expect(Calculator.subtract(10, 5)).toEqual(5);
  })
  it("10 * 5 = 50", () => {
    expect(Calculator.multiply(10, 5)).toEqual(50);
  })
  it("10 / 5 = 2", () => {
    expect(Calculator.divide(10, 5)).toEqual(2);
  })
})