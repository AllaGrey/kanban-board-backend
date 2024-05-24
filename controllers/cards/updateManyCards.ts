import { Request, Response } from "express";
import { ctrlWrapper } from "../../utils";
import { updateManyCardsWithBoard } from "../../services/updateManyCardsWithBoard";

const updateManyCards = async (req: Request, res: Response) => {
  const result = await updateManyCardsWithBoard(req.body);

  res.status(200).json(result);
};

export const updateManyCardsCtrl = ctrlWrapper(updateManyCards);
