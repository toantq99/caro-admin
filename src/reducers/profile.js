import { PROFILE_ACTION_TYPES } from "@/constants/actionTypes";

const initialState = {
	info: {
		win: 0,
		lost: 0,
		draw: 0,
		total: 0,
		point: 0,
	},
	gameHistory: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { type, payload }) => {
	switch (type) {
		case PROFILE_ACTION_TYPES.FETCH_PROFILE:
			return {
				...state,
				info: payload,
			};
		case PROFILE_ACTION_TYPES.FETCH_GAME_HISTORY:
			return {
				...state,
				gameHistory: payload,
			};
		default:
			return state;
	}
};
