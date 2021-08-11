/// <reference types="cypress"/>

describe("Funcionalidade Buscar", () => {
  beforeEach(() => {
    cy.visit("http://lojaebac.ebaconline.art.br/produtos/");
  });
  it("Deve buscar um item existente na loja", () => {
    var search =
      ".search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > ";
    var searchBar = search + ".select-category > .SumoSelect > ";
    
    cy.get(searchBar + ".CaptionCont > span").click();
    cy.get(
      searchBar + ".optWrapper > .options > :nth-child(3) > label"
    ).click();
    cy.get(search + ".tbay-search").type("shirt");
    cy.get(search + ".button-group > .button-search").click();

    cy.get(".page-title").should("contain", "shirt");
  });
});
