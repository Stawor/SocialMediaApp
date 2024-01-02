import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import PopoverSuggestedContacts from "./ui/PopoverSuggestedContacts";
import { UserContext } from "../contexts/user-context";
import { Skeleton } from "@mui/material";
import UserNameApi from "./UserNameDisplay";
import Cookies from "universal-cookie";
import { ContactsContext } from "../contexts/contacts-context";
const Cookie = new Cookies();

export default function suggestContacts() {
	const TokenCookie = Cookie.get("token");
	const { suggestContacts } = useContext(ContactsContext);
	const { user } = useContext(UserContext);

	if (!suggestContacts) {
		return (
			<div className="flex flex-col gap-8 w-3/4 mt-10 ">
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
				{suggestContacts.map((contact) => {
					if (contact.userId == user._id) {
						return;
					}
					return (
						<div key={contact.userId} className=" flex items-center gap-3">
							<UserNameApi
								userId={contact.userId}
								style={`h-12 w-12 text-5xl`}
								divStyle={`flex`}
							/>
							<PopoverSuggestedContacts userId={contact.userId} />
						</div>
					);
				})}
			</div>
		</>
	);
}
