import { Board, Card } from "../models";
import { HttpError } from "../utils";

export const deleteBoardWithCards = async (id: string) => {
  const board = await Board.findById({ _id: id });
  if (!board) throw HttpError(404, "Board not found");
  console.log(board);

  const cards = await Card.deleteMany({ board: id });
  console.log(cards);
  return;
};
