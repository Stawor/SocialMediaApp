import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import FriendPopover from "./ui/PopoverSuggestedContacts";
import { UserContext } from "../contexts/user-context";
import { Skeleton } from "@mui/material";
import UserNameApi from "./UserNameDisplay";
import Cookies from "universal-cookie";
const Cookie = new Cookies();

export default function FriendsSuggest({ setUserUpdate, userUpdate }) {
	const TokenCookie = Cookie.get("token");
	const [contacts, setContacts] = useState(0);
	const { user } = useContext(UserContext);

	useEffect(() => {
		getData();
	}, [user, userUpdate]);

	const getData = async () => {
		if (user) {
			const response = await axios.get(
				`https://socialmediaapp-production.up.railway.app/api/users/all/${user._id}`,
				{
					id: user._id,
					headers: { Authorization: `Bearer ${TokenCookie}` },
				}
			);
			setContacts(response.data.userInfo);
		}
	};

	if (!contacts) {
		return (
			<div className="flex flex-col gap-8 mt-10 w-3/4">
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
		<>
			<div className=" flex flex-col gap-6 ">
				<h1 className="font-bold text-slate-400 ">People you may know</h1>
				{contacts.map((contact) => {
					if (contact.userId == user._id) {
						return;
					}
					return (
						<div key={contact.userId} className=" flex items-center gap-3">
							<UserNameApi
								userId={contact.userId}
								size={48}
								style={`h-12`}
								divStyle={undefined}
							/>
							<FriendPopover
								userId={contact.userId}
								setUserUpdate={setUserUpdate}
							/>
						</div>
					);
				})}
			</div>
		</>
	);
}
