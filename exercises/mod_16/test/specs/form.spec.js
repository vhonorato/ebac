const formScreen = require("../screens/form.screen");
const homeScreen = require("../screens/home.screen");
const loginScreen = require("../screens/login.screen");

describe("", async () => {
  it("", async () => {
    await homeScreen.goToForms();
    await formScreen.enterText("Exercicio Modulo 16");
    await formScreen.switchClick();
    await formScreen.dropdownClick();
    await formScreen.dropdownMenuClick();
    await formScreen.buttonClick();

    expect(await formScreen.getOkButtonResult()).toEqual(
      "This button is active"
    );

    await formScreen.okButtonClick();

    expect(await formScreen.getInputField()).toEqual("Exercicio Modulo 16");
    expect(await formScreen.getSwitchState()).toEqual(
      "Click to turn the switch OFF"
    );
  });
  
  it("should be able login successfully", async () => {
    await homeScreen.goToLogin();
    await loginScreen.email.setValue("test@webdriver.io");
    await loginScreen.password.setValue("Test1234!");
    await loginScreen.loginButton.click();

    expect(await loginScreen.getAlertTitle()).toEqual("Success");


  });
});
