import axios from "axios";

export default function Delete({ postId }) {
	const handleClick = () => {
		axios.delete(`http://localhost:3000/api/posts/${postId}`);
		window.location.reload();
	};
	return <button onClick={handleClick}>Delete</button>;
}
