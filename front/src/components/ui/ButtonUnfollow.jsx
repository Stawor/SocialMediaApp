import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../../contexts/user-context";

export default function ButtonUnfollow({ userId }) {
	const { user } = useContext(UserContext);

	const handleClick = async () => {
		await axios.put(
			`https://socialmediaapp-production.up.railway.app/api/users/${userId}/unfollow`,
			{
				id: user._id,
			}
		);
		window.location.reload();
	};

	return <button onClick={handleClick}>Unfollow</button>;
}
