import React, { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "../contexts/user-context";

const ImageUpload = () => {
	const { user } = useContext(UserContext);
	const [selectedImage, setSelectedImage] = useState(null);

	const handleImageChange = (event) => {
		setSelectedImage(event.target.files[0]);
	};

	const handleUpload = async (e) => {
		e.preventDefault();
		const formData = new FormData();
		const fileName = Date.now() + selectedImage.name;
		formData.append("image", selectedImage);
		formData.append("name", fileName);

		try {
			const response = await axios.post(
				`https://socialmediaapp-ydzs.onrender.com/api/upload`,
				formData,
				{
					headers: {
						"Content-Type": "multipart/form-data",
					},
				}
			);
		} catch (error) {
			console.error("Error uploading image:", error);
		}
	};

	return (
		<div>
			<input type="file" onChange={handleImageChange} />
			<button onClick={handleUpload}>Upload</button>
		</div>
	);
};

export default ImageUpload;
