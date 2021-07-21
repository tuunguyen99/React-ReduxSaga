import { BehaviorSubject } from "rxjs";
import { apiAuthenticate } from "../apis";
import { history } from "src/helpers";

const accountSubject = new BehaviorSubject(null);

export const accountService = {
  loginWithFB,
  loginWithPass,
  authenticate,
  checkLogin,
  account: accountSubject.asObservable(),
  get accountValue() {
    return accountSubject.value;
  },
};
async function checkLogin() {
    const token = localStorage.getItem("token");
    if (token) {
      console.log(token);
      accountService.authenticate(token);
    } else{
        console.log("k có token");
    }
}
async function loginWithFB(authResponse) {
  authenticate(authResponse.accessToken);
  const { from } = history.location.state || { from: { pathname: "/" } };
  history.push(from);
}
async function loginWithPass(username, password) {
  const { from } = history.location.state || { from: { pathname: "/" } };
  history.push(from);
}

async function authenticate(accessToken) {
  const res = await apiAuthenticate(accessToken);
  const account = res;
  accountSubject.next(account);
  const { from } = history.location.state || { from: { pathname: "/" } };
  history.push(from);
  return account;
}
