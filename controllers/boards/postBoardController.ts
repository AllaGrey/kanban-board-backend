import { Request, Response } from "express";
import { Board } from "../../models/board";
import { HttpError } from "../../utils/HttpError";
import { ctrlWrapper } from "../../utils/ctrlWrapper";

const postBoard = async (req: Request, res: Response) => {
  // if (!req.body) throw HttpError(400, "No data provided in the request body");
  const { title } = req.body;

  if (!title) HttpError(400, "No title provided in the request body");

  const board = await Board.create({ title });
  if (!board) HttpError(400, "Invalid board");

  res.status(201).json({ message: board });
};

export const postBoardCtrl = ctrlWrapper(postBoard);
