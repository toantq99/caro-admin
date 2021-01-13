import { combineReducers } from "redux";
import game from "./game";
import gameReplay from "./gameReplay";
import profile from "./profile";
import user from "./user";

export default combineReducers({
	user,
	game,
	profile,
	gameReplay,
});
