import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Share() {
	const [name, setName] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		const response = await axios.post("http://localhost:3000/api/posts", {
			userId: "654698b4ede286e913b8a540",
			desc: name,
		});
		setName("");
	};

	// useEffect(() => {
	// 	async function displayPost() {}
	// }, []);

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="">
				<input
					type="text"
					name="name"
					value={name}
					className=" w-full border border-black"
					onChange={(e) => setName(e.target.value)}
				/>
				<button>Submit</button>
			</label>
		</form>
	);
}
