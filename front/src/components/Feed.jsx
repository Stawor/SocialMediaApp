import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/user-context";
import { Skeleton } from "@mui/material";
import axios from "axios";

import PostDisplay from "./PostDisplay";
import Cookies from "universal-cookie";
const Cookie = new Cookies();

export default function Feed({ postsUpdate }) {
	const TokenCookie = Cookie.get("token");
	const { user } = useContext(UserContext);
	const [postUpdate, setPostUpdate] = useState(0);

	const [posts, setPosts] = useState([]);

	useEffect(() => {
		getFeed();
	}, [user, postsUpdate, postUpdate]);

	async function getFeed() {
		if (user) {
			const response = await axios.get(
				`https://socialmediaapp-production.up.railway.app/api/posts/timeline/all/${user._id}`,
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
		return (
			<div>
				<Skeleton variant="rounded" width={480} height={240} />;
				<Skeleton variant="rounded" width={480} height={240} />;
				<Skeleton variant="rounded" width={480} height={240} />;
			</div>
		);
	}
	return (
		<>
			<PostDisplay posts={posts} setPostUpdate={setPostUpdate} />
		</>
	);
}
