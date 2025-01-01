import { useState, useContext } from "react";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import { UserContext } from "../../contexts/user-context";

import axios from "axios";

export default function ButtonLikePosts({ post }) {
	const [liked, setLiked] = useState(post.likes.length);
	const { user } = useContext(UserContext);

	const handleLikeClick = async () => {
		const response = await axios.put(
			`https://social-backend-main2.vercel.app/api/posts/${post._id}/like`,
			{
				userId: user._id,
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
					<span className=" flex items-center gap-1 mt-2">
						<ThumbUpOutlinedIcon /> {liked}
					</span>
				</button>
			</div>
		</div>
	);
}
