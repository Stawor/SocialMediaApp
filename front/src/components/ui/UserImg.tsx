import React, { useContext } from "react";
import { UserContext } from "../../contexts/user-context";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import UserNameApi from "../UserNameApi";
import FeedApi from "../../apis/FeedApi";

export default function UserImg({ userId }) {
	const { posts } = FeedApi();

	const { user } = useContext(UserContext);
	return (
		<div>
			{!user.profilePicture ? (
				<div className=" text-3xl">
					<Link to="/profile" className="flex gap-2 w-min items-center">
						<FaRegUserCircle />
						<UserNameApi userId={userId} />
					</Link>
				</div>
			) : (
				<div className=" text-3xl">
					<Link to="/profile" className="flex gap-2 w-min items-center">
						<img src={user.profile} alt="" />
						<UserNameApi userId={userId} />
					</Link>
				</div>
			)}
		</div>
	);
}
