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
exports.getBoardByIdCtrl = exports.getBoardById = void 0;
const services_1 = require("../../services");
const utils_1 = require("../../utils");
const getBoardById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const board = yield (0, services_1.getBoardWithCards)(id);
    res.status(200).json(board);
});
exports.getBoardById = getBoardById;
exports.getBoardByIdCtrl = (0, utils_1.ctrlWrapper)(exports.getBoardById);
