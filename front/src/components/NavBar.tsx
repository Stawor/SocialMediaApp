
import Logout from "../pages/logout";
import { Link } from "react-router-dom";


export default function TopBar() {
	return (
		<div>
			<nav className="bg-blue-500 h-12 flex justify-center text-lg font-bold text-white px-10 lg:px-10 ">
				<div className=" w-full max-w-7xl flex items-center justify-between relative">
					<Link to="/">Home</Link>
					<div className="text-3xl lg:hidden "></div>
					<Logout />
				</div>
			</nav>
		</div>
	);
}
