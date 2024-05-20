import { Request, Response } from "express";
import { Board } from "../../models";
import { ctrlWrapper } from "../../utils";

const updateBoard = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title } = req.body;
  const result = await Board.findOneAndUpdate({ _id: id }, { title });
  res.status(200).json(result);
};

export const updateBoardCtrl = ctrlWrapper(updateBoard);
