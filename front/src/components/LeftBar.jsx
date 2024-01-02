import React, { useContext, useState } from "react";
import { Skeleton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import PublicIcon from "@mui/icons-material/Public";
import { Link } from "react-router-dom";
import UserNameDisplay from "./UserNameDisplay";
import { UserContext } from "../contexts/user-context";

export default function LeftBar() {
	const { user } = useContext(UserContext);

	if (!user) {
		return (
			<div className="w-1/6 mt-10">
				<Skeleton variant="text" sx={{ fontSize: "1rem" }} />
			</div>
		);
	}

	return (
		<>
			<ul className=" lg:flex flex-col gap-4 mt-10 items-center lg:pl-8 lg:items-start 3xl:pl-36 hidden lg:w-1/5">
				<li className="w-full ">
					<span className="flex items-center text-2xl hover:bg-slate-200 py-4 rounded-lg dark:hover:bg-slate-600">
						<UserNameDisplay
							userId={user._id}
							style={`h-12 w-12 ml-3 text-5xl`}
							divStyle={`flex`}
						/>
					</span>
				</li>

				<li className=" w-full">
					<span className=" flex items-center text-2xl hover:bg-slate-200 py-4 lg:pr-36 rounded-lg dark:hover:bg-slate-600">
						<Link to="/" className="flex items-center ml-3">
							<HomeIcon />
							Home
						</Link>
					</span>
				</li>
				<li className=" w-full">
					<span className=" flex items-center text-2xl hover:bg-slate-200 py-4 lg:pr-36 rounded-lg dark:hover:bg-slate-600">
						<Link to="/contacts" className="flex items-center ml-3">
							<RssFeedIcon />
							Contacts
						</Link>
					</span>
				</li>
				{/*                       Fake Links                    */}
				<li className=" w-full">
					<span className=" flex items-center text-2xl hover:bg-slate-200  py-4 lg:pr-36 rounded-lg dark:hover:bg-slate-600">
						<Link to="/" className="flex items-center ml-3">
							<WorkIcon />
							Work
						</Link>
					</span>
				</li>
				<li className=" w-full">
					<span className=" flex items-center text-2xl hover:bg-slate-200  py-4 lg:pr-36   rounded-lg dark:hover:bg-slate-600">
						<Link to="/" className="flex items-center ml-3">
							<PublicIcon />
							Discover
						</Link>
					</span>
				</li>
			</ul>
		</>
	);
}
