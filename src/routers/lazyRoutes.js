import { lazy } from "react";

const delayImport = (ms = 500) => (promise) =>
	promise.then(
		(data) =>
			new Promise((resolve) => {
				setTimeout(() => resolve(data), ms);
			})
	);

export const Home = lazy(() => delayImport()(import("@/pages/Home")));
export const User = lazy(() => delayImport()(import("@/pages/User")));
export const Game = lazy(() => delayImport()(import("@/pages/Game")));
export const Profile = lazy(() => delayImport()(import("@/pages/Profile")));
export const NotFound = lazy(() => import("@/pages/NotFound"));
