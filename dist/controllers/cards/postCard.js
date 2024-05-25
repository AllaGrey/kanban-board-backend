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
exports.postCardCtrl = void 0;
const models_1 = require("../../models");
const utils_1 = require("../../utils");
const postCard = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description, boardId, status, order } = req.body;
    const card = yield models_1.Card.create({
        title,
        description,
        status,
        order,
        board: { _id: boardId },
    });
    const formattedCard = {
        id: card._id,
        title: card.title,
        description: card.description,
        status: card.status,
        order: card.order,
        boardId: card.board._id,
        board: undefined,
    };
    res.status(201).json(formattedCard);
});
exports.postCardCtrl = (0, utils_1.ctrlWrapper)(postCard);
