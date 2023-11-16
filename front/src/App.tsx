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
import ErrorPage from "./pages/error-page";
import Register from "./pages/register";
import Verified from "./pages/verified";
import Profile from "./pages/Profile";
import Cookies from "universal-cookie";
import Login from "./pages/login";
import Posts from "./pages/Posts";
import LoginApi from "./apis/LoginApi";

function App() {
	const Layout = () => {
		return (
			<div>
				<NavBar />
				<div className=" flex justify-center items-center">
					<div className="flex w-full">
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
					path: "/profile",
					element: <Profile />,
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
