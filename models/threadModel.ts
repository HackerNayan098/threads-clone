import mongoose from "mongoose";

const threadSchema = new mongoose.Schema(
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
    community: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Community",
    },
  },
  { timestamps: true }
);

const Thread = mongoose.models.Thread || mongoose.model("Thread", threadSchema);

export default Thread;
