import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { UserContextProvider } from "./contexts/user-context.jsx";
import { ContactsContextProvider } from "./contexts/contacts-context.jsx";
import React from "react";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<UserContextProvider>
			<ContactsContextProvider>
				<App />
			</ContactsContextProvider>
		</UserContextProvider>
	</React.StrictMode>
);
