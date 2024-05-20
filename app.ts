import express, { Request, Response, NextFunction, Application } from "express";
import cors from "cors";
import dotenv from "dotenv";
import boardsRouter from "./routes/api/boards";
import cardsRouter from "./routes/api/cards";
import { IHttpError } from "./utils/HttpError";

const app: Application = express();

dotenv.config();

app.use(cors());

app.use(express.json());

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello World");
});

app.use("/api/boards", boardsRouter);
app.use("/api/cards", cardsRouter);

app.use((req: Request, res: Response) => {
  res.status(404).json({ message: "Not Found" });
});

app.use((err: IHttpError, req: Request, res: Response, next: NextFunction) => {
  const status = err.status || 500;
  const message = err.message || "Internal Server Error";
  res.status(status).json({ error: { message, status } });
});

export default app;
