"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatOneCard = void 0;
const formatOneCard = (card) => {
    return {
        _id: card._id,
        title: card.title,
        description: card.description,
        status: card.status,
        order: card.order,
        boardId: card.board,
        board: undefined,
    };
};
exports.formatOneCard = formatOneCard;
