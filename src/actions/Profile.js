import { PROFILE_ACTION_TYPES } from "@/constants/actionTypes";

export const fetchProfileSuccess = (data) => ({
	type: PROFILE_ACTION_TYPES.FETCH_PROFILE,
	payload: data,
});
