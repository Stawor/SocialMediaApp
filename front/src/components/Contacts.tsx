import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import UserNameApi from "./UserNameDisplay";
import { UserContext } from "../contexts/user-context";
import FriendPopover from "./ui/PopoverSuggestedContacts";
import FriendsSuggest from "./ContactsYouMayKnow";
import { Popover } from "@mui/material";
import PopoverContacts from "./ui/PopoverContacts";
import Cookies from "universal-cookie";
const Cookie = new Cookies();

export default function Friends() {
	const TokenCookie = Cookie.get("token");
	const [friends, setFriends] = useState();
	const { user } = useContext(UserContext);

	useEffect(() => {
		getData();
	}, [user]);

	const getData = async () => {
		if (user) {
			const response = await axios.get(
				`http://localhost:3000/api/users/followers/${user._id}`,
				{ headers: { Authorization: `Bearer ${TokenCookie}` } }
			);
			setFriends(response.data.followins);
			console.log(response);
		}
	};

	if (!friends) {
		return <div>Loading...</div>;
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
