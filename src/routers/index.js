import { Game, Home, NotFound, User } from "@/routers/lazyRoutes";
import React from "react";
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

const privateRoutes = [
	{
		key: "user",
		path: "/user",
		component: User,
		exact: true,
	},
	{
		key: "game",
		path: "/game",
		component: Game,
		exact: true,
	},
	{
		key: "home",
		path: "/",
		component: Home,
		exact: true,
	},
];

export { publicRoutes, privateRoutes };
