// import React from "react";
// import { useState, useContext } from "react";
// import axios from "axios";
// import Verified from "./verified";
// import Cookies from "universal-cookie";
// import { UserContext } from "../contexts/user-context";
// import Posts from "../components/HomeFeed";
// import { Link, Navigate, redirect, useNavigate } from "react-router-dom";

// const cookies = new Cookies();

// export default function LoginApi() {
// 	const [formData, setFormData] = useState({
// 		username: "",
// 		email: "",
// 		password: "",
// 	});
// 	const handleSubmit = async (e) => {
// 		e.preventDefault();
// 		try {
// 			const response = await axios.post(
// 				"http://localhost:3000/api/auth/login",
// 				{
// 					username: formData.username,
// 					email: formData.email,
// 					password: formData.password,
// 				}
// 			);
// 			//set Cookie
// 			cookies.set("token", response.data.token);
// 			cookies.set("userId", response.data.user);

// 			//set userId using context
// 		} catch (error) {}
// 	};

// 	return { handleSubmit, formData, setFormData };
// }
