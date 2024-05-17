"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postBoardCtrl = void 0;
const board_1 = require("../../models/board");
const HttpError_1 = require("../../utils/HttpError");
const ctrlWrapper_1 = require("../../utils/ctrlWrapper");
const postBoard = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // if (!req.body) throw HttpError(400, "No data provided in the request body");
    const { title } = req.body;
    if (!title)
        (0, HttpError_1.HttpError)(400, "No title provided in the request body");
    const board = yield board_1.Board.create({ title });
    if (!board)
        (0, HttpError_1.HttpError)(400, "Invalid board");
    res.status(201).json({ message: board });
});
exports.postBoardCtrl = (0, ctrlWrapper_1.ctrlWrapper)(postBoard);
