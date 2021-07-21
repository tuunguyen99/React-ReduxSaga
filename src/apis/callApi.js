import axios from "axios";
import {
  URL_AUTHENTICATE,
  URL_LOGIN_WITH_PASS,
  URL_LOGIN_WITH_FB,
} from "./ip_config";
import { history } from "src/helpers";
import { accountService } from "src/services";

export const apiAuthenticate = (token) => {
  return 1;
};

export const apiLoginPass = (username, password) => {
  axios
    .post(URL_LOGIN_WITH_PASS, {
      email: username,
      password,
    })
    .then((res) => {
      console.log(res.data);
      if (res.data.status === 200) {
        localStorage.setItem("token", res.data.access_token);
        accountService.authenticate(res.data.access_token);
      }
      const message = res.data.msg;
      alert(message)
    });
};

export const apiLoginFB = (token) => {
  return 1;
};
