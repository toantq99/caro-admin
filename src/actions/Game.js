import { GAME_ACTION_TYPES } from "@/constants/actionTypes";

export const fetchGameListSuccess = (data) => ({
	type: GAME_ACTION_TYPES.FETCH_GAME_LIST,
	payload: data,
});

export const refreshGameList = () => ({
	type: GAME_ACTION_TYPES.REFRESH_GAME_LIST,
});
