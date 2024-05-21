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
exports.deleteCardCtrl = void 0;
const utils_1 = require("../../utils");
const models_1 = require("../../models");
const deleteCard = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const card = yield models_1.Card.findByIdAndDelete({ _id: id });
    if (!card)
        throw (0, utils_1.HttpError)(404, "Card not found");
    res.status(200).json({ message: "Card was successful deleted" });
});
exports.deleteCardCtrl = (0, utils_1.ctrlWrapper)(deleteCard);
