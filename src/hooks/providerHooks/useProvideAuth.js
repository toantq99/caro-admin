import { useEffect, useState } from "react";
import Axios from "axios";
import { message } from "antd";
import jwtDecode from "jwt-decode";
import API_URL from "@/config/API";

const useProvideAuth = () => {
	const [user, setUser] = useState(null);

	const login = ({ userName, password }) => {
		Axios.post(API_URL + "/admins/login", { userName, password })
			.then(({ data: { token, ...user } }) => {
				localStorage.setItem("token", token);
				setUser(user);
			})
			.catch(({ response }) => {
				response && response.data.message
					? message.error(response.data.message)
					: message.error("Login Fail");
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
		}, 500);
	}, []);

	return {
		user,
		login,
		logout,
	};
};

export default useProvideAuth;
