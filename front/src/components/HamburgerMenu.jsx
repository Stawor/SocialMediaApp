import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/user-context";
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import GroupIcon from "@mui/icons-material/Group";
import PublicIcon from "@mui/icons-material/Public";
import UserNameDisplay from "./UserNameDisplay";

export default function HamburgerMenu() {
	const { user } = useContext(UserContext);
	const [display, setDisplay] = useState("hidden");

	function handleClick() {
		if (display == "hidden") {
			setDisplay("flex");
			document.body.classList.add("disable-scroll");
		} else {
			setDisplay("hidden");
			document.body.classList.remove("disable-scroll");
		}
	}
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth > 1024) {
				document.body.classList.remove("disable-scroll");
				setDisplay("hidden");
			}
		};

		window.addEventListener("resize", handleResize);

		// Clean up event listener on component unmount
		return () => window.removeEventListener("resize", handleResize);
	}, []);
	if (!user) {
		return (
			<div>
				<h1>loading...</h1>
			</div>
		);
	}
	return (
		<>
			<button onClick={handleClick} className=" w-8 h-6 lg:hidden">
				{display == "hidden" ? (
					<div className=" w-full h-full flex flex-col justify-between ">
						<div className={`h-1 bg-white duration-500`}></div>
						<div className={`h-1 bg-white `}></div>
						<div className={`h-1 bg-white duration-500`}></div>
					</div>
				) : (
					<div className=" w-full h-full flex flex-col justify-between">
						<div
							className={`h-1 bg-white rotate-45 translate-y-3 duration-500`}
						></div>
						<div className={`h-1 bg-white hidden`}></div>
						<div
							className={`h-1 bg-white -rotate-45 -translate-y-2 duration-500`}
						></div>
					</div>
				)}
			</button>

			<div
				className={` w-full bg-white absolute lg:bg-inherit lg:z-0 z-50 ${display} h-screen justify-center left-0 top-12 dark:bg-slate-900 `}
			>
				<ul className="flex-col gap-4 mt-10 text-black w-1/3 dark:text-slate-200">
					<li className="w-full ">
						<span
							onClick={handleClick}
							className="flex items-center text-2xl hover:bg-slate-200 py-4 rounded-lg dark:hover:bg-slate-600"
						>
							<UserNameDisplay
								userId={user._id}
								size={48}
								style={`h-12 w-12 ml-3 text-5xl`}
								divStyle={`flex`}
							/>
						</span>
					</li>

					<li className=" w-full">
						<span className=" flex items-center text-2xl hover:bg-slate-200 py-4 lg:pr-36 rounded-lg dark:hover:bg-slate-600">
							<Link
								to="/"
								//enable scroll when url changes
								onClick={handleClick}
								className="flex items-center ml-3 "
							>
								<HomeIcon />
								Home
							</Link>
						</span>
					</li>
					<li className=" w-full">
						<span className=" flex items-center text-2xl hover:bg-slate-200 py-4 lg:pr-36 rounded-lg dark:hover:bg-slate-600">
							<Link
								to="/contacts"
								onClick={handleClick}
								className="flex items-center ml-3"
							>
								<GroupIcon />
								Contacts
							</Link>
						</span>
					</li>

					{/*                       Fake Links                   */}
					<li className=" w-full">
						<span className=" flex items-center text-2xl hover:bg-slate-200  py-4 lg:pr-36 rounded-lg dark:hover:bg-slate-600">
							<Link to="/" className="flex items-center ml-3">
								<WorkIcon />
								Work
							</Link>
						</span>
					</li>
					<li className=" w-full">
						<span className=" flex items-center text-2xl hover:bg-slate-200  py-4 lg:pr-36 rounded-lg dark:hover:bg-slate-600">
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
