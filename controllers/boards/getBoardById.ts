import { Request, Response } from "express";
import { getBoardWithCards } from "../../services";
import { ctrlWrapper } from "../../utils";

export const getBoardById = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;

  const board = await getBoardWithCards(id);

  res.status(200).json(board);
};

export const getBoardByIdCtrl = ctrlWrapper(getBoardById);
