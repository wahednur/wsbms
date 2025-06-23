import mongoose from "mongoose";

const connectDB = async (uri: string) => {
  try {
    await mongoose.connect(uri);
    console.log("MongoDB Connected successfully");
  } catch (error) {
    console.error("Failed to connect to MongoDB");
    throw error;
  }
};

export default connectDB;
