import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/user-context";
import { Link } from "react-router-dom";
import UserNameApi from "./UserNameApi";
import FeedApi from "../apis/FeedApi";
import Popove1 from "./ui/Popover";
import Like from "./ui/Like";
import { FaRegUserCircle } from "react-icons/fa";
import axios from "axios";
import Shareposts from "./SharePosts";

export default function Feed() {
	const { user } = useContext(UserContext);
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		getFeed();
	}, [user]);

	async function getFeed() {
		if (user) {
			const response = await axios.get(
				`http://localhost:3000/api/posts/timeline/all/${user._id}`
			);
			setPosts(
				response.data.sort((p1, p2) => {
					return new Date(p2.createdAt) - new Date(p1.createdAt);
				})
			);
		}
	}
	function DisplayFeed() {
		return posts.map((post) => (
			<div
				key={post._id}
				id="post"
				className="border flex flex-col p-4 gap-8 text-lg rounded-lg"
			>
				<div className=" flex gap-2 items-center text-2xl justify-between relative">
					<div>
						<UserNameApi userId={post.userId} />
					</div>
					<Popove1 postId={post._id} />
				</div>
				<div className="bg-white">{post.desc}</div>
				<div className="border-t">
					<Like post={post} />
				</div>
			</div>
		));
	}

	if (!user) {
		return <div>Loading...</div>;
	}
	return (
		<div className=" max-w-2xl flex flex-col gap-8 lg:w-4/5 w-full ">
			<DisplayFeed />
		</div>
	);
}
