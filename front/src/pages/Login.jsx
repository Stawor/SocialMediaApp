import { useState, useContext } from "react";
import axios from "axios";

import Cookies from "universal-cookie";
import { UserContext } from "../contexts/user-context";

import { Link, Navigate, redirect, useNavigate } from "react-router-dom";
const cookies = new Cookies();

export default function Login() {
	const { user, setUser } = useContext(UserContext);
	const [error, setError] = useState("");
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		username: "",
		email: "",
		password: "",
	});
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post(
				`https://social-backend-main2.vercel.app/api/auth/login`,
				{
					username: formData.username,
					email: formData.email,
					password: formData.password,
				}
			);
			cookies.set("token", response.data.token);
			cookies.set("userId", response.data.user);
			setUser(null);

			if (cookies.get("token")) {
				navigate("/");
			}
		} catch (error) {
			setError(error.response.data);
		}
	};

	return (
		<div className=" flex w-full h-screen justify-center pt-36 bg-slate-100">
			<div className=" bg-white w-[20rem] h-[28rem] border flex justify-center rounded-lg items-center flex-col gap-10 text-xl">
				<h2>Test User</h2>
				<p>E-mail: test@gmail.com</p>
				<p>Password: test</p>
			</div>
			<form onSubmit={handleSubmit} className=" flex justify-center">
				<div className="bg-white flex flex-col gap-10 border w-[20rem] h-[28rem] rounded-lg">
					<div>
						<h1 className="text-4xl m-5 flex justify-center items-center">
							Log in
						</h1>
						<div className="text-red-600 text-2xl text-center">{error}</div>
					</div>
					<label
						htmlFor="username"
						className=" flex flex-col justify-center items-center"
					>
						E-mail:
						<input
							type="text"
							name="username"
							className="border border-black w-3/4 flex justify-center rounded-md h-10 p-4"
							onChange={(e) =>
								setFormData({ ...formData, email: e.target.value })
							}
						/>
					</label>
					<label
						htmlFor="username"
						className=" flex flex-col justify-center items-center"
					>
						Password:
						<input
							type="password"
							name="password"
							className="border border-black w-3/4 rounded-md h-10 p-4"
							onChange={(e) =>
								setFormData({ ...formData, password: e.target.value })
							}
						/>
					</label>
					<div className="flex flex-col justify-center items-center ">
						<button
							type="submit"
							className="w-3/4 bg-blue-500 flex items-center justify-center h-10 rounded-md text-white text-lg"
						>
							Login
						</button>
						<div className="m-4 text-sm flex gap-2">
							<p className=" text-gray-400">You dont have account? </p>
							<Link to="/register" className=" font-bold">
								Sing Up
							</Link>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
}
