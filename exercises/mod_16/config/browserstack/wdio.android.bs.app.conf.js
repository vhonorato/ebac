require("dotenv").config();

exports.config = {
  user: process.env.BROWSERSTACK_USER,
  key: process.env.BROWSERSTACK_KEY,
  specs: ["./test/specs/**/*.spec.js"],
  framework: "mocha",

  services: ["browserstack"],
  capabilities: [
    {
      app: process.env.BROWSERSTACK_APP,
      device: "Samsung Galaxy A51",
      os_version: "10.0",
      project: "Exercício Módulo 17",
      build: "1",
      name: "form and login tests",
    },
  ],
  waitforTimeout: 20000,
  mochaOpts: {
    timeout: 300000,
  },
};
