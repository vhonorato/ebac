/// <reference types="cypress"/>
var faker = require("faker");

describe("Funcionalidade Pré Cadastro", () => {
  beforeEach(() => {
    cy.visit("minha-conta");
  });

  it("Deve completar o pré cadastro com sucesso", () => {
    let firstNameFaker = faker.name.firstName();
    let lastNameFaker = faker.name.lastName();
    let emailFaker = faker.internet.email(firstNameFaker);

    cy.get("#reg_email").type(emailFaker);
    cy.get("#reg_password").type("!teste@teste$");
    cy.get(":nth-child(4) > .button").click();

    cy.get(".woocommerce-MyAccount-navigation-link--edit-account > a").click();
    cy.get("#account_first_name").type(firstnameFaker);
    cy.get("#account_last_name").type(lastNameFaker);
    cy.get(".woocommerce-Button").click();

    cy.get(".woocommerce-message").should(
      "contain",
      "Detalhes da conta modificados com sucesso."
    );
  });

  it.only('Deve completar o pré-cadastro com sucesso usando comandos customizados', () => {
    let firstNameFaker = faker.name.firstName();
    let lastNameFaker = faker.name.lastName();
    let emailFaker = faker.internet.email(firstNameFaker);

    cy.preCadastro(emailFaker, '6546651262', firstNameFaker, lastNameFaker);

    cy.get(".woocommerce-message").should(
      "contain",
      "Detalhes da conta modificados com sucesso."
    );
  });
});
