"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cardsRouter = express_1.default.Router();
cardsRouter.get("/", (req, res) => {
    res.send("Card");
});
cardsRouter.get("/:id", (req, res) => { });
cardsRouter.post("/", (req, res) => { });
cardsRouter.put("/:id", (req, res) => { });
cardsRouter.delete("/:id", (req, res) => { });
exports.default = cardsRouter;
