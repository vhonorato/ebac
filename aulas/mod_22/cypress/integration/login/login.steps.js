/// <reference types="Cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
const { dashboardPage } = require("../../support/pages");

Given("I visit the EBAC Store", () => {
  cy.visit("/");
});
When("I log in with user {string} and pass {string}", (user, pass) => {
  cy.login(user, pass);
});
Then("the the admin dashboard page should be visible", () => {
  dashboardPage.siteName.should("be.visible");
});
