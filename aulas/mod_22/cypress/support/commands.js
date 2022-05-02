/// <reference types="Cypress" />

Cypress.Commands.add("login", (user, password) => {
  const fd = new FormData();

  fd.append("log", user);
  fd.append("pwd", password);
  fd.append("wp-submit", "Acessar");
  fd.append("redirect_to", "wp-admin");
  fd.append("testcookie", "1");

  cy.request({
    url: "/wp-login.php",
    method: "POST",
    body: fd,
  }).then((response) => {
    response.headers["set-cookie"].forEach((cookie) => {
      const firstPart = cookie.split(";")[0];
      const parts = firstPart.indexOf("=");
      const key = firstPart.substring(0, parts);
      const value = firstPart.substring(parts + 1);
      cy.setCookie(key, value);
    });
  });
  cy.visit('/wp-admin');
});
