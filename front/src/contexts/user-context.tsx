import { createContext, useEffect, useState } from "react";
import UserApi from "../components/UserNameApi";
import Cookies from "universal-cookie";
import axios from "axios";
import UserData from "../components/UserData";
import LoginApi from "../apis/LoginApi";

export const UserContext = createContext(false);
const cookies = new Cookies();

export const UserContextProvider = ({ children }) => {
	const cookie = cookies.get("userId");
	const [user, setUser] = useState("");

	const getData = async () => {
		if (cookie) {
			const response = await axios.get(
				`http://localhost:3000/api/users/${cookie}`
			);
			setUser(response.data);
		}
	};
	useEffect(() => {
		getData();
	}, [cookie]);

	console.log(user);
	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
};
