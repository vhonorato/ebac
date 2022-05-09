import { group } from "k6";
import Login from "../request/login.request";
import User from "../request/user.request";
import data from "../data/users.json";

export const options = {
  stages: [
    { duration: '10s', target: 10 },
    { duration: '5s', target: 50 },
    { duration: '10s', target: 10 },
    { duration: '5s', target: 0 }
  ],
  thresholds: {
    http_req_duration: ['p(99) < 1000']
  }
}

export default function () {

  let login = new Login();
  let user = new User();

  group("login and get token", () => {
    login.access(data.userOK.user, data.userOK.pass);
  });
  
  group("list users", () => {
    user.list(login.getToken());
  });
}
