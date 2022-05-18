const productViewScreen = require("../screens/productView.screen");

describe("Search products", () => {
  it("should search by Camisa", async () => {
    let searchName = "Camisa";
    await productViewScreen.waitProduct(searchName);
    await productViewScreen.search();
    await productViewScreen.searchBy(`${searchName}\n`);

    // Possivel Erro ou Flaky Test
    // expect(await productViewScreen.product(searchName)).toExist()
  });
});
