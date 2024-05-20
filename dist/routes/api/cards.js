"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const middlewares_1 = require("../../middlewares");
const cards_1 = require("../../controllers/cards");
const cardsRouter = express_1.default.Router();
cardsRouter.get("/", cards_1.getBoardCardsCtrl);
cardsRouter.get("/:id", (req, res) => { });
cardsRouter.post("/", middlewares_1.cardDataValidation, cards_1.postCardCtrl);
cardsRouter.put("/:id", middlewares_1.cardDataValidation, cards_1.updateCardCtrl);
cardsRouter.delete("/:id", cards_1.deleteCardCtrl);
exports.default = cardsRouter;
