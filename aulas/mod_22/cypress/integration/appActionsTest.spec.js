/// <reference types="Cypress" />

const { loginPage, dashboardPage } = require("../support/pages");
const data = require("../fixtures/data.json");

describe("Access Admin Panel", () => {
  beforeEach(() => {
    cy.login(data.usuario, data.senha);
  });
  it("should login with valid credentials", () => {

    dashboardPage.siteName.should("be.visible");
  });
});
