"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatBoard = void 0;
const formatCards_1 = require("./formatCards");
const sortCards_1 = require("./sortCards");
const formatBoard = (boardData, cards = []) => {
    const formattedCards = (0, formatCards_1.formatCards)(cards);
    const sortedCards = (0, sortCards_1.sortCards)(formattedCards);
    return {
        id: boardData._id,
        title: boardData.title,
        cards: sortedCards,
    };
};
exports.formatBoard = formatBoard;
