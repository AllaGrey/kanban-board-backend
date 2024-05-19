import app from "./app";
import { Server } from "http";
import mongoose, { Error } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const { PORT, MONGODB_URI } = process.env;

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI is not defined");
}

console.log("Attempting to connect to MongoDB...");

const dbConnection = async () =>
  mongoose
    .connect(MONGODB_URI, {})
    .then(() => console.log("Connected to MongoDB"))
    .catch((error: Error) => {
      console.log("MongoDB connection error:", error);
      process.exit(1);
    });

const startServer = () => {
  app.listen(PORT || 3000, () => {
    console.log(`Server is running on port ${PORT}`);
  }) as Server;
};

const init = async () => {
  await dbConnection();
  startServer();
};

init();
