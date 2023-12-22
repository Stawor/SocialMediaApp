import React, { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "../../contexts/user-context";
import SendIcon from "@mui/icons-material/Send";

export default function ButtonCommentPost({ post }) {
	const { user } = useContext(UserContext);
	const [comment, setComment] = useState("");
	console.log(post);
	async function handleSubmit(e) {
		e.preventDefault();
		console.log("Comment");
		const response = await axios.put(
			`https://socialmediaapp-production.up.railway.app/api/posts/comment/${post._id}/${user._id}`,
			{
				comment: comment,
			}
		);
	}
	return (
		<form onSubmit={handleSubmit} style={{ position: "relative" }}>
			<input
				onChange={(e) => setComment(e.target.value)}
				type="text"
				value={comment}
				className="border border-slate-300 rounded-2xl w-full py-1 px-4 m-1"
				style={{ paddingRight: "60px" }} // Make room for the button
			/>
			<button
				style={{
					position: "absolute",
					top: "50%",
					right: "10px",
					transform: "translateY(-50%)",
				}}
			>
				<SendIcon />
			</button>
		</form>
	);
}
