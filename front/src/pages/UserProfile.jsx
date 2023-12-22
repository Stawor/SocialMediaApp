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
			`https://socialmediaapp-production.up.railway.app/api/posts/timeline/${userId}`,
			{ headers: { authorization: `Bearer ${TokenCookie}` } }
		);
		setPosts(response.data.userPosts);
	}

	useEffect(() => {
		getPosts();
	}, [userId, postUpdate]);

	if (!posts) {
		return (
			<div className=" flex flex-col gap-8 lg:w-4/5 w-full items-center">
				<Skeleton variant="rounded" width="600px" height={240} />;
				<Skeleton variant="rounded" width={480} height={240} />;
				<Skeleton variant="rounded" width={480} height={240} />;
			</div>
		);
	}
	return (
		<div className=" flex flex-col gap-8 lg:w-4/5 w-full items-center">
			<div className=" flex border w-full items-center justify-center h-1/3 max-w-7xl bg-slate-50 mt-10">
				<UserNameApi
					userId={userId}
					size={208}
					style={`h-52`}
					divStyle={`flex-col text-4xl justify-center items-center w-max`}
				/>
			</div>
			<PostDisplay posts={posts} setPostUpdate={setPostUpdate} />
		</div>
	);
}
