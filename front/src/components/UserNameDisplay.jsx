import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { Link } from "react-router-dom";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

export default function UserNameDisplay({ userId, style, divStyle }) {
	const Cookie = new Cookies();
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
		<Link to={`/profile/${userId}`}>
			<div className={`${divStyle} items-center gap-2 rounded-full`}>
				{!profilePicture ? (
					<div className={`${style} flex`}>
						<PersonOutlinedIcon
							fontSize="inherit"
							className="border-2 border-slate-700 rounded-full p-1 dark:border-slate-200"
						/>
					</div>
				) : (
					<img
						src={profilePicture}
						className={`${style}  rounded-full`}
						alt="profile picture"
					/>
				)}
				<p>{username}</p>
			</div>
		</Link>
	);
}
