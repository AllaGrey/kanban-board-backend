"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const middlewares_1 = require("../../middlewares");
const boards_1 = require("../../controllers/boards");
const boardsRouter = express_1.default.Router();
boardsRouter.get("/:id", boards_1.getBoardByIdCtrl);
boardsRouter.get("/", boards_1.getAllBoardsCtrl);
boardsRouter.post("/", middlewares_1.boardDataValidation, boards_1.postBoardCtrl);
boardsRouter.patch("/:id", boards_1.updateBoardCtrl);
boardsRouter.delete("/:id", boards_1.deleteBoardCtrl);
exports.default = boardsRouter;
