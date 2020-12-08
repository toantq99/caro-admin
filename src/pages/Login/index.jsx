// libs
import useAuth from "@/hooks/useAuth";
import { Button, Form, Input } from "antd";
import React from "react";
// components
// others
import "./styles.scss";

const Login = () => {
	const { login } = useAuth();

	return (
		<div className="login-wrapper">
			<div className="login-wrapper-inner">
				<h1>Login</h1>
				<Form
					labelCol={{ span: 6 }}
					wrapperCol={{ span: 18 }}
					labelAlign="left"
					onFinish={({ username, password }) => login({ username, password })}
				>
					<Form.Item
						label="Username"
						name="username"
						rules={[{ required: true, message: "Please input your username!" }]}
						hasFeedback
					>
						<Input />
					</Form.Item>
					<Form.Item
						label="Password"
						name="password"
						rules={[{ required: true, message: "Please input your password!" }]}
						hasFeedback
					>
						<Input.Password />
					</Form.Item>
					<Button type="primary" htmlType="submit" className="btn-login">
						Login
					</Button>
				</Form>
			</div>
		</div>
	);
};
export default Login;
