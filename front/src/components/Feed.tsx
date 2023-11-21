import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/user-context";

import axios from "axios";

import PostDisplay from "./PostDisplay";
import Cookies from "universal-cookie";
const Cookie = new Cookies();

export default function Feed() {
	const TokenCookie = Cookie.get("token");
	const { user } = useContext(UserContext);

	const [posts, setPosts] = useState([]);

	useEffect(() => {
		getFeed();
	}, [user]);

	async function getFeed() {
		if (user) {
			const response = await axios.get(
				`http://localhost:3000/api/posts/timeline/all/${user._id}`,
				{ headers: { Authorization: `Bearer ${TokenCookie}` } }
			);
			setPosts(
				response.data.sort((p1, p2) => {
					return new Date(p2.createdAt) - new Date(p1.createdAt);
				})
			);
		}
	}

	if (!user) {
		return <div>Loading...</div>;
	}
	return (
		<>
			<PostDisplay posts={posts} />
		</>
	);
}
