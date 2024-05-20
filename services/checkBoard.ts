import { Board } from "../models/board";
import { HttpError } from "../utils/HttpError";

export const checkBoard = async (id: string) => {
  const board = await Board.findById({ _id: id });
  if (!board) throw HttpError(400, "Board not found");
  return board;
};
