import { ICard, ICardWithBoard } from "../constants/constants";

export const formatOneCard = (card: ICardWithBoard): ICard => {
  return {
    id: card._id,
    title: card.title,
    description: card.description,
    status: card.status,
    order: card.order,
    boardId: card.board,
    board: undefined,
  } as ICard;
};
