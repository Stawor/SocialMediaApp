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
const port = process.env.PORT || 3000;

mongoose.set("strictQuery", false);

const mongoDB =
	"mongodb+srv://Stawor:aFwA1IaqfW8bbRKf@cluster0.5vbz39h.mongodb.net/?retryWrites=true&w=majority";

main().catch((err) => console.log(err));

async function main() {
	await mongoose.connect(mongoDB);
}
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

app.listen(port, "0.0.0.0", () => {
	console.log(`Example app listening on port ${port}`);
});
