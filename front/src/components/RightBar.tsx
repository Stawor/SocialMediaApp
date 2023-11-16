import profilePictures from "@/profilePictures";
export default function RigthBar() {
	return (
		<div className=" w-1/4 hidden lg:block">
			<ul className=" flex flex-col gap-6 p-16 ">
				<li>
					<span className=" flex items-center text-2xl hover:bg-slate-200 pr-48 py-4 rounded-lg ">
						Profile
					</span>
				</li>
				<li>
					<span className=" flex items-center text-2xl hover:bg-slate-200 py-4 rounded-lg">
						Home
					</span>
				</li>
				<li>
					<span className=" flex items-center text-2xl hover:bg-slate-200 py-4 rounded-lg">
						Feed
					</span>
				</li>
				<li>
					<span className=" flex items-center text-2xl hover:bg-slate-200  py-4 rounded-lg">
						Jobs
					</span>
				</li>
			</ul>
			<img
				src="https://images.pexels.com/photos/4307869/pexels-photo-4307869.jpeg?auto=compress&cs=tinysrgb&w=50"
				alt="profilePic"
				width={48}
				height="auto"
				className="rounded-full h-12"
			/>
		</div>
	);
}
