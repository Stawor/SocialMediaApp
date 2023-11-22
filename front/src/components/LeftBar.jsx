import React, { useContext, useState } from "react";
import { MdRssFeed } from "react-icons/md";
import { BiSolidUserCircle } from "react-icons/bi";
import { MdWork } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { GiEarthAmerica } from "react-icons/gi";
import { Link } from "react-router-dom";
import UserNameApi from "./UserNameDisplay";
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
					<GiHamburgerMenu />
				</button>
			</div>
			<div
				className={`lg:w-1/4 w-full bg-white absolute z-50 lg:static lg:bg-inherit ${display} lg:block h-[95vh] transition-opacity overflow-hidden justify-center `}
			>
				<ul className=" flex flex-col gap-4 mt-10 lg:ml-4 2xl:ml-32 items-center lg:items-start">
					<li>
						<span className="flex items-center text-2xl hover:bg-slate-200 2xl:pr-36 py-4 rounded-lg">
							<UserNameApi
								userId={user._id}
								size={48}
								style={`h-12 w-12`}
								divStyle={` `}
							/>
						</span>
					</li>

					{/*                       Fake Links only for looks                     */}

					<li>
						<span className=" flex items-center text-2xl hover:bg-slate-200 py-4 lg:pr-36 rounded-lg">
							<Link to="/" className="flex items-center">
								<AiFillHome />
								Home
							</Link>
						</span>
					</li>
					<li>
						<span className=" flex items-center text-2xl hover:bg-slate-200 py-4 lg:pr-36 rounded-lg">
							<Link to="/" className="flex items-center">
								<MdRssFeed />
								Feed
							</Link>
						</span>
					</li>
					<li>
						<span className=" flex items-center text-2xl hover:bg-slate-200  py-4 lg:pr-36 rounded-lg">
							<Link to="/" className="flex items-center">
								<MdWork />
								Work
							</Link>
						</span>
					</li>
					<li>
						<span className=" flex items-center text-2xl hover:bg-slate-200  py-4 lg:pr-36   rounded-lg">
							<Link to="/" className="flex items-center">
								<GiEarthAmerica />
								Discover
							</Link>
						</span>
					</li>
				</ul>
			</div>
		</>
	);
}
