import express, { Router, Request, Response, NextFunction } from "express";
import { postBoardCtrl } from "../controllers/boards/postBoardController";

const boardsRouter: Router = express.Router();

boardsRouter.get("/", (req, res) => {
  res.send("Board");
});

boardsRouter.get("/:id", (req, res) => {});

boardsRouter.post("/", postBoardCtrl);

boardsRouter.put("/:id", (req, res) => {});

boardsRouter.delete("/:id", (req, res) => {});

export default boardsRouter;
