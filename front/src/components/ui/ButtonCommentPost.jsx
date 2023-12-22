import React from "react";
import axios from "axios";

export default function ButtonCommentPost() {
	async function handleClick() {
		console.log("Comment");
		const response = await axios.put(
			`https://socialmediaapp-production.up.railway.app/api/posts/${post._id}/comment`,
			{
				comment: "asdas",
			}
		);
	}
	return (
		<div>
			<input
				type="text"
				className=" border border-slate-300 rounded-2xl w-full py-1 px-4 m-1 "
			/>
		</div>
	);
}
