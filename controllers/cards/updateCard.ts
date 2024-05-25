import { Request, Response } from "express";
import { HttpError, ctrlWrapper } from "../../utils";
import { Card } from "../../models";
import { formatOneCard } from "../../services";
import { ICardWithBoard } from "../../constants/constants";

const updateCard = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  const card = (await Card.findByIdAndUpdate({ _id: id }, req.body, {
    new: true,
  })) as ICardWithBoard;
  if (!card) throw HttpError(404, "Card not found");
  const formattedCard = formatOneCard(card);

  res.status(200).json(formattedCard);
};

export const updateCardCtrl = ctrlWrapper(updateCard);
