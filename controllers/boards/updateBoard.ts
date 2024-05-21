import { Request, Response } from "express";
import { Board } from "../../models";
import { ctrlWrapper } from "../../utils";

const updateBoard = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const { title } = req.body;
  const result = await Board.findOneAndUpdate(
    { _id: id },
    { title },
    { new: true }
  );
  res.status(200).json(result);
};

export const updateBoardCtrl = ctrlWrapper(updateBoard);
