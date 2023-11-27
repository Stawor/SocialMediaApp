import React, { useContext, useState } from "react";

import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import MenuIcon from "@mui/icons-material/Menu";
import PublicIcon from "@mui/icons-material/Public";
import { Link } from "react-router-dom";
import UserNameDisplay from "./UserNameDisplay";
import { UserContext } from "../contexts/user-context";

export default function SideBar() {
	const [display, setDisplay] = useState("hidden");
	const { user } = useContext(UserContext);
	function handleClick() {
		if (display == "hidden") {
			setDisplay("flex");
		} else {
			setDisplay("hidden");
		}
	}
	return (
		<>
			<div className="">
				<button
					onClick={handleClick}
					className="absolute top-2 text-3xl left-1/2 text-white lg:hidden"
				>
					<MenuIcon />
				</button>
			</div>
			<div
				className={`lg:w-1/4 w-full bg-white absolute z-50 lg:static lg:bg-inherit ${display} lg:block h-[95vh] transition-opacity overflow-hidden justify-center `}
			>
				<ul className=" flex flex-col gap-4 mt-10 items-center lg:items-start 3xl:pl-36">
					<li className="w-full ">
						<span className="flex items-center text-2xl hover:bg-slate-200 py-4 rounded-lg">
							<UserNameDisplay
								userId={user._id}
								size={48}
								style={`h-12 w-12 ml-3`}
								divStyle={``}
							/>
						</span>
					</li>

					{/*                       Fake Links only for looks                     */}

					<li className=" w-full">
						<span className=" flex items-center text-2xl hover:bg-slate-200 py-4 lg:pr-36 rounded-lg ">
							<Link to="/" className="flex items-center ml-3">
								<HomeIcon />
								Home
							</Link>
						</span>
					</li>
					<li className=" w-full">
						<span className=" flex items-center text-2xl hover:bg-slate-200 py-4 lg:pr-36 rounded-lg">
							<Link to="/" className="flex items-center ml-3">
								<RssFeedIcon />
								Feed
							</Link>
						</span>
					</li>
					<li className=" w-full">
						<span className=" flex items-center text-2xl hover:bg-slate-200  py-4 lg:pr-36 rounded-lg">
							<Link to="/" className="flex items-center ml-3">
								<WorkIcon />
								Work
							</Link>
						</span>
					</li>
					<li className=" w-full">
						<span className=" flex items-center text-2xl hover:bg-slate-200  py-4 lg:pr-36   rounded-lg">
							<Link to="/" className="flex items-center ml-3">
								<PublicIcon />
								Discover
							</Link>
						</span>
					</li>
				</ul>
			</div>
		</>
	);
}
