import React from "react";
import { Home, NotFound, Login } from "@/routers/lazyRoutes";
import { Redirect } from "react-router-dom";

const publicRoutes = [
	{
		key: "not-found",
		path: "/not-found",
		component: NotFound,
	},
	{
		key: "404",
		render: () => <Redirect to="/not-found" />,
	},
];

const nonUserRoutes = [
	{
		key: "login",
		path: "/login",
		component: Login,
	},
];

const privateRoutes = [
	{
		key: "home",
		path: "/",
		component: Home,
		exact: true,
	},
];

export { publicRoutes, privateRoutes, nonUserRoutes };
