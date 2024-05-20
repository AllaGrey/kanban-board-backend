import { NextFunction, Request, Response } from "express";
import { addBoardDataValidation } from "../../services";
import { HttpError } from "../../utils";

export const boardDataValidation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error } = addBoardDataValidation(req.body);

  if (error) {
    return next(HttpError(400, error.message));
  }
  next();
};
