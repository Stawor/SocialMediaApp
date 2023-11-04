import mongoose from "mongoose";
const { Schema } = mongoose;
const ObjectId = Schema.ObjectId;

const PostSchema = new Schema({
	id: {
		type: ObjectId,
	},
	userId: {
		type: String,
		required: true,
	},
	desc: {
		type: String,
		max: 500,
	},
	likes: {
		type: Array,
		default: [],
	},
	img: String,
});

const PostModel = mongoose.model("Posts", PostSchema);

export default PostModel;
