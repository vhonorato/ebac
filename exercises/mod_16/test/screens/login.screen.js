const SELECTORS = {
  LOGIN_SCREEN: "~Login-screen",
  LOGIN_CONTAINER_BUTTON: "~button-login-container",
  SIGN_UP_CONTAINER_BUTTON: "~button-sign-up-container",
  LOGIN_BUTTON: "~button-LOGIN",
  SIGN_UP_BUTTON: "~button-SIGN UP",
  INPUT: "~input-email",
  PASSWORD: "~input-password",
  REPEAT_PASSWORD: "~input-repeat-password",
  ALERT_TITLE: 'android=new UiSelector().text("Success")',
  ALERT_MESSAGE: 'android=new UiSelector().text("You are logged in!")',
  ALERT_BUTTON: 'android=new UiSelector().text("OK")',
};

class LoginScreen {
  get loginContainerButon() {
    return $(SELECTORS.LOGIN_CONTAINER_BUTTON);
  }

  get signUpContainerButon() {
    return $(SELECTORS.SIGN_UP_CONTAINER_BUTTON);
  }

  get loginButton() {
    return $(SELECTORS.LOGIN_BUTTON);
  }

  get signUpButton() {
    return $(SELECTORS.SIGN_UP_BUTTON);
  }

  get email() {
    return $(SELECTORS.INPUT);
  }

  get password() {
    return $(SELECTORS.PASSWORD);
  }

  get repeatPassword() {
    return $(SELECTORS.REPEAT_PASSWORD);
  }

  get #alertTitle(){
    return $(SELECTORS.ALERT_TITLE);
  }

  get alertMessage(){
    return $(SELECTORS.ALERT_MESSAGE);
  }

  get #alerButton(){
    return $(SELECTORS.ALERT_BUTTON);
  }

  async getAlertTitle(){
    await this.#alertTitle.waitForExist();
    return await this.#alertTitle.getText();
  }

  async getAlertButton(){
    return await this.#alerButton.click();
  }
}

module.exports = new LoginScreen();
