import { Request, Response } from "express";
import { Board } from "../../models";
import { ctrlWrapper } from "../../utils";

const postBoard = async (req: Request, res: Response) => {
  const { title } = req.body;

  const board = await Board.create({ title });

  res.status(201).json({ message: board });
};

export const postBoardCtrl = ctrlWrapper(postBoard);
