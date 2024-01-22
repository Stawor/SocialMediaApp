import { useState } from "react";
import UserNameDisplay from "./UserNameDisplay";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

export default function Comments({ post }) {
	const [showComments, setShowComments] = useState("hidden");

	function handleClick() {
		if (showComments == "hidden") {
			setShowComments("block");
		} else {
			setShowComments("hidden");
		}
	}

	return (
		<div className=" flex flex-col gap-4">
			{post.comments.length > 0 ? (
				<button onClick={handleClick}>
					<p className="text-slate-400 text-center">
						Show Comments{" "}
						{showComments == "block" ? (
							<ArrowDropUpIcon />
						) : (
							<ArrowDropDownIcon />
						)}
					</p>
				</button>
			) : (
				<p className="text-slate-400 text-center">No comments yet, be first!</p>
			)}
			<div className={`${showComments}`}>
				{post.comments.map((comment, index) => (
					<div key={index}>
						<UserNameDisplay
							userId={comment.userId}
							style={`flex items-center h-10 w-10 text-4xl gap-2`}
							divStyle={`flex `}
						/>
						<div className="flex mx-3">
							<hr
								className={`w-10 border-slate-300 border-dashed border-r h-5 rotate-180 transform translate-x-1.5 dark:border-slate-700 `}
							/>
							<div className=" bg-slate-200 w-fit rounded-xl px-2 py-1 dark:bg-black">
								{comment.comment}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
