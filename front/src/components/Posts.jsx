import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Cookies from "universal-cookie";
import { UserContext } from "../contexts/user-context";
import PostDisplay from "./PostDisplay";
const Cookie = new Cookies();

export default function Posts() {
	const tokenCookie = Cookie.get("token");
	const { user } = useContext(UserContext);
	const [postUpdate, setPostUpdate] = useState(0);
	const [posts, setPosts] = useState("");

	async function getPosts() {
		if (posts) {
			const response = await axios.get(
				`https://socialmediaapp-production.up.railway.app/${user._id}`,
				{ headers: { Authorization: `Bearer ${tokenCookie}` } }
			);
			setPosts(response.data.userPosts);
		}
	}
	useEffect(() => {
		getPosts();
	}, [posts, postUpdate]);

	return (
		<>
			<PostDisplay posts={posts} setPostUpdate={setPostUpdate} />
		</>
	);
}
