import { ICard } from "../constants/constants";
import { Card } from "../models";

import { getBoardWithCards } from "./getBoardWithCards";

export const updateManyCardsWithBoard = async (data: ICard[]) => {
  const updateOperations = data.map((card) => ({
    updateOne: {
      filter: { _id: card.id },
      update: {
        $set: {
          status: card.status,
          order: card.order,
        },
      },
    },
  }));

  await Card.bulkWrite(updateOperations);

  const result = await getBoardWithCards(data[0].boardId);

  return result;
};
