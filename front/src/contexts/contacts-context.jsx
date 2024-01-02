import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./user-context";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export const ContactsContext = createContext(false);

export const ContactsContextProvider = ({ children }) => {
	const tokenCookie = cookies.get("token");
	const { user } = useContext(UserContext);
	const [contacts, setContacts] = useState(null);
	const [suggestContacts, setSuggestContacts] = useState(null);
	const [update, setUpdate] = useState(0);

	async function getContacts() {
		if (user) {
			try {
				const response = await axios.get(
					`https://socialmediaapp-production.up.railway.app/api/users/followers/${user._id}`,
					{ headers: { Authorization: `Bearer ${tokenCookie}` } }
				);
				setContacts(response.data.followins);
			} catch (error) {
				console.error(error);
			}
		}
	}
	const getSuggestedContacts = async () => {
		if (user) {
			const response = await axios.get(
				`https://socialmediaapp-production.up.railway.app/api/users/all/${user._id}`,
				{
					id: user._id,
					headers: { Authorization: `Bearer ${tokenCookie}` },
				}
			);
			setSuggestContacts(response.data.userInfo);
		}
	};

	useEffect(() => {
		getContacts();
		getSuggestedContacts();
	}, [user, update]);

	return (
		<ContactsContext.Provider
			value={{
				contacts,
				setContacts,
				suggestContacts,
				setSuggestContacts,
				setUpdate,
			}}
		>
			{children}
		</ContactsContext.Provider>
	);
};
