const { expect } = require("@jest/globals");
const { somaMultiplos } = require("./ex03");

describe("Testes modulo 20 - 3:", () => {
  it("Positive test", () => {
    expect(somaMultiplos()).toBe(156361);
  });
});
