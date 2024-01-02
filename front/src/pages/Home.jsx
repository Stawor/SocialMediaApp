import Posts from "../components/Feed";
import Cookies from "universal-cookie";
import SharePosts from "../components/SharePosts";
import Feed from "../components/Feed";
import { useState } from "react";
const cookies = new Cookies();

export default function Home() {
	const [updatePosts, setUpdatePosts] = useState(0);
	return (
		<div className="lg:w-1/2 w-3/4 max-w-5xl min-h-screen flex flex-col items-center">
			<SharePosts setUpdatePosts={setUpdatePosts} />
			<Feed updatePosts={updatePosts} setUpdatePosts={setUpdatePosts} />
		</div>
	);
}
