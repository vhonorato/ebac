const productViewScreen = require("../screens/productView.screen");

describe("Product List", () => {
  it("shoud list products", async () => {
    expect(await productViewScreen.product("Camisa Polo")).toExist();
    expect(await productViewScreen.productList()).toBeElementsArrayOfSize(10);
  });
});
