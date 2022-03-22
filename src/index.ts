export class TurboNumber {
  number: number;
  constructor(ourNumber: number) {
    this.number = ourNumber;
  }
  result() {
    return this.number;
  }
  divide(num: number) {
    this.number = this.number / num;
  }
  subtract(num: number) {
    this.number = this.number - num;
  }
}
