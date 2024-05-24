import { Request, Response, NextFunction } from "express";
import { addCardDataValidation, checkBoard } from "../../services";
import { HttpError } from "../../utils";

export const cardDataValidation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = req.body;

  if (Array.isArray(data)) {
    for (const card of data) {
      const { error, value } = addCardDataValidation(card);

      if (error) {
        return next(HttpError(400, error.message));
      }

      await checkBoard(value.boardId);
    }
  } else {
    const { error, value } = addCardDataValidation(data);

    if (error) {
      return next(HttpError(400, error.message));
    }

    await checkBoard(value.boardId);

    req.body = value;
  }

  next();
};
