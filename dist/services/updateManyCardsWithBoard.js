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
const utils_1 = require("../utils");
const formatBoard_1 = require("./formatBoard");
const updateManyCardsWithBoard = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const updateOperations = data.map((card) => ({
        updateOne: {
            filter: { _id: card._id },
            update: {
                $set: {
                    title: card.title,
                    description: card.description,
                    status: card.status,
                    order: card.order,
                    boardId: card.boardId,
                },
            },
        },
    }));
    yield models_1.Card.bulkWrite(updateOperations);
    const board = (yield models_1.Board.findById(data[0].boardId).lean());
    if (!board)
        throw (0, utils_1.HttpError)(404, "Board not found");
    const updatedCards = (yield models_1.Card.find({ board: board === null || board === void 0 ? void 0 : board._id }));
    if (!updatedCards)
        throw (0, utils_1.HttpError)(404, "Cards not found");
    const result = (0, formatBoard_1.formatBoard)(board, updatedCards);
    return result;
});
exports.updateManyCardsWithBoard = updateManyCardsWithBoard;
