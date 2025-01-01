import { useContext, useEffect, useState } from "react";
import { Skeleton } from "@mui/material";
import UserNameApi from "../components/UserNameDisplay";
import { useParams } from "react-router-dom";
import PostDisplay from "../components/PostDisplay";

import axios from "axios";
import Cookies from "universal-cookie";
const Cookie = new Cookies();

export default function UserPosts() {
	const TokenCookie = Cookie.get("token");
	const [posts, setPosts] = useState();
	const [postUpdate, setPostUpdate] = useState(0);

	let { userId } = useParams();
	UserNameApi({ userId });

	async function getPosts() {
		const response = await axios.get(
			`https://social-backend-main2.vercel.app/api/posts/timeline/${userId}`,
			{ headers: { authorization: `Bearer ${TokenCookie}` } }
		);
		setPosts(response.data.userPosts);
	}

	useEffect(() => {
		getPosts();
	}, [userId, postUpdate]);

	if (!posts) {
		return (
			<div className=" flex flex-col lg:w-4/5 w-full items-center mt-10">
				<Skeleton variant="rounded" width={600} height={240} />
			</div>
		);
	}
	return (
		<div className=" flex flex-col w-full lg:w-3/5 gap-8 items-center min-h-screen">
			<div className=" flex border w-4/5 items-center justify-center max-w-7xl bg-slate-50 dark:bg-slate-800 mt-10">
				<UserNameApi
					userId={userId}
					style={` w-40 h-40 text-9xl justify-center items-center`}
					divStyle={`flex flex-col text-4xl`}
				/>
			</div>
			<PostDisplay posts={posts} setPostUpdate={setPostUpdate} />
		</div>
	);
}
