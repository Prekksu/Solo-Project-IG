import { useDispatch } from "react-redux";
import { auth_types } from "../redux/types";
import { api } from "../api/api";

export default function AuthProvider({ children }) {
	const dispatch = useDispatch();
	async function refreshReader() {
		const token = JSON.parse(localStorage.getItem("token"));
		if (token) {
			const userData = await api
				.get("/user/token", {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				})
				.then((res) => res.data);

			await dispatch({
				type: auth_types.login,
				payload: userData,
			});
		}
	}
	refreshReader();

	return children;
}
