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
exports.getBoardWithCards = void 0;
const constants_1 = require("../constants/constants");
const models_1 = require("../models");
const utils_1 = require("../utils");
const getBoardWithCards = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const board = yield models_1.Board.findById({ _id: id });
    const cards = yield models_1.Card.find({ board: board });
    if (!board)
        throw (0, utils_1.HttpError)(404, "Board not found");
    const sortedCards = {
        todo: cards
            .filter((card) => card.status === constants_1.CARD_STATUS.TODO)
            .sort((a, b) => a.order - b.order),
        inProgress: cards
            .filter((card) => card.status === constants_1.CARD_STATUS.IN_PROGRESS)
            .sort((a, b) => a.order - b.order),
        done: cards
            .filter((card) => card.status === constants_1.CARD_STATUS.DONE)
            .sort((a, b) => a.order - b.order),
    };
    return { id: board._id, title: board.title, cards: sortedCards };
});
exports.getBoardWithCards = getBoardWithCards;
