const formScreen = require("../../screens/form.screen");
const homeScreen = require("../../screens/home.screen");
const loginScreen = require("../../screens/login.screen");

describe("Interacting with a Form screen", async () => {
  it("should be able to fill the form", async () => {
    await homeScreen.goToForms();
    await formScreen.enterText("Exercicio Modulo 16");
    await formScreen.switchClick();
    await formScreen.iosDropdownClick();
  });
});
