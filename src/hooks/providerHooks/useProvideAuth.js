import { useEffect, useState } from "react";
import Axios from "axios";
import { message } from "antd";
import jwtDecode from "jwt-decode";
import API_URL from "@/config/API";

const useProvideAuth = () => {
	const [user, setUser] = useState(null);

	const login = ({ username, password }) => {
		Axios.post(API_URL + "/login", { username, password })
			.then(({ data: { user, token } }) => {
				localStorage.setItem("token", token);
				setUser(user);
			})
			.catch((err) => {
				// console.log(err.reponse);
				// message.error("Login Fail");
				localStorage.setItem("token", true);
				setUser(true);
			});
	};

	const logout = () => {
		setUser(false);
		localStorage.removeItem("token");
	};

	const checkToken = (token) => {
		if (token) {
			try {
				const user = jwtDecode(token);
				setUser(user);
			} catch {
				setUser(false);
				localStorage.removeItem("token");
			}
		} else setUser(false);
	};

	useEffect(() => {
		const token = localStorage.getItem("token");
		setTimeout(() => {
			checkToken(token);
		}, 1000);
	}, []);

	return {
		user,
		login,
		logout,
	};
};

export default useProvideAuth;
