"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const boards_1 = __importDefault(require("./routes/api/boards"));
const cards_1 = __importDefault(require("./routes/api/cards"));
const app = (0, express_1.default)();
dotenv_1.default.config();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get("/", (req, res, next) => {
    res.send("Hello World");
});
app.use("/api/boards", boards_1.default);
app.use("/api/cards", cards_1.default);
app.use((req, res) => {
    res.status(404).json({ message: "Not Found" });
});
app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ error: { message, status } });
});
exports.default = app;
