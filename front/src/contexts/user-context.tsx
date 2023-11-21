import { createContext, useEffect, useState } from "react";
import UserApi from "../components/UserNameDisplay";
import Cookies from "universal-cookie";
import axios from "axios";
import UserData from "../components/UserData";
import LoginApi from "../apis/LoginApi";

export const UserContext = createContext(false);
const cookies = new Cookies();

export const UserContextProvider = ({ children }) => {
	const tokenCookie = cookies.get("token");
	const cookie = cookies.get("userId");
	const [user, setUser] = useState("");

	const getData = async () => {
		if (cookie) {
			const response = await axios.get(
				`http://localhost:3000/api/users/${cookie}`,
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
