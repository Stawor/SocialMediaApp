import Popover from "@mui/material/Popover";
import { HiDotsVertical } from "react-icons/hi";
import Unfollow from "./ButtonUnfollow";
import { useState } from "react";

export default function PopoverContacts({ postId }) {
	const [anchorEl, setAnchorEl] = useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);
	const id = open ? "simple-popover" : undefined;

	return (
		<div>
			<button onClick={handleClick}>
				<HiDotsVertical />
			</button>
			<Popover
				id={id}
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "left",
				}}
				transformOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
			>
				<div className="flex flex-col px-10 text-lg">
					<Unfollow userId={postId} />
				</div>
			</Popover>
		</div>
	);
}
