// libs
import useAuth from "@/hooks/useAuth";
import React from "react";
// components
// others
import "./styles.scss";

const Home = () => {
	const {
		user: { userName },
		logout,
	} = useAuth();
	return (
		<div className="home-wrapper">
			<button onClick={() => logout()}>Logout</button>
			Welcome, {userName}
		</div>
	);
};
export default Home;
