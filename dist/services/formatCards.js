"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatCards = void 0;
const formatCards = (cards) => {
    return cards.map((card) => ({
        _id: card._id,
        title: card.title,
        description: card.description,
        status: card.status,
        order: card.order,
        boardId: card.board,
        board: undefined,
    }));
};
exports.formatCards = formatCards;
