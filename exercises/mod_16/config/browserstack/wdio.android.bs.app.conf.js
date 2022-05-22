const { generalConf } = require("../general/general.conf");
const { bsConf } = require("./bs.conf");

require("dotenv").config();

exports.config = {
  ...generalConf,
  ...bsConf,
  specs: ["./test/specs/android/**/*spec.js"],
  capabilities: [
    {
      app: process.env.ANDROID_APP_ID,
      device: "Samsung Galaxy A51",
      os_version: "10.0",
      project: "Exercício Módulo 17",
      build: "1",
      name: "form and login tests",
    },
  ],
};
