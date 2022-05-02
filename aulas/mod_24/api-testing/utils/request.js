const request = require("supertest");

let getAccessToken = (username, password) => {
  return request("http://localhost:3000/api")
    .post("/login")
    .send({ username: username, password: password })
    .set("Accept", "application/json")
    .then((response) => response.body.accessToken);
};

module.exports = { getAccessToken };
