import express, { Request, Response, NextFunction, Application } from "express";
import cors from "cors";
import dotenv from "dotenv";

import boardsRouter from "./routes/boards";
import cardsRouter from "./routes/cards";
import mongoose from "mongoose";

const app: Application = express();

dotenv.config();

app.use(cors());

app.use(express.json());

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello World");
});

app.use("/boards", boardsRouter);
app.use("/cards", cardsRouter);

app.get("/check-db-connection", async (req: Request, res: Response) => {
  try {
    await mongoose.connection.db.admin().ping();
    res.status(200).send("Database connection is successful!");
  } catch (error) {
    res.status(500).send("Database connection failed!");
  }
});

app.use((req: Request, res: Response) => {
  res.status(404).json({ message: "Not Found" });
});

app.use((req: Request, res: Response) => {
  res.status(500).json({ message: "Internal Server Error" });
});

export default app;
