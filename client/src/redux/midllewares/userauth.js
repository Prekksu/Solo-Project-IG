import { api } from "../../api/api";
import { auth_types } from "../types";

export function userLogin(account) {
	return async function (dispatch) {
		try {
			const token = await api
				.get("/Users/login", {
					params: {
						emna: account.emna,
						password: account.password,
					},
				})
				.then((res) => res.data.token);
			const userData = await api
				.get("/Users/token", {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				})
				.then((res) => res.data);
			if (userData) {
				await dispatch({
					type: auth_types.login,
					payload: userData,
				});
			}
			localStorage.setItem("token", JSON.stringify(token));
			return true;
		} catch (err) {
			console.log(err);
			return false;
		}
	};
}
