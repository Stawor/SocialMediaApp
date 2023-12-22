import React, { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "../../contexts/user-context";
import SendIcon from "@mui/icons-material/Send";

export default function CommentPostInput({ post, setPostUpdate }) {
	const { user } = useContext(UserContext);
	const [comment, setComment] = useState("");

	async function handleSubmit(e) {
		e.preventDefault();
		try {
			await axios.put(
				`https://socialmediaapp-production.up.railway.app/api/posts/comment/${post._id}/${user._id}`,
				{
					comment: comment,
				}
			);
			setComment("");
			setPostUpdate((prev) => prev + 1);
		} catch (err) {
			console.log(err);
		}
	}
	console.log(comment);
	return (
		<form onSubmit={handleSubmit} style={{ position: "relative" }}>
			<input
				onChange={(e) => setComment(e.target.value)}
				type="text"
				value={comment}
				className="border border-slate-300 rounded-2xl w-full py-1 px-4 m-1"
				style={{ paddingRight: "60px" }} // make room for the button
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
