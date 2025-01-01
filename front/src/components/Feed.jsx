import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/user-context";
import { Skeleton } from "@mui/material";
import axios from "axios";
import PostDisplay from "./PostDisplay";
import Cookies from "universal-cookie";

export default function Feed({ updatePosts, setUpdatePosts }) {
	const Cookie = new Cookies();
	const TokenCookie = Cookie.get("token");
	const { user } = useContext(UserContext);
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		getFeed();
	}, [user, updatePosts]);

	async function getFeed() {
		if (user) {
			const response = await axios.get(
				`https://social-backend-main2.vercel.app/api/posts/timeline/all/${user._id}`,
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
			<div className=" flex flex-col gap-10">
				<div>
					<Skeleton variant="rounded" width={480} height={240} />
				</div>
				<div>
					<Skeleton variant="rounded" width={480} height={240} />
				</div>
				<div>
					<Skeleton variant="rounded" width={480} height={240} />
				</div>
			</div>
		);
	}
	return (
		<>
			<PostDisplay posts={posts} setUpdatePosts={setUpdatePosts} />
		</>
	);
}
