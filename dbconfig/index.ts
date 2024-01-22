import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DB_URL!);
    console.log("Database connected successfully !");
    // const connection = mongoose.connection;

    // connection.on("connected", () => {
    //   console.log("Database connected successfully !");
    // });

    // connection.on("error", (err) => {
    //   console.log("MongoDB Connection error" + err);
    //   process.exit();
    // });
  } catch (err) {
    return Promise.reject(err);
  }
};

export default dbConnect;
