import Popover from "@mui/material/Popover";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../../contexts/user-context";

export default function PopoverPosts({ postId, setPostUpdate }) {
	const [anchorEl, setAnchorEl] = useState(null);
	const [error, setError] = useState("");
	const { user } = useContext(UserContext);

	const handleClick = async () => {
		try {
			await axios.delete(
				`https://socialmediaapp-production.up.railway.app/api/posts/${postId}/${user._id}`
			);
		} catch (err) {
			setError(err.response.data);
		}
		setPostUpdate((prev) => prev + 1);
	};

	const handleOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);
	const id = open ? "simple-popover" : undefined;

	return (
		<div>
			<button onClick={handleOpen}>
				<MoreVertIcon />
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
					<button onClick={handleClick}>Delete</button>
				</div>
			</Popover>
		</div>
	);
}
