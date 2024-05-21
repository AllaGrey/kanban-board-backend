import { Request, Response } from "express";
import { Card } from "../../models";
import { ctrlWrapper } from "../../utils";

const postCard = async (req: Request, res: Response): Promise<void> => {
  const { title, description, boardId, status, order } = req.body;

  const card = await Card.create({
    title,
    description,
    status,
    order,
    board: { _id: boardId },
  });

  res.status(201).json(card);
};

export const postCardCtrl = ctrlWrapper(postCard);
