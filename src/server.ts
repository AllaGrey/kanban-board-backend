import app from "./app";
import { Server } from "http";
import mongoose, { Error } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const { PORT, MONGO_URL } = process.env;

app.listen(PORT || 3000, () => {
  console.log(`Server is running on port ${PORT}`);

  if (MONGO_URL) {
    mongoose
      .connect(MONGO_URL, {})
      .then(() => console.log("Connected to MongoDB"))
      .catch((error: Error) => {
        console.log(error.message);
        process.exit(1);
      });
  }
}) as Server;
