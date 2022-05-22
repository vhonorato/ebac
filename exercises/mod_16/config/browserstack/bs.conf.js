let bsConf = {
  user: process.env.BROWSERSTACK_USER,
  key: process.env.BROWSERSTACK_KEY,
  services: ["browserstack"],
};

module.exports = { bsConf };
