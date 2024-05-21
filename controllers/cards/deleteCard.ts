import { Request, Response } from "express";
import { HttpError, ctrlWrapper } from "../../utils";
import { Card } from "../../models";

const deleteCard = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  const card = await Card.findByIdAndDelete({ _id: id });
  if (!card) throw HttpError(404, "Card not found");

  res.status(200).json({ message: "Card was successful deleted" });
};

export const deleteCardCtrl = ctrlWrapper(deleteCard);
