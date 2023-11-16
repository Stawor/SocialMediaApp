import express from "express";
import UserModel from "../models/User.js";
const router = express.Router();

// delete a user
router.delete("/:id", async (req, res) => {
	if (req.params.id == req.body.id) {
		try {
			await UserModel.findByIdAndDelete(req.params.id);
			res.status(200).json("Account has been deleted");
		} catch (err) {
			return res.status(500).json(err);
		}
	} else {
		return res.status(403).json(err);
	}
});

// get a user
router.get("/:id", async (req, res) => {
	try {
		const user = await UserModel.findById(req.params.id);
		const { password, ...other } = user._doc;
		res.status(200).json(other);
	} catch (err) {
		res.status(500).json(err);
	}
});

//follow a user
router.put("/:id/follow", async (req, res) => {
	if (req.params.id !== req.body.id) {
		try {
			const user = await UserModel.findById(req.params.id);
			const currentUser = await UserModel.findById(req.body.id);
			if (!user.followers.includes(req.body.id)) {
				await user.updateOne({ $push: { followers: req.body.id } });
				await currentUser.updateOne({ $push: { followins: req.params.id } });
				res.status(200).json("User has been followed");
			} else {
				res.status(403).json("You allready follow this user");
			}
		} catch {
			req.status(500).json(err);
		}
	} else {
		res.status(403).json("you cant follow yourself");
	}
});

//unfollow a user
router.put("/:id/unfollow", async (req, res) => {
	if (req.params.id !== req.body.id) {
		try {
			const user = await UserModel.findById(req.params.id);
			const currentUser = await UserModel.findById(req.body.id);
			if (user.followers.includes(req.body.id)) {
				await user.updateOne({ $pull: { followers: req.body.id } });
				await currentUser.updateOne({ $pull: { followins: req.body.id } });
				res.status(200).json("User has been unfollowed");
			} else {
				res.status(403).json("You dont follow this user");
			}
		} catch {
			req.status(500).json(err);
		}
	} else {
		res.status(403).json("you cant follow yourself");
	}
});

export default router;
