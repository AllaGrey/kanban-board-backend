"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCardDataValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const constants_1 = require("../constants/constants");
const addCardDataValidation = (card) => {
    return joi_1.default.object()
        .options({ abortEarly: false })
        .keys({
        title: joi_1.default.string().required().messages({
            "any.required": "title is required",
            "string.empty": "title is required",
        }),
        description: joi_1.default.string().required().messages({
            "any.required": "description is required",
            "string.empty": "description is required",
        }),
        status: joi_1.default.string()
            .required()
            .valid(...Object.values(constants_1.CARD_STATUS))
            .messages({
            "any.required": "status is required",
            "string.empty": "status is required",
            "any.only": "status must be one of the following values: todo, inProgress, done",
        }),
        order: joi_1.default.number().positive().integer().min(1).required().messages({
            "any.required": "order is required",
            "string.empty": "order is required",
            "number.integer": "order must be a number",
            "number.positive": "order must be a positive number",
            "number.min": "order must be bigger or equal 1",
        }),
        boardId: joi_1.default.string().required().messages({
            "any.required": "boardId is required",
            "string.empty": "boardId is required",
        }),
        id: joi_1.default.string().messages({
            "string.base": "id must be a string",
        }),
    })
        .validate(card);
};
exports.addCardDataValidation = addCardDataValidation;
