/// <reference types="cypress"/>

describe("Funcionalidade lista de desejos", () => {
  beforeEach(() => {
    cy.visit("http://lojaebac.ebaconline.art.br/produtos/");
  });
  it("Deve adicionar um produto na lista de desejos", () => {
    cy.get('[class="product-block grid"]')
      .contains("Ariel Roll Sleeve Sweatshirt")
      .click();
      cy.get('.woocommerce-product-details__short-description > p').click();
      cy.get('.add_to_wishlist').click();

    cy.get(":nth-child(2) > .text-skin > .count_wishlist").should("contain", 1);
  });
});
