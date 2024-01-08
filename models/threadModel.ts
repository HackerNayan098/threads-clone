import mongoose from "mongoose";

const ThreadSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    authorId: {
      type: String,
    },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "comments" }],
  },
  { timestamps: true }
);

const Thread =
  mongoose.models.threads || mongoose.model("threads", ThreadSchema);

export default Thread;
