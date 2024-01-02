import React, { useContext } from "react";
import { ContactsContext } from "../contexts/contacts-context";
import UserNameDisplay from "../components/UserNameDisplay";
import LeftBar from "../components/LeftBar";
import PopoverContacts from "../components/ui/PopoverContacts";
import { UserContext } from "../contexts/user-context";
import Navbar from "../components/NavBar";
import PopoverSuggestedContacts from "../components/ui/PopoverSuggestedContacts";
import Skeleton from "@mui/material/Skeleton";

export default function ContactPage() {
	const { suggestContacts, contacts } = useContext(ContactsContext);
	const { user } = useContext(UserContext);

	if (!suggestContacts || !contacts) {
		return (
			<div className="flex justify-center w-screen h-screen">
				<div className=" flex gap-6 flex-wrap justify-center  lg:justify-start lg:my-[20vw] lg:mx-[10vw]">
					<Skeleton variant="rounded" width={100} height={100} />
					<Skeleton variant="rounded" width={100} height={100} />
					<Skeleton variant="rounded" width={100} height={100} />
					<Skeleton variant="rounded" width={100} height={100} />
					<Skeleton variant="rounded" width={100} height={100} />
					<Skeleton variant="rounded" width={100} height={100} />
				</div>
			</div>
		);
	}

	return (
		<>
			<div>
				<Navbar />,
			</div>
			<div className=" flex z-10 dark:bg-slate-900 dark:text-slate-200 min-h-screen">
				<LeftBar />
				<div>
					<div className=" text-center text-slate-400 m-10 text-2xl">
						<h1>Contacts</h1>
					</div>
					<div className=" flex gap-6 flex-wrap justify-center lg:justify-start lg:m-10">
						{contacts.map((contact, index) => {
							return (
								<div
									key={index}
									className="border w-48 h-48 flex justify-center items-center relative"
								>
									<UserNameDisplay
										userId={contact}
										style={` h-24 w-24 text-8xl`}
										divStyle={`flex flex-col`}
									/>
									<div className="absolute top-2 right-0">
										<PopoverContacts userId={contact} />
									</div>
								</div>
							);
						})}
					</div>
					<div className=" text-center text-slate-400 m-10 text-2xl">
						<h1>Suggested Contacts</h1>
					</div>
					<div className="flex justify-center">
						<div className=" flex gap-6 flex-wrap justify-center lg:justify-start lg:m-10">
							{suggestContacts.map((contact, index) => {
								return (
									<div
										key={index}
										className="border w-48 h-48 flex justify-center items-center relative"
									>
										<UserNameDisplay
											userId={contact.userId}
											style={` h-24 w-24 text-8xl`}
											divStyle={`flex flex-col `}
										/>
										<div className="absolute top-2 right-0">
											<PopoverSuggestedContacts userId={contact.userId} />
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
