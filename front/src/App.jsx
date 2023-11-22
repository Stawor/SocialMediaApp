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

function App() {
	const Layout = () => {
		return (
			<div>
				<NavBar />
				<div className=" flex justify-center items-center">
					<div className="flex w-full justify-center gap-10">
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
			path: "/login",
			element: <Login />,
			errorElement: <ErrorPage />,
			children: [],
		},
	]);

	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
