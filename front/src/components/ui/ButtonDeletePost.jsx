import axios from "axios";
import { UserContext } from "../../contexts/user-context";
import { useContext, useState } from "react";
import { useRevalidator } from "react-router-dom";
import { Alert } from "@mui/material";

export default function Delete({ postId }) {
	const [error, setError] = useState("");
	const { user } = useContext(UserContext);

	const handleClick = async () => {
		try {
			await axios.delete(
				`https://socialmediaapp-ydzs.onrender.com/posts/${postId}/${user._id}`
			);
			window.location.reload();
		} catch (err) {
			setError(err.response.data);
		}
	};

	return (
		<>
			<button onClick={handleClick}>Delete</button>
		</>
	);
}
