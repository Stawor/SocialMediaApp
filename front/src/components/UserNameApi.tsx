import { useEffect, useState } from "react";

import axios from "axios";
import { Link } from "react-router-dom";

export default function UserNameApi({ userId }) {
	const [username, setUsername] = useState();
	const [profilePicture, setProfilePicture] = useState();
	useEffect(() => {
		const getData = async () => {
			const response = await axios.get(
				`http://localhost:3000/api/users/${userId}`
			);
			setUsername(response.data.username);
			setProfilePicture(response.data.profilePicture);
		};
		getData();
	}, [userId]);

	return (
		<Link to="/profile" className="flex gap-2 w-fit items-center">
			<div className=" flex items-center gap-2">
				{!profilePicture ? (
					<img
						src="/user.png"
						width={48}
						className="rounded-full h-12"
						alt=""
					/>
				) : (
					<img
						src={profilePicture}
						width={48}
						className="rounded-full h-12"
						alt=""
					/>
				)}
				{username}
			</div>
		</Link>
	);
}
