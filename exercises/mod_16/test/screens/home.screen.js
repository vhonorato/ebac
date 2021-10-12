const SELECTORS = {
  HOME: "~Home",
  WEBVIEW: "~Webview",
  LOGIN: "~Login",
  FORMS: "~Forms",
  SWIPE: "~Swipe",
  DRAG: "~Drag",
}

class HomeScreen {
  get #enterHome() {
    return $(SELECTORS.HOME);
  }

  get #enterWebview() {
    return $(SELECTORS.WEBVIEW);
  }

  get #enterLogin() {
    return $(SELECTORS.LOGIN);
  }

  get #enterForms() {
    return $(SELECTORS.FORMS);
  }

  get #enterSwipe() {
    return $(SELECTORS.SWIPE);
  }

  get #enterDrag() {
    return $(SELECTORS.DRAG);
  }

  async goToHome() {
    await this.#enterHome.click();
  }

  async goToWebview() {
    await this.#enterWebview.click();
  }

  async goToLogin() {
    await this.#enterLogin.click();
  }

  async goToForms() {
    await this.#enterForms.click();
  }

  async goToSwipe() {
    await this.#enterSwipe.click();
  }

  async goToDrag() {
    await this.#enterDrag.click();
  }
}

module.exports = new HomeScreen();
