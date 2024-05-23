"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatBoard = void 0;
const constants_1 = require("../constants/constants");
const formatBoard = (board, cards = []) => {
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
};
exports.formatBoard = formatBoard;
