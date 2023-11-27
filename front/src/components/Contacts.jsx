import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import UserNameApi from "./UserNameDisplay";
import { UserContext } from "../contexts/user-context";
import { Skeleton } from "@mui/material";
import PopoverContacts from "./ui/PopoverContacts";
import Cookies from "universal-cookie";
const Cookie = new Cookies();

export default function Friends() {
	const TokenCookie = Cookie.get("token");
	const [friends, setFriends] = useState(null);
	const { user } = useContext(UserContext);

	useEffect(() => {
		getData();
	}, [user]);

	const getData = async () => {
		if (user) {
			const response = await axios.get(
				`https://socialmediaapp-production.up.railway.app/api/users/followers/${user._id}`,
				{ headers: { Authorization: `Bearer ${TokenCookie}` } }
			);
			setFriends(response.data.followins);
		}
	};

	if (!friends) {
		return (
			<div className="flex flex-col justify-center gap-6 mt-10">
				<Skeleton variant="text" sx={{ fontSize: "1rem" }} />
				<Skeleton variant="text" sx={{ fontSize: "1rem" }} />
				<Skeleton variant="text" sx={{ fontSize: "1rem" }} />
				<Skeleton variant="text" sx={{ fontSize: "1rem" }} />
				<Skeleton variant="text" sx={{ fontSize: "1rem" }} />
				<Skeleton variant="text" sx={{ fontSize: "1rem" }} />
				<Skeleton variant="text" sx={{ fontSize: "1rem" }} />
				<Skeleton variant="text" sx={{ fontSize: "1rem" }} />
			</div>
		);
	}
	return (
		<div>
			<div className="flex flex-col gap-6 mt-10">
				<h1 className="font-bold text-slate-400 ">Contacts</h1>
				{friends.map((friend) => (
					<div key={friend} className=" flex items-center gap-3">
						<UserNameApi
							userId={friend}
							size={48}
							style={`h-12`}
							divStyle={undefined}
						/>
						<PopoverContacts postId={friend} />
					</div>
				))}
			</div>
		</div>
	);
}
