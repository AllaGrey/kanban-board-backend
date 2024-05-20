import { Request, Response } from "express";
import { Board } from "../../models";
import { ctrlWrapper } from "../../utils";

const deleteBoard = async (req: Request, res: Response) => {
  const { id } = req.params;
  await Board.findOneAndDelete({ _id: id });
  res.status(200).json({ message: "Board was deleted successfully" });
};

export const deleteBoardCtrl = ctrlWrapper(deleteBoard);
