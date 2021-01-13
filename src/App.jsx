// libs
// components
import authConfig from "@/config/auth.json";
import Main from "@/Main";
import store from "@/store";
import history from "@/utils/history";
import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const onRedirectCallback = (appState) => {
	history.push(
		appState && appState.returnTo ? appState.returnTo : window.location.pathname
	);
};
const App = () => (
	<Auth0Provider
		domain={authConfig.domain}
		clientId={authConfig.clientId}
		audience={authConfig.audience}
		redirectUri={window.location.origin}
		onRedirectCallback={onRedirectCallback}
	>
		<Provider store={store}>
			<BrowserRouter>
				<Main />
			</BrowserRouter>
		</Provider>
	</Auth0Provider>
);
export default App;
