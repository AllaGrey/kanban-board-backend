import { IBoard, ICard } from "../constants/constants";
import { Board, Card } from "../models";
import { HttpError } from "../utils";
import { formatBoard } from "./formatBoard";
import { getBoardWithCards } from "./getBoardWithCards";

export const updateManyCardsWithBoard = async (data: ICard[]) => {
  const updateOperations = data.map((card) => ({
    updateOne: {
      filter: { _id: card._id },
      update: {
        $set: {
          // title: card.title,
          // description: card.description,
          status: card.status,
          order: card.order,
          // boardId: card.boardId,
        },
      },
    },
  }));

  await Card.bulkWrite(updateOperations);

  // const board = (await Board.findById(data[0].boardId).lean()) as IBoard;
  // if (!board) throw HttpError(404, "Board not found");

  // const updatedCards = (await Card.find({ board: board?._id })) as ICard[];
  // if (!updatedCards) throw HttpError(404, "Cards not found");

  // const result = formatBoard(board, updatedCards);
  const result = await getBoardWithCards(data[0].boardId);

  return result;
};
