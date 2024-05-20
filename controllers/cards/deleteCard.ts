import { Request, Response } from "express";
import { ctrlWrapper } from "../../utils";
import { Card } from "../../models";

const deleteCard = async (req: Request, res: Response) => {
  const { id } = req.params;

  const card = await Card.findByIdAndDelete({ _id: id });

  res.status(200).json({ message: "Card deleted" });
};

export const deleteCardCtrl = ctrlWrapper(deleteCard);
