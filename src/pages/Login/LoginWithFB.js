import React from "react";

const LoginWithFB = (props) => {
  return (
    <div align="center" style={{ marginTop: "20px" }}>
      <div
        className="fb-login-button"
        data-width=""
        data-size="large"
        data-button-type="continue_with"
        data-layout="default"
        data-auto-logout-link="false"
        data-use-continue-as="false"
      ></div>
    </div>
  );
};

export default LoginWithFB;
