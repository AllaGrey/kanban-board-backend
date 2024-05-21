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
exports.deleteBoardWithCards = void 0;
const models_1 = require("../models");
const utils_1 = require("../utils");
const deleteBoardWithCards = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const board = yield models_1.Board.findById({ _id: id });
    if (!board)
        throw (0, utils_1.HttpError)(404, "Board not found");
    console.log(board);
    const cards = yield models_1.Card.deleteMany({ board: id });
    console.log(cards);
    return;
});
exports.deleteBoardWithCards = deleteBoardWithCards;
