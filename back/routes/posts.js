import express from "express";
const router = express.Router();
import PostModel from "../models/Posts.js";
import UserModel from "../models/User.js";

//create a post
router.post("/", async (req, res) => {
	const newPost = new PostModel(req.body);
	try {
		if (req.body.userId == null) {
			return;
		}
		const savePost = newPost.save();
		res.status(200).json("Post Created");
	} catch (err) {
		res.status(500).json(err);
	}
});
//update a post

router.put("/:id", async (req, res) => {
	try {
		const post = PostModel.findById(req.params.id);
		if (post.userId === req.body.id) {
			await post.updateOne({ $set: req.body });
			res.status(200).json("Post have been updated");
		} else {
			res.status(403).json("You can update only your post");
		}
	} catch (err) {
		res.status(500).json(err);
	}
});

//delete a post
router.delete("/:id", async (req, res) => {
	try {
		const post = PostModel.findById(req.params.id);
		if (post.userId === req.body.id) {
			await post.deleteOne();
			res.status(200).json("Post have been deleted");
		} else {
			res.status(403).json("You can delete only your post");
		}
	} catch (err) {
		res.status(500).json(err);
	}
});
// like or dislike a post
router.put("/:id/like", async (req, res) => {
	try {
		const post = await PostModel.findById(req.params.id);
		if (!post.likes.includes(req.body.userId)) {
			await post.updateOne({ $push: { likes: req.body.userId } });
			res.status(200).json("The post has been liked");
		} else {
			await post.updateOne({ $pull: { likes: req.body.userId } });
			res.status(200).json("The post has been disliked");
		}
	} catch (err) {
		res.status(500).json(err);
	}
});

// get post
router.get("/:id", async (req, res) => {
	try {
		const post = await PostModel.findById(req.params.id);
		res.status(200).json(post);
	} catch (err) {
		res.status(500).json(err);
	}
});

// get timeline posts
router.get("/timeline/:id", async (req, res) => {
	try {
		const user = await UserModel.findById(req.params.id);
		const userPosts = await PostModel.find({ userId: user._id });
		res.json(userPosts);
	} catch (err) {
		res.status(500).json(err);
	}
});

export default router;
