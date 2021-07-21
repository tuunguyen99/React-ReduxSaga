import React from "react";
import { Form, Input, Button, Checkbox, Row, Col } from "antd";
import { apiLoginPass } from "src/apis";

const LoginForm = (props) => {
  const onFinish = (values) => {
    console.log("Success:", values);
    apiLoginPass(values.username,values.password);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
 
  return (
    <div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Tài khoản"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Mật khẩu"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="remember"
          valuePropName="checked"
          style={{ float: "left", whiteSpace: "nowrap" }}
        >
          <Checkbox>Nhớ mật khẩu</Checkbox>
        </Form.Item>
        <Form.Item style={{ float: "right" }}>
          <Button type="primary" htmlType="submit">
            Đăng nhập
          </Button>
        </Form.Item>
      </Form>
      <br/>
      <br/>
      <br/>
      <a style={{ float: "left" }} href="">
        Đăng ký tài khoản mới
      </a>
      <a style={{ float: "right" }} href="">
        Quên mật khẩu
      </a>
    </div>
  );
};

export default LoginForm;
