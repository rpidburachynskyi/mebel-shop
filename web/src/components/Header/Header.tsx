import React from "react";
import { Breadcrumb, Layout, Menu } from "antd";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";

import SubMenu from "antd/lib/menu/SubMenu";
import classes from "./Header.module.scss";

const Header = () => {
	return (
		<Layout.Header
			style={{
				height: 64 + 22,
				background: "white",
				padding: 0,
			}}
			color="white"
		>
			<Menu
				theme="dark"
				mode="horizontal"
				defaultSelectedKeys={["2"]}
				style={{ height: 64 }}
			>
				<SubMenu title="Каталог">
					<Menu.Item>Дивани</Menu.Item>
					<Menu.Item>Ліжка</Menu.Item>
					<Menu.Item>Кухні</Menu.Item>
				</SubMenu>
				<Menu.Item key="2">nav 2</Menu.Item>
			</Menu>
			<Breadcrumb style={{ padding: "0 10px" }}>
				<Breadcrumb.Item href="">
					<HomeOutlined />
				</Breadcrumb.Item>
				<Breadcrumb.Item href="">
					<UserOutlined />
					<span>Application List</span>
				</Breadcrumb.Item>
				<Breadcrumb.Item>Application</Breadcrumb.Item>
			</Breadcrumb>
		</Layout.Header>
	);
};

export default Header;
