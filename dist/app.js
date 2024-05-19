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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const boards_1 = __importDefault(require("./routes/boards"));
const cards_1 = __importDefault(require("./routes/cards"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
dotenv_1.default.config();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get("/", (req, res, next) => {
    res.send("Hello World");
});
app.use("/boards", boards_1.default);
app.use("/cards", cards_1.default);
app.get("/check-db-connection", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connection.db.admin().ping();
        res.status(200).send("Database connection is successful!");
    }
    catch (error) {
        res.status(500).send("Database connection failed!");
    }
}));
app.use((req, res) => {
    res.status(404).json({ message: "Not Found" });
});
app.use((req, res) => {
    res.status(500).json({ message: "Internal Server Error" });
});
exports.default = app;
