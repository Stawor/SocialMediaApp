import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
const Cookie = new Cookies();

export default function UserNameApi({ userId, size, style, divStyle }) {
	const TokenCookie = Cookie.get("token");

	const [username, setUsername] = useState();
	const [profilePicture, setProfilePicture] = useState();
	useEffect(() => {
		if (userId) {
			const getData = async () => {
				const response = await axios.get(
					`https://socialmediaapp-production.up.railway.app/api/users/${userId}`,
					{ headers: { Authorization: `Bearer ${TokenCookie}` } }
				);
				setUsername(response.data.username);
				setProfilePicture(response.data.profilePicture);
			};
			getData();
		}
	}, [userId]);

	return (
		<a href={`/profile/${userId}`}>
			<div className={`${divStyle} flex items-center gap-2 `}>
				{!profilePicture ? (
					<img src="/user.png" width={size} className={style} alt="" />
				) : (
					<img
						src={profilePicture}
						width={size}
						height={size}
						className={`${style} rounded-full`}
						alt=""
					/>
				)}
				<p>{username}</p>
			</div>
		</a>
	);
}
