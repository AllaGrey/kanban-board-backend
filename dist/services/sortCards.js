"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortCards = void 0;
const constants_1 = require("../constants/constants");
const sortCards = (cards) => {
    return {
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
};
exports.sortCards = sortCards;
