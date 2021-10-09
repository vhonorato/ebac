const homeScreen = require("../screens/home.screen");
const loginScreen = require("../screens/login.screen");
const myStoreScreen = require("../screens/myStore.screen");

let user = "gerente";
let password = "GD*peToHNJ1#c$sgk08EaYJQ";
let urlLoja = "http://lojaebac.ebaconline.art.br/";

describe("Acessar Admin Panel", () => {
  it("Should login with valid credentials", async () => {
    await homeScreen.goToLogin();
    await loginScreen.setStoreAddress(urlLoja);
    await loginScreen.continue();
    await loginScreen.continueWithStoreCredentials();
    await loginScreen.login(user, password);
    await loginScreen.goTotwoFactorAuth();
    await loginScreen.twoFactorLogin(password);

    expect(await myStoreScreen.myStoreLogoIsDisplayed()).toBeTruthy();
    expect(await myStoreScreen.getStoreName()).toEqual("EBAC - Shop");
  });
});
