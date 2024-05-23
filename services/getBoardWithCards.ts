import { IBoard, ICard } from "../constants/constants";
import { Board, Card } from "../models";
import { HttpError } from "../utils";
import { formatBoard } from "./formatBoard";

export const getBoardWithCards = async (id: string) => {
  const board: IBoard | null = await Board.findById({ _id: id });
  const cards: ICard[] = await Card.find({ board: board });

  if (!board) throw HttpError(404, "Board not found");

  const formattedBoard = formatBoard(board, cards);

  return formattedBoard;
};
