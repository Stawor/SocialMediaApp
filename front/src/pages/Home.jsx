import Posts from "../components/Feed";
import Cookies from "universal-cookie";
import SharePosts from "../components/SharePosts";
import Feed from "../components/Feed";
import { useState } from "react";
const cookies = new Cookies();

export default function Home() {
	const cookie = cookies.get("token");
	const [postsUpdate, setpostsUpdate] = useState(0);
	console.log(postsUpdate);
	return (
		//redirect user to login

		<div className="lg:w-1/2 w-full flex flex-col items-center ">
			<SharePosts postsUpdate={postsUpdate} setpostsUpdate={setpostsUpdate} />
			<Feed postsUpdate={postsUpdate} setpostsUpdate={setpostsUpdate} />
		</div>
	);
}
