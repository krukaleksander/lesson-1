import { TurboNumber as TN } from "./index";

describe("number", function () {
  it("division", () => {
    const tn = new TN(10);
    tn.divide(5);
    expect(tn.result()).toBe(2);
  });
  it("subtract", () => {
    const tn = new TN(10);
    tn.subtract(5);
    expect(tn.result()).toBe(5);
  });
  it("division by 0", () => {
    const tn = new TN(10);
    expect(() => tn.divide(0)).toThrow("cannot divide by 0");
  });

  it("subtract by out of range", () => {
    const tn = new TN(Number.MIN_SAFE_INTEGER);
    expect(() => tn.subtract(1)).toThrow("number out of range");
  });
});
