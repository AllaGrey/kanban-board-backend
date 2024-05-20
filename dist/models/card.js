"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
const mongoose_1 = require("mongoose");
const constants_1 = require("../constants/constants");
const cardSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
    },
    description: {
        type: String,
        required: [true, "Description is required"],
    },
    status: {
        type: String,
        enum: Object.values(constants_1.CARD_STATUS),
        default: constants_1.CARD_STATUS.TODO,
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
}, { timestamp: true, versionKey: false });
exports.Card = (0, mongoose_1.model)("Card", cardSchema);
