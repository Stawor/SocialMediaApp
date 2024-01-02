import { useEffect, useState } from "react";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";

export default function ButtonDarkTheme() {
	let localTheme = localStorage.getItem("theme");
	const [theme, setTheme] = useState(localTheme || "light");

	if (theme === "dark") {
		document.body.classList.add("dark");
	}

	function handleClick() {
		if (theme === "light") {
			setTheme("dark");
			document.body.classList.toggle("dark");
			localStorage.setItem("theme", "dark");
		} else {
			setTheme("light");
			document.body.classList.toggle("dark");
			localStorage.setItem("theme", "light");
		}
	}
	return (
		<button onClick={handleClick}>
			{theme === "light" ? (
				<DarkModeOutlinedIcon fontSize="large" />
			) : (
				<LightModeOutlinedIcon fontSize="large" />
			)}
		</button>
	);
}
