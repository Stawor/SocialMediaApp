import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export default function Logout() {
	const navigate = useNavigate();
	const handleLogOut = () => {
		cookies.remove("token");
		cookies.remove("userId");
		navigate("/login");
	};
	return (
		<>
			<button onClick={handleLogOut}>Logout</button>
		</>
	);
}
