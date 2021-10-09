class FormScreen {
  get #inputField() {
    return $("~text-input");
  }

  get #inputFieldResult() {
    return $("~input-text-result");
  }

  get #switch() {
    return $("~switch");
  }

  get #switchResult() {
    return $("~switch-text");
  }

  get #dropdown() {
    return $('android=new UiSelector().text("Select an item...")');
  }

  get #dropdownMenu() {
    return $('android=new UiSelector().text("This app is awesome")');
  }

  get #button() {
    return $('android=new UiSelector().text("Active")');
  }

  get #okButton() {
    return $('android=new UiSelector().text("OK")');
  }

  get #buttonResult(){
      return $('android=new UiSelector().text("This button is active")')
  }

  async enterText(text) {
    await this.#inputField.setValue(text);
  }

  async getInputField() {
    return await this.#inputFieldResult.getText();
  }

  async switchClick() {
    await this.#switch.click();
  }

  async getSwitchState() {
    return await this.#switchResult.getText();
  }

  async dropdownClick() {
    await this.#dropdown.click();
  }

  async dropdownMenuClick() {
    await this.#dropdownMenu.click();
  }

  async buttonClick(){
      await this.#button.click();
  }

  async okButtonClick(){
      await this.#okButton.click();
  }

  async getOkButtonResult() {
    await this.#buttonResult.waitForExist();
    return await this.#buttonResult.getText();
  }
}

module.exports = new FormScreen();
