import { useState, useContext } from "react";
import axios from "axios";

import { UserContext } from "../contexts/user-context";
import UserImg from "./ui/UserImg";
import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import UserNameApi from "./UserNameApi";

export default function SharePosts({ setOptimisticPost }) {
	const [desc, setDesc] = useState("");
	const { user } = useContext(UserContext);

	const handleSubmit = async (e) => {
		await axios.post("http://localhost:3000/api/posts", {
			userId: user._id,
			desc: desc,
		});
		setDesc("");
	};
	return (
		<form
			onSubmit={handleSubmit}
			id="post"
			className="border flex flex-col p-4 gap-8 text-lg rounded-lg mb-8 max-w-2xl lg:w-4/5 w-full"
		>
			<label htmlFor="post">
				<div className=" text-3xl">
					<UserNameApi userId={user._id} />
				</div>

				<input
					type="text"
					name="name"
					value={desc}
					className=" w-full border border-slate-300 h-20 px-10 rounded-lg mb-4 hover:bg-slate-100"
					placeholder="How are you doing?"
					onChange={(e) => setDesc(e.target.value)}
				/>
				<button className="px-6 py-2 bg-blue-500 rounded-lg text-white font-bold text-base">
					Post
				</button>
			</label>
		</form>
	);
}
