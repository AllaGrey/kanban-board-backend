import { CARD_STATUS, IBoard, ICard } from "../constants/constants";
import { Board, Card } from "../models";
import { HttpError } from "../utils";

export const getBoardWithCards = async (id: string) => {
  const board: IBoard | null = await Board.findById({ _id: id });
  const cards: ICard[] = await Card.find({ board: board });

  if (!board) throw HttpError(404, "Board not found");

  const sortedCards = {
    todo: cards
      .filter((card) => card.status === CARD_STATUS.TODO)
      .sort((a, b) => a.order - b.order),
    inProgress: cards
      .filter((card) => card.status === CARD_STATUS.IN_PROGRESS)
      .sort((a, b) => a.order - b.order),
    done: cards
      .filter((card) => card.status === CARD_STATUS.DONE)
      .sort((a, b) => a.order - b.order),
  };
  return { id: board._id, title: board.title, cards: sortedCards } as IBoard;
};
