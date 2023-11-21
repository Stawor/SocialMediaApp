import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../../contexts/user-context";

export default function ButtonUnfollow({ userId }) {
	const { user } = useContext(UserContext);

	const handleClick = () => {
		axios.put(`http://localhost:3000/api/users/${userId}/unfollow`, {
			id: user._id,
		});
		window.location.reload();
	};
	console.log(userId);
	console.log(user._id);
	return <button onClick={handleClick}>Unfollow</button>;
}
