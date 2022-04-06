const { expect } = require("@jest/globals");
const { maiorMenorIndice } = require("./ex02");

describe("Testes modulo 20 - 2:", () => {
  it("Positive test", () => {
    expect(maiorMenorIndice()).toStrictEqual([2, 15]);
  });
});
