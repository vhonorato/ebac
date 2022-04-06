const { expect } = require("@jest/globals");
const { mdc } = require("./ex01.js");

describe("Testes modulo 20 - 1:", () => {
  it("Positive test", () => {
    expect(mdc(12, 6)).toBe(6);
    expect(mdc(100, 10)).toBe(10);
    expect(mdc(70, 7)).toBe(7);
  });
});
