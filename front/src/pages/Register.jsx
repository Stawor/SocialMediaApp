import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Register() {
	const [error, setError] = useState("");
	const [succes, setSucces] = useState("");
	const [formData, setFormData] = useState({
		username: "",
		email: "",
		password: "",
	});
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post(
				`https://social-backend-main2.vercel.app/api/auth/register`,
				{
					username: formData.username,
					email: formData.email,
					password: formData.password,
				}
			);
			//setTimeout to display message so user knows account was created
			function messageCreateAccount() {
				window.location.href = "/login";
			}
			if (response.status == 200 || 204) {
				setSucces("Your account has been created!");
				setTimeout(messageCreateAccount, 1500);
			}
		} catch (error) {
			setError(error.response.data);
		}
	};
	return (
		<div className=" flex w-full  justify-center ">
			<div id="post" className=" flex mt-36">
				<form onSubmit={handleSubmit} className=" flex justify-center">
					<div className=" flex flex-col gap-10 border w-80 rounded-lg">
						<div>
							<h1 className="text-4xl m-5 text-center">Create Account</h1>
							<div className="text-lime-600 text-2xl text-center">{succes}</div>
							<div className="text-red-600 text-2xl text-center"> {error}</div>
						</div>
						<label
							htmlFor="username"
							className=" flex flex-col justify-center items-center text-start"
						>
							Username:
							<input
								minLength={3}
								type="text"
								name="username"
								className="border border-black w-3/4 flex justify-center rounded-md h-10 p-4"
								onChange={(e) =>
									setFormData({ ...formData, username: e.target.value })
								}
							/>
						</label>

						<label
							htmlFor="email"
							className=" flex flex-col justify-center items-center"
						>
							E-mail:
							<input
								minLength={6}
								type="email"
								name="email"
								className="border border-black w-3/4 flex justify-center rounded-md h-10 p-4"
								onChange={(e) =>
									setFormData({ ...formData, email: e.target.value })
								}
							/>
						</label>

						<label
							htmlFor="password"
							className=" flex flex-col justify-center items-center"
						>
							Password:
							<input
								minLength={3}
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
								Sign up
							</button>
							<div className="m-4 text-sm flex gap-2">
								<p className=" text-gray-400">Already signed up? </p>
								<Link to="/login" className="font-bold">
									Log in
								</Link>
							</div>
						</div>
					</div>
					<div></div>
				</form>
			</div>
		</div>
	);
}
