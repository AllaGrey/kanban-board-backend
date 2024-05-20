import { Request, Response } from "express";
import { Board } from "../../models";
import { ctrlWrapper } from "../../utils";

const getAllBoards = async (req: Request, res: Response) => {
  const boards = await Board.find();

  res.status(200).json(boards);
};

export const getAllBoardsCtrl = ctrlWrapper(getAllBoards);
