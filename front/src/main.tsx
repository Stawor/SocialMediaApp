import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { UserContextProvider } from "./contexts/user-context.tsx";
import React from "react";
import { PostContextProvider } from "./contexts/post-context.tsx";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<UserContextProvider>
			<PostContextProvider>
				<QueryClientProvider client={queryClient}>
					<App />
				</QueryClientProvider>
			</PostContextProvider>
		</UserContextProvider>
	</React.StrictMode>
);
