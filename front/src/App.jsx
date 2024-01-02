import {
	Navigate,
	Outlet,
	RouterProvider,
	createBrowserRouter,
} from "react-router-dom";
import NavBar from "./components/NavBar";
import SideBar from "./components/LeftBar";
import RightBar from "./components/RightBar";
import Home from "./pages/Home";
import ErrorPage from "./pages/Error-page";
import Register from "./pages/Register";
import Cookies from "universal-cookie";
import Login from "./pages/Login";

import UserProfile from "./pages/UserProfile";
import ContactPage from "./pages/ContactPage";

function App() {
	const Layout = () => {
		return (
			<div>
				<NavBar />
				<div className=" flex justify-center items-center dark:bg-slate-900 dark:text-slate-300">
					<div className="flex w-full justify-center">
						<SideBar />
						<Outlet />
						<RightBar />
					</div>
				</div>
			</div>
		);
	};

	const ProtectedRoute = ({ children }) => {
		const cookie = new Cookies();
		const userAuth = cookie.get("token");
		if (!userAuth) {
			return <Navigate to="/login" />;
		}

		return children;
	};
	const router = createBrowserRouter([
		{
			path: "/",
			element: (
				<ProtectedRoute>
					<Layout />
				</ProtectedRoute>
			),
			errorElement: <ErrorPage />,
			children: [
				{
					path: "/",
					element: <Home />,
				},
				{
					path: "/profile/:userId",
					element: <UserProfile />,
				},
				{
					path: "/feed",
					element: <Home />,
				},
			],
		},

		{
			path: "/register",
			element: <Register />,
			errorElement: <ErrorPage />,
		},

		{
			path: "/contacts",
			element: <ContactPage />,
			errorElement: <ErrorPage />,
		},
		{
			path: "/login",
			element: <Login />,
			errorElement: <ErrorPage />,
		},
	]);

	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
