"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addBoardDataValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const addBoardDataValidation = (board) => {
    return joi_1.default.object()
        .options({ abortEarly: false })
        .keys({
        title: joi_1.default.string().required().messages({
            "any.required": "title is required",
            "string.empty": "title is required",
        }),
    })
        .validate(board);
};
exports.addBoardDataValidation = addBoardDataValidation;
