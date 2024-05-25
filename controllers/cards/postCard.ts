import { Request, Response } from "express";
import { Card } from "../../models";
import { ctrlWrapper } from "../../utils";
import { formatOneCard } from "../../services";
import { ICardWithBoard } from "../../constants/constants";

const postCard = async (req: Request, res: Response): Promise<void> => {
  const { title, description, boardId, status, order } = req.body;

  const card = await Card.create({
    title,
    description,
    status,
    order,
    board: { _id: boardId },
  });

  const formattedCard = {
    id: card._id,
    title: card.title,
    description: card.description,
    status: card.status,
    order: card.order,
    boardId: card.board._id,
    board: undefined,
  };

  res.status(201).json(formattedCard);
};

export const postCardCtrl = ctrlWrapper(postCard);
