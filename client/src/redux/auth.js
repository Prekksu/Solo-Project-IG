import { auth_types } from "./types";

const init = {
	id: "",
	name: "",
	email: "",
	username: "",
};

function userReducer(state = init, action) {
	if (action.type == auth_types.login) {
		return {
			...state,
			...action?.payload,
		};
	} else {
		return init;
	}
	return state;
}

export default userReducer;
