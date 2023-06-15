import { Route } from "react-router-dom";
import Loginpage from "../pages/LoginPage";
import Registerpage from "../pages/RegisterPage";
import Homepage from "../pages/HomePage";
import Profilepage from "../pages/ProfilePage";
import ProtectedPage from "./protectedpage";

const routes = [
	<Route
		path="/login"
		element={
			<ProtectedPage guestOnly={true} needLogin={false}>
				<Loginpage />
			</ProtectedPage>
		}
	></Route>,
	<Route
		path="/register"
		element={
			<ProtectedPage guestOnly={true} needLogin={false}>
				<Registerpage />
			</ProtectedPage>
		}
	></Route>,
	<Route
		path="/"
		element={
			<ProtectedPage guestOnly={false} needLogin={true}>
				<Homepage />
			</ProtectedPage>
		}
	></Route>,
	<Route
		path="/profile"
		element={
			<ProtectedPage guestOnly={false} needLogin={true}>
				<Profilepage />
			</ProtectedPage>
		}
	></Route>,
];

export default routes;
