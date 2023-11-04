import express from "express";
import UserModel from "../models/User.js";
import jwt from "jsonwebtoken";
const auth = express.Router();
import "dotenv/config";
import bcrypt from "bcrypt";

//Register
auth.post("/register", async (req, res) => {
	try {
		//generate hashedPassword
		const hashedPassword = await bcrypt.hash(req.body.password, 10);

		//create new user with hasheddPassword
		const newUser = new UserModel({
			username: req.body.username,
			email: req.body.email,
			password: hashedPassword,
		});
		const user = await newUser.save();
		res.json(user);
	} catch (err) {
		(err.code == 11000 && res.sendStatus(400).json("user already exist")) ||
			res.json(err);
	}
});

//Login
auth.post("/login", async (req, res) => {
	try {
		//find user by email in mongoDB
		const user = await UserModel.findOne({ email: req.body.email });
		//compare password with hashedPassword
		const password = await bcrypt.compare(req.body.password, user.password);
		if (!user) {
			return res.status(401).json("user not found");
		}
		if (!password) {
			return res.status(401).json("bad password");
		}
		//JWT
		const token = jwt.sign(
			{ username: req.body.username },
			process.env.JWT_SECRET,
			(err, token) => {
				res.json({ token });
			}
		);
	} catch (err) {
		res.json(err);
	}
});
//Middleware for JWT
const verifyToken = (req, res, next) => {
	const authHeader = req.headers["authorization"];
	const token = authHeader && authHeader.split(" ")[1];
	if (token == null) return res.sendStatus(401);

	try {
		const decodedToken = jwt.verify(
			token,
			process.env.JWT_SECRET,
			(err, user) => {
				if (err) return res.sendStatus(403);
				req.user = user;
				next();
			}
		);
	} catch (err) {
		res.status(401).json({ message: "Invalid token" });
	}
};

auth.get("/verified", verifyToken, (req, res) => {
	res.json(req.user.username);
});

export default auth;
