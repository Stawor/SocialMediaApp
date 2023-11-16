import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./user-context";
import Cookies from "universal-cookie";

const cookies = new Cookies();
export const PostContext = createContext();

export const PostContextProvider = ({ children }) => {
	const { user } = useContext(UserContext);
	const [posts, setPosts] = useState("");

	async function getPosts() {
		if (user) {
			const response = await axios.get(
				`http://localhost:3000/api/posts/timeline/${user._id}`
			);
			setPosts(response.data.userPosts);
			console.log(response);
		}
	}
	useEffect(() => {
		getPosts();
	}, [user]);

	console.log(posts);
	return (
		<PostContext.Provider value={{ posts, setPosts }}>
			{children}
		</PostContext.Provider>
	);
};
