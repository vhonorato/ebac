/// <reference types="cypress"/>

describe("Funcionalidade Página de produtos", () => {
  var quantidade = 3;
  beforeEach(() => {
    cy.visit("produtos");
  });

  it("Deve selecionar um produto da lista", () => {
    cy.get('[class="product-block grid"]').first().click();
  });

  it("Deve adicionar um produto ao carrinho", () => {
    cy.get('[class="product-block grid"]')
      .contains("Ariel Roll Sleeve Sweatshirt")
      .click();
    cy.get(".button-variable-item-M").click();
    cy.get(".button-variable-item-Purple").click();
    cy.get(".input-text").clear().type(quantidade);
    cy.get(".single_add_to_cart_button").click();

    cy.get(".dropdown-toggle > .mini-cart-items").should("contain", quantidade);
    cy.get(".woocommerce-message").should(
      "contain",
      quantidade +
        " × “Ariel Roll Sleeve Sweatshirt” foram adicionados no seu carrinho."
    );
  });

  it("Deve adicionar produtos ao carrinho - Usando comando customizado", () => {
    cy.addProdutos("Ariel Roll Sleeve Sweatshirt", "M", "Purple", quantidade);

    cy.get(".dropdown-toggle > .mini-cart-items").should("contain", quantidade);
    cy.get(".woocommerce-message").should(
      "contain",
      quantidade +
        " × “Ariel Roll Sleeve Sweatshirt” foram adicionados no seu carrinho."
    );
  });
});
