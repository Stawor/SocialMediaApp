import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/user-context";
import Posts from "../components/Posts";
import UserNameApi from "../components/UserNameDisplay";
import { useParams } from "react-router-dom";
import PostDisplay from "../components/PostDisplay";
import { PostContext } from "../contexts/post-context";
import axios from "axios";
import Cookies from "universal-cookie";
const Cookie = new Cookies();

export default function UserPosts() {
	const TokenCookie = Cookie.get("token");
	const [posts, setPosts] = useState();
	let { userId } = useParams();
	UserNameApi({ userId });

	async function getPosts() {
		const response = await axios.get(
			`http://localhost:3000/api/posts/timeline/${userId}`,
			{ headers: { authorization: `Bearer ${TokenCookie}` } }
		);
		setPosts(response.data.userPosts);
	}

	useEffect(() => {
		getPosts();
	}, []);

	if (!posts) {
		return <div>Loading...</div>;
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
			<PostDisplay posts={posts} />
		</div>
	);
}
