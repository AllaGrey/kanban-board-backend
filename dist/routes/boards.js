"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const postBoardController_1 = require("../controllers/boards/postBoardController");
const boardsRouter = express_1.default.Router();
boardsRouter.get("/", (req, res) => {
    res.send("Board");
});
boardsRouter.get("/:id", (req, res) => { });
boardsRouter.post("/", postBoardController_1.postBoardCtrl);
boardsRouter.put("/:id", (req, res) => { });
boardsRouter.delete("/:id", (req, res) => { });
exports.default = boardsRouter;
