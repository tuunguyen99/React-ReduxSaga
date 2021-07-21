import { accountService } from "src/services";
export function initFacebookSdk() {
  const auth_response_change_callback = (res) => {
    console.log(res);
    if (res.authResponse) {
      accountService.authenticate(res.authResponse.accessToken);
    }
  };
  return new Promise((resolve) => {
    // wait for facebook sdk to initialize before starting the react app
    window.fbAsyncInit = function () {
      FB.init({
        appId: "3624530127647436",
        cookie: true,
        xfbml: true,
        version: "v11.0",
      });

      FB.AppEvents.logPageView();
      FB.Event.subscribe(
        "auth.authResponseChange",
        auth_response_change_callback
      );
      FB.getLoginStatus((res) => {
        console.log(res);
        if (res.authResponse) {
          accountService
            .authenticate(res.authResponse.accessToken)
            .then(resolve);
        } else {
          accountService.checkLogin()
        }
        resolve();
      });
    };

    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
    resolve();
  });
}
