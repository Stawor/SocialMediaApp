import Popover from "@mui/material/Popover";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { UserContext } from "../../contexts/user-context";
import { useState, useContext } from "react";
import axios from "axios";
import { ContactsContext } from "../../contexts/contacts-context";

export default function PopoverContacts({ userId }) {
	const [anchorEl, setAnchorEl] = useState(null);
	const { user } = useContext(UserContext);
	const { setUpdate } = useContext(ContactsContext);

	const handleClick = async () => {
		await axios.put(
			`https://social-backend-main2.vercel.app/${userId}/unfollow`,
			{
				id: user._id,
			}
		);
		setUpdate((prev) => prev + 1);
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
					<button onClick={handleClick}>Unfollow</button>
				</div>
			</Popover>
		</div>
	);
}
