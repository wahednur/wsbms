import dotenv from "dotenv";
import app from "./app";
import connectDB from "./config/db";
dotenv.config();

const port = process.env.PORT || 5000;
const uri = process.env.MONGODB_URI;

async function server() {
  try {
    await connectDB(uri!);
    app.listen(port, () => {
      console.log(`WSBMS server running on ${port} port`);
    });
  } catch (err) {
    console.log("Failed to connect mongoDB", err);
  }
}

server();
