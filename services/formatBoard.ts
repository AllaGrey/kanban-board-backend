import { IBoard, ICard } from "../constants/constants";
import { formatCards } from "./formatCards";
import { sortCards } from "./sortCards";

interface ICardWithBoard extends ICard {
  board?: string;
}

const formatBoard = (boardData: IBoard, cards: ICardWithBoard[] = []) => {
  const formattedCards = formatCards(cards);

  const sortedCards = sortCards(formattedCards);

  return {
    id: boardData._id,
    title: boardData.title,
    cards: sortedCards,
  } as IBoard;
};

export { formatBoard };
