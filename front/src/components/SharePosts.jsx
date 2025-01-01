import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { UserContext } from "../contexts/user-context";
import UserNameApi from "./UserNameDisplay";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import Skeleton from "@mui/material/Skeleton";
import {
	getStorage,
	ref,
	uploadBytesResumable,
	getDownloadURL,
	uploadBytes,
} from "firebase/storage";
import { app } from "../utils/firebase";

export default function SharePosts({ setUpdatePosts }) {
	const storage = getStorage(app);
	const { user } = useContext(UserContext);
	const [desc, setDesc] = useState("");
	const [file, setFile] = useState(null);
	const [UploadFile, setUploadFile] = useState(false);
	const [UploadProgress, setUploadProgress] = useState(false);

	const [downloadUrl, setDownloadUrl] = useState("");

	useEffect(() => {
		if (file) {
			const metadata = {
				contentType: "image/jpeg",
			};
			const fileName = new Date() + file.name;
			// Upload file and metadata to the object 'images/mountains.jpg'
			const storageRef = ref(storage, "images/" + fileName);
			const uploadTask = uploadBytesResumable(storageRef, file, metadata);

			// Listen for state changes, errors, and completion of the upload.
			uploadTask.on(
				"state_changed",
				(snapshot) => {
					// Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
					const progress =
						(snapshot.bytesTransferred / snapshot.totalBytes) * 100;

					setUploadProgress(Math.round(progress));
				},
				(error) => {
					// A full list of error codes is available at
					// https://firebase.google.com/docs/storage/web/handle-errors
					switch (error.code) {
						case "storage/unauthorized":
							// User doesn't have permission to access the object
							break;
						case "storage/canceled":
							// User canceled the upload
							break;

						// ...

						case "storage/unknown":
							// Unknown error occurred, inspect error.serverResponse
							break;
					}
				},
				async () => {
					// Upload completed successfully, now we can get the download URL
					await getDownloadURL(uploadTask.snapshot.ref).then(
						async (downloadURL) => {
							setDownloadUrl(downloadURL);
							setUploadFile(false);
						}
					);
				}
			);
		}
	}, [file]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await axios.post(`https://social-backend-main2.vercel.app/api/posts`, {
				userId: user._id,
				desc: desc,
				img: downloadUrl,
			});
			setUpdatePosts((prev) => prev + 1);
			setDesc("");
		} catch (err) {
			console.log(err);
		}
	};
	if (!user) {
		return (
			<div className="flex justify-center items-center my-10">
				<Skeleton variant="rounded" width={480} height={240} />
			</div>
		);
	}

	return (
		<form
			onSubmit={handleSubmit}
			id="post"
			className="border bg-white flex flex-col p-4 gap-8 mt-10 text-lg rounded-lg mb-8 max-w-2xl lg:w-4/5 w-full dark:bg-slate-800"
		>
			<label htmlFor="post">
				<div className=" text-3xl mb-4 flex items-center">
					<UserNameApi
						userId={user._id}
						style={`h-12 w-12 text-5xl`}
						divStyle={`flex`}
					/>
				</div>

				<input
					type="text"
					name="name"
					value={desc}
					className=" w-full border border-slate-300 h-20 px-10 rounded-lg mb-4 dark:bg-slate-700 hover:bg-slate-100"
					placeholder="How are you doing?"
					onChange={(e) => setDesc(e.target.value)}
				/>
				<div className=" flex items-center justify-between ">
					{UploadFile && file ? (
						<button
							disabled
							type="submit"
							className="px-6  py-2 bg-blue-500 opacity-50 rounded-lg text-white font-bold text-base faded w-24"
						>
							{UploadProgress}
						</button>
					) : (
						<button
							type="submit"
							className="px-6 py-2 bg-blue-500 rounded-lg text-white font-bold text-base w-24"
						>
							Post
						</button>
					)}
					<input
						type="file"
						id="image"
						onChange={(e) => setFile(e.target.files[0])}
						onClick={() => setUploadFile(true)}
						className=" hidden"
					/>
					<label htmlFor="image">
						<div id="image" className=" cursor-pointer flex items-center gap-">
							<h1 className=" font-bold">Image</h1>
							<ImageSearchIcon />
						</div>
					</label>
				</div>
			</label>
		</form>
	);
}
