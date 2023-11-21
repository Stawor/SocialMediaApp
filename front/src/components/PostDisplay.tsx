import React, { useContext } from "react";
import UserNameApi from "./UserNameDisplay";
import UserPopover from "./ui/PopoverPosts";
import Like from "./ui/ButtonLikePost";
import { UserContext } from "../contexts/user-context";

export default function PostDisplay({ posts }: any[]) {
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
							<UserNameApi
								userId={post.userId}
								style={`flex items-center h-12 gap-2`}
								size={50}
								divStyle={undefined}
							/>
						</div>
						{post.userId == user._id && <UserPopover postId={post._id} />}
					</div>
					<div className="bg-white">{post.desc}</div>
					<div className="flex items-center justify-center">
						{post.img && <img src={post.img} width={400} alt="post image" />}
					</div>
					<div className="border-t">
						<Like post={post} />
					</div>
				</div>
			))}
		</div>
	);
}
