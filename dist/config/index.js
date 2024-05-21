"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({ path: path_1.default.resolve(__dirname, '../../.env') });
console.log('PORT:', process.env.PORT); // Add this line
console.log('DB_URL:', process.env.DATABASE_URL); // Add this line
exports.default = {
    port: process.env.PORT,
    db_url: process.env.DATABASE_URL
};
