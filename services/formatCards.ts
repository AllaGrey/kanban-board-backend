import { ICard } from "../constants/constants";

interface ICardWithBoard extends ICard {
  board?: string;
}

export const formatCards = (cards: ICardWithBoard[]): ICard[] => {
  return cards.map((card) => ({
    _id: card._id,
    title: card.title,
    description: card.description,
    status: card.status,
    order: card.order,
    boardId: card.board,
    board: undefined,
  })) as ICard[];
};
