// libs
import { useAuth0 } from "@auth0/auth0-react";
import { Button, Layout, Menu } from "antd";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./style.scss";

const { Header, Content } = Layout;

const AppLayout = ({ children }) => {
	const { logout } = useAuth0();
	const { push } = useHistory();

	return (
		<Layout>
			<Header
				className="header"
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<Link to="/">
					<h1 style={{ color: "white", margin: 0 }}>Carona Admin</h1>
				</Link>

				<Button type="link" style={{ color: "white" }} onClick={logout}>
					Đăng xuất
				</Button>
			</Header>
			<Layout>
				<Layout.Sider width={200} className="site-layout-background">
					<Menu
						mode="inline"
						style={{ height: "100%", borderRight: 0 }}
						defaultSelectedKeys={["0"]}
					>
						<Menu.Item key="0" onClick={() => push("/")}>
							Dashboard
						</Menu.Item>
						<Menu.Item key="1" onClick={() => push("/user")}>
							User
						</Menu.Item>
						<Menu.Item key="2" onClick={() => push("/game")}>
							Game
						</Menu.Item>
					</Menu>
				</Layout.Sider>
				<Layout className="layout-content">
					<Content
						className="site-layout-background"
						style={{
							height: "100%",
						}}
					>
						{children}
					</Content>
				</Layout>
			</Layout>
		</Layout>
	);
};

export default AppLayout;
