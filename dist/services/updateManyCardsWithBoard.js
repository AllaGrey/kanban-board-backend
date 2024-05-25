"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateManyCardsWithBoard = void 0;
const models_1 = require("../models");
const getBoardWithCards_1 = require("./getBoardWithCards");
const updateManyCardsWithBoard = (data) => __awaiter(void 0, void 0, void 0, function* () {
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
    yield models_1.Card.bulkWrite(updateOperations);
    // const board = (await Board.findById(data[0].boardId).lean()) as IBoard;
    // if (!board) throw HttpError(404, "Board not found");
    // const updatedCards = (await Card.find({ board: board?._id })) as ICard[];
    // if (!updatedCards) throw HttpError(404, "Cards not found");
    // const result = formatBoard(board, updatedCards);
    const result = yield (0, getBoardWithCards_1.getBoardWithCards)(data[0].boardId);
    return result;
});
exports.updateManyCardsWithBoard = updateManyCardsWithBoard;
