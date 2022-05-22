const SELECTORS = {
  TEXT_INPUT: "~text-input",
  INPUT_TEXT_RESULT: "~input-text-result",
  SWITCH: "~switch",
  SWITCH_TEXT: "~switch-text",
  DROPDOWN: 'android=new UiSelector().text("Select an item...")',
  IOSDROPDOWN:
    "-ios predicate string:type == 'XCUIElementTypeOther' && NAME CONTAINS 'Dropdown This app is awesome'",
  DROPDOWN_MENU: 'android=new UiSelector().text("This app is awesome")',
  BUTTON: 'android=new UiSelector().text("Active")',
  OK_BUTTON: 'android=new UiSelector().text("OK")',
  BUTTON_RESULT: 'android=new UiSelector().text("This button is active")',
};

class FormScreen {
  get #inputField() {
    return $(SELECTORS.TEXT_INPUT);
  }

  get #inputFieldResult() {
    return $(SELECTORS.INPUT_TEXT_RESULT);
  }

  get #switch() {
    return $(SELECTORS.SWITCH);
  }

  get #switchResult() {
    return $(SELECTORS.SWITCH_TEXT);
  }

  get #dropdown() {
    return $(SELECTORS.DROPDOWN);
  }

  get #iosDropdown() {
    return $(SELECTORS.IOSDROPDOWN);
  }

  get #dropdownMenu() {
    return $(SELECTORS.DROPDOWN_MENU);
  }

  get #button() {
    return $(SELECTORS.BUTTON);
  }

  get #okButton() {
    return $(SELECTORS.OK_BUTTON);
  }

  get #buttonResult() {
    return $(SELECTORS.BUTTON_RESULT);
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

  async iosDropdownClick() {
    await this.#iosDropdown.click();
  }

  async dropdownMenuClick() {
    await this.#dropdownMenu.click();
  }

  async buttonClick() {
    await this.#button.click();
  }

  async okButtonClick() {
    await this.#okButton.click();
  }

  async getOkButtonResult() {
    await this.#buttonResult.waitForExist();
    return await this.#buttonResult.getText();
  }
}

module.exports = new FormScreen();
