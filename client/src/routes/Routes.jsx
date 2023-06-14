import { Route } from "react-router-dom";
import Loginpage from "../pages/LoginPage";
import Registerpage from "../pages/RegisterPage";
import Homepage from "../pages/HomePage";

const routes = [
	<Route path="/login" element={<Loginpage />}></Route>,
	<Route path="/register" element={<Registerpage />}></Route>,
	<Route path="/" element={<Homepage />}></Route>,
];

export default routes;
