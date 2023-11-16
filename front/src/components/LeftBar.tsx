import React, { useState } from "react";
import { MdRssFeed } from "react-icons/md";
import { BiSolidUserCircle } from "react-icons/bi";
import { MdWork } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { GiEarthAmerica } from "react-icons/gi";
import { Link } from "react-router-dom";

export default function SideBar() {
	const [display, setDisplay] = useState("hidden");
	function handleClick() {
		if (display == "hidden") {
			setDisplay("flex");
		} else {
			setDisplay("hidden");
		}
	}
	return (
		<>
			<button
				onClick={handleClick}
				className="absolute top-2 text-3xl left-1/2 text-white lg:hidden"
			>
				<GiHamburgerMenu />
			</button>
			<div
				className={`lg:w-1/4 w-full bg-white absolute z-50 lg:static lg:bg-inherit ${display} lg:block h-[95vh] transition-opacity overflow-hidden`}
			>
				<ul className=" flex flex-col gap-6 items-center w-full">
					<li>
						<span className=" flex items-center text-2xl hover:bg-slate-200 py-4 lg:pr-36 p-12 rounded-lg">
							<Link to="/" className="flex items-center">
								<AiFillHome />
								Home
							</Link>
						</span>
					</li>
					<li>
						<span className="flex items-center text-2xl hover:bg-slate-200 py-4 p-12 lg:pr-36 rounded-lg">
							<Link to="/profile" className=" flex items-center">
								<BiSolidUserCircle />
								Profile
							</Link>
						</span>
					</li>
					<li>
						<span className=" flex items-center text-2xl hover:bg-slate-200 py-4 lg:pr-36 p-12 rounded-lg">
							<Link to="/feed" className="flex items-center">
								<MdRssFeed />
								Feed
							</Link>
						</span>
					</li>
					<li>
						<span className=" flex items-center text-2xl hover:bg-slate-200  py-4 lg:pr-36 p-12 rounded-lg">
							<Link
								to="https://www.linkedin.com/feed/"
								className="flex items-center"
							>
								<MdWork />
								Work
							</Link>
						</span>
					</li>
					<li>
						<span className=" flex items-center text-2xl hover:bg-slate-200  py-4 lg:pr-36 p-12 rounded-lg">
							<Link to="/discover" className="flex items-center">
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
