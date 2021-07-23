import axios from "axios";
import {
  URL_AUTHENTICATE,
  URL_LOGIN_WITH_PASS,
  URL_LOGIN_WITH_FB,
  URL_CREATE_PRODUCT,
  URL_DELETE_PRODUCT,
  URL_GET_LIST_PRODUCT,
  URL_EDIT_PRODUCT,
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
      alert(message);
    });
};
export const apiLoginFB = (token) => {
  return 1;
};

export const apiListProduct = () => {
  axios
    .get(URL_GET_LIST_PRODUCT)
    .then((res) => res.data)
    .catch((err) => err);
};

export const apiCreateProduct = (item) => {
  return axios
    .post(URL_CREATE_PRODUCT, {
      id: item.id,
      name: item.name,
      price: item.price,
      detail: item.about,
    })
    .then((res) => res.data.status === 200? res.data.result:"fail")
    .catch((err) => err);
};

export const apiEditProduct = (item) => {
  return axios
    .post(URL_EDIT_PRODUCT, {
      id: item.id,
      name: item.name,
      price: item.price,
      detail: item.detail,
    })
    .then((res) => res.data)
    .catch((err) => err);
};

export const apiDelProduct = (id) => {
  axios
    .post(URL_DELETE_PRODUCT, {
      id: id,
    })
    .then((res) => res.data)
    .catch((err) => err);
};
