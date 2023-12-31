import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "please provide a name"],
  },
  phone: {
    type: String,
    require: [false, "please provide a phone number"],
  },
  email: {
    type: String,
    unique: true,
    require: [true, "please provide a email"],
  },
  username: {
    type: String,
    require: [true, "please provide a username"],
  },
  password: {
    type: String,
    require: [true, "please provide a password"],
  },
  threads: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "threads",
    },
  ],
});

const User = mongoose.models.users || mongoose.model("users", UserSchema);

export default User;
