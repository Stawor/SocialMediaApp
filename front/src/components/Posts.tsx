import { useEffect, useState } from "react";
import axios from "axios";

export default function Posts({}) {
	const [posts, setPosts] = useState([]);
	const userId = "654698b4ede286e913b8a540";

	useEffect(() => {
		async function getPosts() {
			{
				const response = await axios.get(
					`http://localhost:3000/api/posts/timeline/${userId}`
				);
				setPosts(response.data);
				console.log(posts);
			}
		}
		getPosts();
		// async function mappedPosts() {
		// 	posts.map((post) => {
		// 		return;
		// 	});
		// }
	}, []);
	return (
		<>
			{posts.map((post) => (
				<div key={post._id} className="h-36 border border-black ">
					<div>{post.userId}</div>
					<div>{post.desc}</div>
					<button>Like</button>
				</div>
			))}
		</>
	);
}
