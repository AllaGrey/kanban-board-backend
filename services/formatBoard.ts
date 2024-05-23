import { CARD_STATUS, IBoard, ICard } from "../constants/constants";

const formatBoard = (board: IBoard, cards: ICard[] = []) => {
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

export { formatBoard };
