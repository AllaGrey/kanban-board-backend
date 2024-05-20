import { Request, Response, NextFunction } from "express";
import { addCardDataValidation, checkBoard } from "../../services";
import { HttpError } from "../../utils";

export const cardDataValidation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error, value } = addCardDataValidation(req.body);

  if (error) {
    return next(HttpError(400, error.message));
  }

  await checkBoard(value.boardId);

  req.body = value;

  next();
};
