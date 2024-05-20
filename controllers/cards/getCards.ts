import { Request, Response } from "express";
import { ctrlWrapper } from "../../utils";

const getBoardCards = async (req: Request, res: Response) => {
  res.status(200).json("success");
};

export const getBoardCardsCtrl = ctrlWrapper(getBoardCards);
