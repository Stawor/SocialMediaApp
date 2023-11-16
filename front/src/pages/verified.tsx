import axios from "axios";
import React from "react";
import { useEffect } from "react";
import Logout from "./logout";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export default function verified() {
	const token = cookies.get("token");
	useEffect(() => {
		async function getData() {
			const response = await axios.get(
				`http://localhost:3000/api/auth/users/6547c9a38aacacd2d13275c2`,
				{
					headers: {
						Authorization: "Bearer " + token,
					},
				}
			);
			console.log(response);
		}
		getData();
	}, []);
	return (
		<>
			{token ? (
				<div>
					<h1>You are logedIn</h1>
					<div>
						<Logout />
					</div>
				</div>
			) : (
				<div>Not logged cant acces</div>
			)}
		</>
	);
}
