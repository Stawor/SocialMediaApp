import React, { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "../../contexts/user-context";
import SendIcon from "@mui/icons-material/Send";

export default function CommentPostInput({ post, setUpdatePosts }) {
	const { user } = useContext(UserContext);
	const [comment, setComment] = useState("");

	async function handleSubmit(e) {
		e.preventDefault();
		try {
			await axios.put(
				`https://social-backend-main2.vercel.app/${post._id}/${user._id}`,
				{
					comment: comment,
				}
			);
			setUpdatePosts((prev) => prev + 1);
			setComment("");
		} catch (err) {
			console.log(err);
		}
	}

	return (
		<form onSubmit={handleSubmit} style={{ position: "relative" }}>
			<input
				onChange={(e) => setComment(e.target.value)}
				type="text"
				value={comment}
				className="border border-slate-300 rounded-2xl w-full py-1 px-4 m-1 dark:bg-slate-700"
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
