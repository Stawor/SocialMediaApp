import { useContext } from "react";
import { UserContext } from "../contexts/user-context";
import Posts from "../components/Posts";

export default function Profile() {
	const { user } = useContext(UserContext);
	console.log(user);

	return (
		<div className=" w-full">
			<div className="border flex items-center flex-col gap-10 w-full">
				{!user.profilePicture ? (
					<img
						src="/user.png"
						alt=""
						className="border rounded-full w-1/6 h-auto max-w-[250px] mt-20"
					/>
				) : (
					<img
						src={user.profilePicture}
						alt=""
						className="border rounded-full w-1/6 h-auto max-w-[250px] mt-20"
					/>
				)}

				<div className=" text-2xl font-extrabold lg:text-4xl">
					{user.username}
				</div>
			</div>
			<div className="flex justify-center mt-10">
				<Posts />
			</div>
		</div>
	);
}
