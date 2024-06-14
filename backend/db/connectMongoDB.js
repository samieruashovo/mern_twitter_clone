import mongoose from "mongoose";
// import { app } from "../server";

const connectMongoDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("mongo db connected to", conn.connection.host);
  } catch (error) {
    console.log("Error in connecting to MongoDB", error.message);
    process.exit(1);
  }
};
export default connectMongoDB;
