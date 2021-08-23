/// <reference types="cypress"/>
import EnderecoPage from "../support/page-objects/endereco.page";
import dadosEndereco from "../fixtures/endereco.json";

describe("Funcionalidade Endereços - Faturamento e Entrega", () => {
  beforeEach(() => {
    cy.visit("minha-conta");
    cy.fixture("perfil").then((dados) => {
      cy.login(dados.usuario, dados.senha);
    });
  });

  it("Deve fazer cadastro de faturamento com sucesso", () => {
    EnderecoPage.editarEnderecoFaturamento(
      "Augusto",
      "Liberato",
      "SBT",
      "Brasil",
      "Av. Bergamota",
      "897",
      "São Paulo",
      "São Paulo",
      "03408070",
      "11999999978",
      "augusto@augusto.com"
    );

    cy.get(".woocommerce-message").should(
      "contain",
      "Endereço alterado com sucesso."
    );
  });
  it("Deve fazer cadastro de faturamento com sucesso - Usando arquivo de dados", () => {
    EnderecoPage.editarEnderecoFaturamento(
      dadosEndereco[1].nome,
      dadosEndereco[1].sobrenome,
      dadosEndereco[1].empresa,
      dadosEndereco[1].pais,
      dadosEndereco[1].endereco,
      dadosEndereco[1].numero,
      dadosEndereco[1].cidade,
      dadosEndereco[1].estado,
      dadosEndereco[1].cep,
      dadosEndereco[1].telefone,
      dadosEndereco[1].email
    );

    cy.get(".woocommerce-message").should(
      "contain",
      "Endereço alterado com sucesso."
    );
  });
});
