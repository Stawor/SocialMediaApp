import { useState } from "react";
import UserNameDisplay from "./UserNameDisplay";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

export default function Comments({ post }) {
	const [showComments, setShowComments] = useState("hidden");

	function handleClick() {
		if (showComments == "hidden") {
			setShowComments("block");
			console.log(showComments);
		} else {
			setShowComments("hidden");
			console.log(showComments);
		}
	}
	return (
		<div className=" flex flex-col gap-4">
			<button onClick={handleClick}>
				Show Comments
				{showComments == "hidden" ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
			</button>
			<div className={`${showComments}`}>
				{post.comments.map((comment, index) => (
					<div key={index}>
						<UserNameDisplay
							userId={comment.userId}
							style={`flex items-center h-8 gap-2`}
							size={30}
							divStyle={undefined}
						/>
						<div className="flex mx-3">
							<hr
								className={`w-10 border-slate-400 border-dashed border-r h-5 rotate-180 = `}
							/>
							<div className=" bg-slate-200 w-fit rounded-xl px-2 py-1 ">
								{comment.comment}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
