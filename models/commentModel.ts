import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  text: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  authorId: {
    type: String,
  },
  thread: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "threads",
  },
  threadId: {
    type: String,
  },
});

const Comment =
  mongoose.models.comments || mongoose.model("comments", CommentSchema);

export default Comment;
