import { useState, useContext } from "react";
import Popover from "@mui/material/Popover";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { UserContext } from "../../contexts/user-context";
import axios from "axios";

export default function FriendPopover({ setUserUpdate, userId }) {
	const [anchorEl, setAnchorEl] = useState(null);

	const { user } = useContext(UserContext);

	const handleClick = async () => {
		await axios.put(
			`https://socialmediaapp-production.up.railway.app/api/users/${userId}/follow`,
			{
				id: user._id,
			}
		);
		setUserUpdate((prevUser) => prevUser + 1);
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
					<button onClick={handleClick}>Follow</button>
				</div>
			</Popover>
		</div>
	);
}
