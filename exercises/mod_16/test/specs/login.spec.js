const homeScreen = require("../screens/home.screen");
const loginScreen = require("../screens/login.screen");

describe("WebdriverIO and Appium, when interacting with a login form,", () => {
  it("should be able login successfully", async () => {
    await homeScreen.goToLogin();
    await loginScreen.email.setValue("test@webdriver.io");
    await loginScreen.password.setValue("Test1234!");
    await loginScreen.loginButton.click();

    //expect(await loginScreen.getAlertTitle()).toEqual("Success");


  });
});
