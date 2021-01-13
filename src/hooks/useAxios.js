import API_URL from "@/config/API";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useEffect } from "react";

const AXIOS_INSTANCE = axios.create({
	baseURL: API_URL,
});

const useAxios = () => {
	const { getAccessTokenSilently, isAuthenticated } = useAuth0();
	useEffect(() => {
		if (isAuthenticated) {
			AXIOS_INSTANCE.interceptors.request.use(
				async (config) => ({
					...config,
					headers: {
						...config.headers,
						Authorization: `Bearer ${await getAccessTokenSilently()}`,
					},
				}),
				(error) => Promise.reject(error)
			);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isAuthenticated]);

	return AXIOS_INSTANCE;
};

export default useAxios;
