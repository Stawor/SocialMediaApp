import React, { useContext, useState } from "react";
import UserNameDisplay from "./UserNameDisplay";
import PopoverPosts from "./ui/PopoverPosts";
import ButtonLikePosts from "./ui/ButtonLikePost";
import { UserContext } from "../contexts/user-context";
import CommentPostInput from "./ui/CommentPostInput";
import Comments from "./Comments";
import Skeleton from "@mui/material/Skeleton";

export default function PostDisplay({ posts, setUpdatePosts }) {
	const { user } = useContext(UserContext);

	if (!user || !posts) {
		return (
			<div className="">
				<Skeleton variant="rounded" width={480} height={240} />
			</div>
		);
	}

	return (
		<div className=" max-w-2xl flex flex-col gap-4 lg:w-4/5 w-full bg-slate-50 dark:bg-slate-800">
			{posts.map((post) => (
				<div
					key={post._id}
					id="post"
					className="border flex flex-col p-4 gap-8 text-lg rounded-lg"
				>
					<div className=" flex gap-2 items-center text-2xl justify-between relative">
						<div>
							<UserNameDisplay
								userId={post.userId}
								style={`flex items-center w-12 h-12 text-5xl gap-2`}
								divStyle={`flex`}
							/>
						</div>
						{post.userId == user._id && (
							<PopoverPosts postId={post._id} setUpdatePosts={setUpdatePosts} />
						)}
					</div>
					<div className="">{post.desc}</div>
					<div className="flex items-center justify-center">
						{post.img && <img src={post.img} width={400} alt="post image" />}
					</div>
					<div className="border-t flex justify-between">
						<ButtonLikePosts post={post} />
					</div>
					<div>
						<CommentPostInput post={post} setUpdatePosts={setUpdatePosts} />
					</div>
					<div>
						<Comments post={post} />
					</div>
				</div>
			))}
		</div>
	);
}
