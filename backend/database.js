import mongoose from "mongoose";

const MONGO_URL = process.env.MONGO_URL || "";

export const connectDB = async () => {
  const { connection } = await mongoose.connect(MONGO_URL);
  console.log(`MongoDB connected with ${connection.host}`);
};
