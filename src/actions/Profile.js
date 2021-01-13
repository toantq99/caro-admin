import { PROFILE_ACTION_TYPES } from "@/constants/actionTypes";

export const fetchProfileSuccess = (data) => ({
	type: PROFILE_ACTION_TYPES.FETCH_PROFILE,
	payload: data,
});

export const fetchGameHistorySuccess = (data) => ({
	type: PROFILE_ACTION_TYPES.FETCH_GAME_HISTORY,
	payload: data,
});
