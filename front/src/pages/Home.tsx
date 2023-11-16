import Posts from "../components/Feed";
import Cookies from "universal-cookie";
import Share from "../components/SharePosts";
import Feed from "../components/Feed";
const cookies = new Cookies();

export default function Home() {
	const cookie = cookies.get("token");
	return (
		//redirect user to login

		<div className="lg:w-1/2 w-full flex flex-col items-center ">
			<Share />
			<Feed />
		</div>
	);
}
