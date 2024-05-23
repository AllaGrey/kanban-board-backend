import { Request, Response } from "express";
import { Board } from "../../models";
import { ctrlWrapper } from "../../utils";
import { formatBoard } from "../../services/formatBoard";
import { IBoard } from "../../constants/constants";

const postBoard = async (req: Request, res: Response): Promise<void> => {
  const { title } = req.body;

  const boardDoc = await Board.create({ title });
  const board = boardDoc.toObject() as IBoard;

  const formattedBoard = formatBoard(board);

  res.status(201).json(formattedBoard);
};

export const postBoardCtrl = ctrlWrapper(postBoard);
