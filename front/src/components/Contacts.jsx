import React, { useContext, useEffect, useState } from "react";
import UserNameApi from "./UserNameDisplay";
import { Skeleton } from "@mui/material";
import PopoverContacts from "./ui/PopoverContacts";
import Cookies from "universal-cookie";
import { ContactsContext } from "../contexts/contacts-context";

export default function Contacts() {
	const { contacts } = useContext(ContactsContext);

	if (!contacts) {
		return (
			<div className="flex flex-col w-3/4 justify-center gap-6 mt-10">
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

				{contacts.map((user) => (
					<div key={user} className=" flex items-center gap-3">
						<UserNameApi
							userId={user}
							style={`h-12 w-12 text-5xl`}
							divStyle={`flex`}
						/>
						<PopoverContacts userId={user} />
					</div>
				))}
			</div>
		</div>
	);
}
