import API_URL from "@/config/API";
import Axios from "axios";

export const AXIOS_INSTANCE = Axios.create({
	baseURL: API_URL,
});
