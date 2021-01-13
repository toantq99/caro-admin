import { USER_ACTION_TYPES } from "@/constants/actionTypes";

export const fetchUserListSuccess = (data) => ({
	type: USER_ACTION_TYPES.FETCH_USER_LIST,
	payload: data,
});

export const refreshUserList = () => ({
	type: USER_ACTION_TYPES.REFRESH_USER_LIST,
});

export const searchUser = (value) => ({
	type: USER_ACTION_TYPES.SEARCH_USER,
	payload: value,
});
