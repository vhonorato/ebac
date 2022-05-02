import { mount } from "@cypress/vue";
import HelloWorld from "./HelloWorld.vue";

describe("Componente HelloWorld", () => {
  it("verifica a mensagem do componente", () => {
    const msg = "Meu teste de Componente";
    mount(HelloWorld, {
      propsData: {
        msg,
      },
    });

    cy.get("h1").should("have.text", msg);
  });
});
