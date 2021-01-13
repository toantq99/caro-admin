// libs
// components
import AppLayout from "@/components/AppLayout";
import AuthenticatingIndicator from "@/components/AuthenticatingIndicator";
import LoadingIndicator from "@/components/LoadingIndicator";
// routers
import { privateRoutes } from "@/routers";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";

const Main = () => {
	const { isLoading } = useAuth0();

	return isLoading ? (
		<AuthenticatingIndicator />
	) : (
		<Switch>
			<AppLayout>
				<Suspense fallback={<LoadingIndicator />}>
					{privateRoutes.map((route) => (
						<Route
							{...route}
							component={withAuthenticationRequired(route.component)}
						/>
					))}
				</Suspense>
			</AppLayout>
		</Switch>
	);
};

export default Main;
