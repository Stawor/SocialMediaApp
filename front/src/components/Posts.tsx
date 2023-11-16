import React, { useContext } from "react";
import { UserContext } from "../contexts/user-context";
import { PostContext } from "../contexts/post-context";
import Popove1 from "./ui/Popover";
import Like from "./ui/Like";
import UserNameApi from "./UserNameApi";

export default function Posts() {
	const { user } = useContext(UserContext);
	const { posts } = useContext(PostContext);

	function DisplayPosts() {
		if (!posts) {
			return <div>Loading...</div>;
		}
		return posts.map((post) => (
			<div
				key={post._id}
				id="post"
				className="border flex flex-col p-4 gap-8 text-lg rounded-lg"
			>
				<div className=" flex gap-2 items-center text-2xl justify-between relative">
					<UserNameApi userId={user._id} />
					<Popove1 postId={post._id} />
				</div>
				<div className="bg-white">{post.desc}</div>
				<div className="border-t">
					<Like post={post} />
				</div>
			</div>
		));
	}

	return (
		<div className=" max-w-2xl flex flex-col-reverse gap-8 lg:w-4/5 w-full ">
			<DisplayPosts />
		</div>
	);
}
