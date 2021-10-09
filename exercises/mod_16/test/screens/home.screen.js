class HomeScreen {
  get #enterHome() {
    return $("~Home");
  }

  get #enterWebview() {
    return $("~Webview");
  }

  get #enterLogin() {
    return $("~Login");
  }

  get #enterForms() {
    return $("~Forms");
  }

  get #enterSwipe() {
    return $("~Swipe");
  }

  get #enterDrag() {
    return $("~Drag");
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
