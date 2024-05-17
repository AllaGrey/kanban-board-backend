"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
const mongoose_1 = require("mongoose");
var CARD_STATUS;
(function (CARD_STATUS) {
    CARD_STATUS["TODO"] = "TODO";
    CARD_STATUS["IN_PROGRESS"] = "IN_PROGRESS";
    CARD_STATUS["DONE"] = "DONE";
})(CARD_STATUS || (CARD_STATUS = {}));
const cardSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
    },
    description: {
        type: String,
        required: [true, "Description is required"],
    },
    boardId: {
        type: String,
        required: [true, "boardId is required"],
    },
    status: {
        type: CARD_STATUS,
        required: [true, "Status is required"],
    },
    order: {
        type: Number,
        required: [true, "Order is required"],
    },
    board: {
        type: mongoose_1.SchemaTypes.ObjectId,
        ref: "Board",
        required: [true, "Board is required"],
    },
}, { timestamp: true, versionKey: true });
exports.Card = (0, mongoose_1.model)("Card", cardSchema);
