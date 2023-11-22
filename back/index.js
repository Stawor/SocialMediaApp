import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import router from "./routes/users.js";
import auth from "./routes/auth.js";
import posts from "./routes/posts.js";

const app = express();
const port = 3000;

const db = mongoose.connect(process.env.MONGO_URL);
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
	console.log("Connected successfully");
});

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(cors());

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.use("/api/users", router);
app.use("/api/auth", auth);
app.use("/api/posts", posts);

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
