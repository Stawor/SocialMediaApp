import { createContext, useEffect, useState } from "react";
import Cookies from "universal-cookie";
import axios from "axios";

export const UserContext = createContext(false);
const cookies = new Cookies();

export const UserContextProvider = ({ children }) => {
	const tokenCookie = cookies.get("token");
	const cookie = cookies.get("userId");
	const [user, setUser] = useState("");

	const getData = async () => {
		if (cookie) {
			const response = await axios.get(
				`https://socialmediaapp-production.up.railway.app/api/users/${cookie}`,
				{ headers: { Authorization: `Bearer ${tokenCookie}` } }
			);
			setUser(response.data);
		}
	};
	useEffect(() => {
		getData();
	}, [cookie]);

	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
};
