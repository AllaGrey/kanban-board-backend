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
exports.checkBoard = void 0;
const board_1 = require("../models/board");
const HttpError_1 = require("../utils/HttpError");
const checkBoard = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const board = yield board_1.Board.findById({ _id: id });
    if (!board)
        throw (0, HttpError_1.HttpError)(400, "Board not found");
    return board;
});
exports.checkBoard = checkBoard;
