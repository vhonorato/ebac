/// <reference types="Cypress" />

const { dashboardPage } = require("../support/pages");
const data = require("../fixtures/data.json");

describe("Access Admin Panel", () => {
  before(() => {
    cy.task("tabNavigation",{user: data.usuario, pass: data.senha});
  });

  beforeEach(() => {
    cy.visit("/wp-admin");
  });

  it("The the admin dashboard page should be visible", () => {
    dashboardPage.siteName.should("be.visible");
  });
});
