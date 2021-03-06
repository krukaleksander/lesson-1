import { TurboNumber as TN } from "./index";

let tn: TN;

beforeEach(() => (tn = new TN(10)));

describe("number", function () {
  it("division", () => {
    tn.divide(5);
    expect(tn.result()).toBe(2);
  });
  it("subtract", () => {
    tn.subtract(5);
    expect(tn.result()).toBe(5);
  });
  it("division by 0", () => {
    expect(() => tn.divide(0)).toThrow("cannot divide by 0");
  });

  // it("subtract out of range", () => {
  //   const tn = new TN(Number.MIN_SAFE_INTEGER);
  //   expect(() => tn.subtract(1)).toThrow("number out of range");
  // });
  it("return -4", () => {
    const value = new TN(17).subtract(5).divide(-3).result();

    expect(value).toBe(-4);
  });
});
