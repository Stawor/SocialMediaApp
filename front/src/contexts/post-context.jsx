import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./user-context";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export const PostContext = createContext(false);

export const PostContextProvider = ({ children }) => {
	const tokenCookie = cookies.get("token");
	const { user } = useContext(UserContext);
	const [posts, setPosts] = useState("");

	async function getPosts() {
		if (user) {
			const response = await axios.get(
				`https://socialmediaapp-production.up.railway.app/api/posts/timeline/${user._id}`,
				{ headers: { Authorization: `Bearer ${tokenCookie}` } }
			);
			setPosts(response.data.userPosts);
		}
	}
	useEffect(() => {
		getPosts();
	}, [user]);

	return (
		<PostContext.Provider value={{ posts, setPosts }}>
			{children}
		</PostContext.Provider>
	);
};
