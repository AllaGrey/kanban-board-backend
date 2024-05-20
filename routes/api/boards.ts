import express, { Router } from "express";
import { boardDataValidation } from "../../middlewares";
import {
  deleteBoardCtrl,
  getAllBoardsCtrl,
  getBoardByIdCtrl,
  postBoardCtrl,
  updateBoardCtrl,
} from "../../controllers/boards";

const boardsRouter: Router = express.Router();

boardsRouter.get("/:id", getBoardByIdCtrl);

boardsRouter.get("/", getAllBoardsCtrl);

boardsRouter.post("/", boardDataValidation, postBoardCtrl);

boardsRouter.patch("/:id", updateBoardCtrl);

boardsRouter.delete("/:id", deleteBoardCtrl);

export default boardsRouter;
