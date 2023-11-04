import "./App.css";
import Friends from "./components/Friends";
import Posts from "./components/Posts";
import Share from "./components/Share";
import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";

function App() {
	return (
		<>
			<TopBar />
			<div className=" flex justify-center items-center">
				<div className=" flex justify-center items-center max-w-7xl">
					<div className=" bg-slate-500 ">
						<SideBar />
					</div>
					<div className="">
						<Share />
						<Posts />
					</div>
					<div className="bg-green-400">
						<Friends />
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
