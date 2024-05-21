import { Request, Response } from "express";
import { ctrlWrapper } from "../../utils";
import { Card } from "../../models";

const updateCard = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  const card = await Card.findByIdAndUpdate({ _id: id }, req.body, {
    new: true,
  });

  res.status(200).json(card);
};

export const updateCardCtrl = ctrlWrapper(updateCard);
