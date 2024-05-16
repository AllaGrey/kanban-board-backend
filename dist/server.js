"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const { PORT, MONGO_URL } = process.env;
app_1.default.listen(PORT || 3000, () => {
    console.log(`Server is running on port ${PORT}`);
    if (MONGO_URL) {
        mongoose_1.default
            .connect(MONGO_URL, {})
            .then(() => console.log("Connected to MongoDB"))
            .catch((error) => {
            console.log(error.message);
            process.exit(1);
        });
    }
});
