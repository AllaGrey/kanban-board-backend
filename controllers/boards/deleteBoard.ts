import { Request, Response } from "express";
import { ctrlWrapper } from "../../utils";
import { deleteBoardWithCards } from "../../services/deleteBoardWithCards";

const deleteBoard = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  await deleteBoardWithCards(id);

  res.status(200).json({ message: "Board was deleted successfully" });
};

export const deleteBoardCtrl = ctrlWrapper(deleteBoard);
