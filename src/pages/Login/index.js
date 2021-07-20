import React from "react";
import LoginForm from "./Form";
import { Card, message } from "antd";
import "./index.less";
import backgroundImage from "src/assets/background.jpg";
import logoImage from '../../assets/react.svg';
import LoginWithFB from "./LoginWithFB";

const PageLogin = (props) => {
  return (
    <div
      className="login-page"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Card className="login-form">
        <div className="header">
          <img src={logoImage} height="48px" alt="React Starter" />
          <h1>React App</h1>
          <h2>Đăng nhập</h2>
        </div>
        <LoginForm />
      </Card>
      <LoginWithFB/>
    </div>
  );
};

export default PageLogin;
