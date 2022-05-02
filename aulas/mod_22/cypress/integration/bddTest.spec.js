/// <reference types="Cypress" />

const { dashboardPage } = require("../support/pages");
const data = require("../fixtures/data.json");

describe("Access Admin Panel", () => {
  context("Given I visit EBAC Store", () => {
    before(() => {
      cy.visit("/");
    });
    context(
      `When I log in with user ${data.usuario} and pass ${data.senha}`,
      () => {
        beforeEach(() => {
          cy.login(data.usuario, data.senha);
        });
        it("The the admin dashboard page should be visible", () => {
          dashboardPage.siteName.should("be.visible");
        });
      }
    );
  });
});
