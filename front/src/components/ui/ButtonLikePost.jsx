import { useState, useContext } from "react";
import { AiOutlineLike } from "react-icons/ai";

import axios from "axios";

export default function ButtonLikePosts({ post }) {
	const [liked, setLiked] = useState(post.likes.length);

	const handleLikeClick = async () => {
		const response = await axios.put(
			`https://socialmediaapp-production.up.railway.app/api/posts/${post._id}/like`,
			{
				userId: "6548d670de397e939b61416d",
			}
		);

		if ((await response.data) == "disliked") {
			setLiked(liked - 1);
		} else {
			setLiked(liked + 1);
		}
	};

	return (
		<div>
			<div>
				<button onClick={() => handleLikeClick()}>
					<span className=" flex items-center">
						<AiOutlineLike /> {liked}
					</span>
				</button>
			</div>
		</div>
	);
}
