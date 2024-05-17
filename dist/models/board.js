"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = void 0;
const mongoose_1 = require("mongoose");
const boardSchema = new mongoose_1.Schema({
    title: {
        type: "string",
        required: [true, "title is required"],
    },
    cards: {
        type: [{ type: mongoose_1.Types.ObjectId, ref: "Card" }],
    },
}, { timestamps: true, versionKey: false });
exports.Board = (0, mongoose_1.model)("Board", boardSchema);
