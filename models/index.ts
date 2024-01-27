import mongoose from "mongoose";

// User Model Schema
const UserSchema = new mongoose.Schema({
  fullname: { type: String, require: [true, "please provide a name"] },
  profileImg: { type: String },
  profileBio: { type: String },
  phone: { type: String, require: [false, "please provide a phone number"] },
  email: {
    type: String,
    require: [true, "please provide a email"],
    unique: true,
  },
  username: { type: String, require: [true, "please provide a username"] },
  password: { type: String, require: [true, "please provide a password"] },
  threads: [{ type: mongoose.Schema.Types.ObjectId, ref: "threads" }],
});

export const User =
  mongoose.models.users || mongoose.model("users", UserSchema);

//   Thread Post Model Schema
const ThreadSchema = new mongoose.Schema(
  {
    postCaption: {
      type: String,
    },
    postImage: {
      type: String,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    authorId: {
      type: String,
    },
    //   comments : [{type: mongoose.Schema.Types.ObjectId, ref: "comments"}]
  },
  { timestamps: true }
);

export const Thread =
  mongoose.models.threads || mongoose.model("threads", ThreadSchema);

//   Comments Model Schema
const CommentSchema = new mongoose.Schema({
  commentText: { type: String },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  authorId: { type: String },
  thread: { type: mongoose.Schema.Types.ObjectId, ref: "threads" },
  threadId: { type: String },
});

export const Comment =
  mongoose.models.comments || mongoose.model("comments", CommentSchema);
