import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../../contexts/user-context";

export default function ButtonFollowUser({ userId }) {
	const { user } = useContext(UserContext);

	const handleClick = () => {
		axios.put(
			`https://socialmediaapp-ydzs.onrender.com/api/users/${userId}/follow`,
			{
				id: user._id,
			}
		);
		// window.location.reload();
	};

	return <button onClick={handleClick}>Follow</button>;
}
