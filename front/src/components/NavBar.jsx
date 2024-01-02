import Logout from "../pages/Logout";
import { Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
import ButtonDarkTheme from "./ui/ButtonDarkTheme";

export default function TopBar() {
	return (
		<div>
			<nav className="bg-blue-500 h-12 flex justify-center text-lg font-bold dark:bg-black text-white w-[99vw] lg:w-full px-10">
				<div className=" w-full max-w-7xl flex items-center justify-around ">
					<Link to="/">Home</Link>
					<HamburgerMenu />
					<div className="flex gap-6">
						<ButtonDarkTheme />
						<Logout />
					</div>
				</div>
			</nav>
		</div>
	);
}
