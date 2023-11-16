import * as React from "react";
import Popover from "@mui/material/Popover";
import { HiDotsVertical } from "react-icons/hi";
import Delete from "./Delete";

export default function Popove1({ postId }) {
	const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
		null
	);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
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
					<button>Change</button>
					<Delete postId={postId} />
				</div>
			</Popover>
		</div>
	);
}
