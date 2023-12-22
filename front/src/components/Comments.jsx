import React from "react";
import UserNameDisplay from "./UserNameDisplay";

export default function Comments({ post }) {
	return (
		<>
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
		</>
	);
}
