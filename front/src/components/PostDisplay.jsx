import React, { useContext, useState } from "react";
import UserNameDisplay from "./UserNameDisplay";
import PopoverPosts from "./ui/PopoverPosts";
import ButtonLikePosts from "./ui/ButtonLikePost";
import { UserContext } from "../contexts/user-context";
import ButtonCommentPost from "./ui/ButtonCommentPost";


export default function PostDisplay({ posts, setPostUpdate }) {
	const { user } = useContext(UserContext);

	console.log(posts);
	return (
		<div className=" max-w-2xl flex flex-col gap-8 lg:w-4/5 w-full ">
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
								style={`flex items-center h-12 gap-2`}
								size={50}
								divStyle={undefined}
							/>
						</div>
						{post.userId == user._id && (
							<PopoverPosts setPostUpdate={setPostUpdate} postId={post._id} />
						)}
					</div>
					<div className="bg-white">{post.desc}</div>
					<div className="flex items-center justify-center">
						{post.img && <img src={post.img} width={400} alt="post image" />}
					</div>
					<div className="border-t flex justify-between">
						<ButtonLikePosts post={post} />
					</div>
					<ButtonCommentPost post={post} />
					<div>
						{post.comments.map((comment) => (
							<div key={comment._id}>
								<UserNameDisplay
									userId={comment.userId}
									style={`flex items-center h-8 gap-2`}
									size={30}
									divStyle={undefined}
								/>
								<div className=" bg-slate-300 w-fit rounded-xl px-10 py-1">
									{comment.comment}
								</div>
							</div>
						))}
					</div>
				</div>
			))}
		</div>
	);
}
