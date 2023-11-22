import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export default function Logout() {
	const navigate = useNavigate();
	const handleLogOut = async () => {
		cookies.remove("token", { path: "/" });
		cookies.remove("userId", { path: "/" });
		navigate("/login");
	};
	return (
		<>
			<button onClick={handleLogOut}>Logout</button>
		</>
	);
}
