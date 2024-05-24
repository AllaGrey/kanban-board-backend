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
exports.cardDataValidation = void 0;
const services_1 = require("../../services");
const utils_1 = require("../../utils");
const cardDataValidation = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    if (Array.isArray(data)) {
        for (const card of data) {
            const { error, value } = (0, services_1.addCardDataValidation)(card);
            if (error) {
                return next((0, utils_1.HttpError)(400, error.message));
            }
            yield (0, services_1.checkBoard)(value.boardId);
        }
    }
    else {
        const { error, value } = (0, services_1.addCardDataValidation)(data);
        if (error) {
            return next((0, utils_1.HttpError)(400, error.message));
        }
        yield (0, services_1.checkBoard)(value.boardId);
        req.body = value;
    }
    next();
});
exports.cardDataValidation = cardDataValidation;
