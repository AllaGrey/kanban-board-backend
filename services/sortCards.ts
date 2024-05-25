import { CARD_STATUS, IBoard, ICard } from "../constants/constants";

export const sortCards = (cards: ICard[]): Pick<IBoard, "cards">["cards"] => {
  return {
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
};
