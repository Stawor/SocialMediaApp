import React, { useContext, useEffect, useState } from "react";
import PostDisplay from "./PostDisplay";
import axios from "axios";
import { useParams } from "react-router-dom";
import Cookies from "universal-cookie";
const Cookie = new Cookies();

export default function Posts() {
	const tokenCookie = Cookie.get("token");
	const [posts, setPosts] = useState("");
	let { userId } = useParams();

	async function getPosts() {
		if (posts) {
			const response = await axios.get(
				`${import.meta.env.URL}posts/timeline/${user._id}`,
				{ headers: { Authorization: `Bearer ${tokenCookie}` } }
			);
			setPosts(response.data.userPosts);
		}
	}
	useEffect(() => {
		getPosts();
	}, [posts]);

	return (
		<>
			<PostDisplay posts={posts} />
		</>
	);
}
