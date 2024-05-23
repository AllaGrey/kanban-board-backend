import { Board, Card } from "../models";
import { HttpError } from "../utils";

export const deleteBoardWithCards = async (id: string) => {
  const board = await Board.findByIdAndDelete({ _id: id });
  if (!board) throw HttpError(404, "Board not found");

  await Card.deleteMany({ board: id });

  return;
};
