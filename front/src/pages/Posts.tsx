import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "../contexts/user-context";
import { Link, Navigate } from "react-router-dom";

import Cookies from "universal-cookie";
import Like from "../components/ui/Like";
import UserImg from "../components/ui/UserImg";
import Popover from "../components/ui/Popover";

const cookies = new Cookies();

export default function UserPosts() {
	const cookie = cookies.get("userId");

	const { user } = useContext(UserContext);
	const { posts } = useContext(UserContext);

	if (!Array.isArray(posts)) {
		return <div>False</div>;
	}
	return (
		<>
			<div className=" max-w-2xl flex flex-col-reverse gap-8 lg:w-4/5 w-full ">
				{posts.map((post) => (
					<div
						key={post._id}
						id="post"
						className="border flex flex-col p-4 gap-8 text-lg rounded-lg"
					>
						<div className=" flex gap-2 items-center text-2xl justify-between relative">
							{/* <UserImg /> */}
							<Popover />
						</div>
						<div className="bg-white">{post.desc}</div>
						<div className="border-t">
							<Like post={post} />
							<div>{user.profilePicture}</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
}
