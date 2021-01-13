// libs
// components
import AppLayout from "@/components/AppLayout";
import AuthenticatingIndicator from "@/components/AuthenticatingIndicator";
// routers
import { privateRoutes } from "@/routers";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import React from "react";
import { Route, Switch } from "react-router-dom";

const Main = () => {
	const { isLoading } = useAuth0();
	return isLoading ? (
		<AuthenticatingIndicator />
	) : (
		<Switch>
			<AppLayout>
				{privateRoutes.map((route) => (
					<Route
						{...route}
						component={withAuthenticationRequired(route.component)}
					/>
				))}
			</AppLayout>
		</Switch>
	);
};

export default Main;
