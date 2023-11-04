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

mongoose.connect(process.env.MONGO_URL);

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(cors());

app.use("/api/users", router);
app.use("/api/auth", auth);
app.use("/api/posts", posts);

app.get("/", (req, res) => {
	res.send("hello");
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
