import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import router from "./routes/users.js";
import auth from "./routes/auth.js";
import posts from "./routes/posts.js";
import multer from "multer";
import path from "express";

const app = express();
const port = 3000;

mongoose.connect(process.env.MONGO_URL);
const mongoDB = process.env.MONGO_URL;

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(
	cors({
		origin: ["https://social-media-app-w99u.vercel.app/"],
		methods: ["POST", "GET", "PUT", "DELETE"],
		credentials: true,
	})
);

app.use("/api/users", router);
app.use("/api/auth", auth);
app.use("/api/posts", posts);

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		return cb(null, "./public/Images");
	},
	filename: function (req, file, cb) {
		return cb(null, `${Date.now()}_${file.originalname}`);
	},
});

const upload = multer({ storage });

app.post("/upload", upload.single("file"), (req, res) => {
	console.log(req.body);
	console.log(req.file);
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});

app.get("/", (req, res) => {
	res.send("Hello World!");
});
