import { USER_ACTION_TYPES } from "@/constants/actionTypes";

const initialState = {
	list: [],
	shouldRefresh: 0,
	search: "",
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { type, payload }) => {
	switch (type) {
		case USER_ACTION_TYPES.FETCH_USER_LIST:
			return {
				...state,
				list: payload.users,
			};
		case USER_ACTION_TYPES.SEARCH_USER:
			return {
				...state,
				search: payload,
			};
		case USER_ACTION_TYPES.REFRESH_USER_LIST:
			return {
				...state,
				shouldRefresh: new Date().getTime(),
			};
		default:
			return state;
	}
};
