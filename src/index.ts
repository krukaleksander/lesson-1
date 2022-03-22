export class TurboNumber {
  number: number;
  constructor(ourNumber: number) {
    this.number = ourNumber;
  }
  result() {
    return this.number;
  }
  divide(num: number) {
    if (num === 0) throw Error("cannot divide by 0");
    this.number = this.number / num;
    return this;
  }
  subtract(num: number) {
    // if (num === Number.MIN_SAFE_INTEGER) throw Error("number out of range");
    this.number = this.number - num;
    return this;
  }
}
