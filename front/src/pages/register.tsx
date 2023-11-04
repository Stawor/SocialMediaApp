import React, { useState } from "react";
import axios from "axios";

export default function Register() {
	const [formData, setFormData] = useState({
		username: "",
		email: "",
		password: "",
	});
	const handleSubmit = async (e) => {
		e.preventDefault();
		const response = await axios.post(
			"http://localhost:3000/api/auth/register",
			{
				username: formData.username,
				email: formData.email,
				password: formData.password,
			}
		);
	};
	return (
		<form
			onSubmit={handleSubmit}
			className=" flex justify-center border-spacing-8"
		>
			<div className=" flex flex-col gap-10 border">
				<label htmlFor="username" className=" flex flex-col">
					UserName:
					<input
						type="text"
						name="username"
						className="border border-black"
						onChange={(e) =>
							setFormData({ ...formData, username: e.target.value })
						}
					/>
				</label>
				<label htmlFor="username" className=" flex flex-col">
					E-mail:
					<input
						type="text"
						name="username"
						className="border border-black"
						onChange={(e) =>
							setFormData({ ...formData, email: e.target.value })
						}
					/>
				</label>
				<label htmlFor="username" className=" flex flex-col">
					Password:
					<input
						type="text"
						name="username"
						className="border border-black"
						onChange={(e) =>
							setFormData({ ...formData, password: e.target.value })
						}
					/>
				</label>
				<button type="submit">Submit</button>
			</div>
		</form>
	);
}
