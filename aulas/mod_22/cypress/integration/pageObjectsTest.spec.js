/// <reference types="Cypress" />

const {loginPage, dashboardPage} = require("../support/pages")
const data = require('../fixtures/data.json');

describe("Access Admin Panel", () => {
    beforeEach(() => {
        cy.visit("/wp-admin");
    });
  it("should login with valid credentials", () => {
      loginPage.login(data.usuario, data.senha);

      dashboardPage.siteName.should("be.visible");
  });
});
