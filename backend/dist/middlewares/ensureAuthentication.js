"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = require("jsonwebtoken");
const auth_1 = __importDefault(require("../config/auth"));
function ensureAuthentication(request, response, next) {
    const authHeader = request.headers.authorization;
    if (!authHeader) {
        throw new Error('JWT token is missing');
    }
    const [, token] = authHeader.split(' ');
    try {
        const decoded = jsonwebtoken_1.verify(token, auth_1.default.jwt.secret);
        const { sub } = decoded;
        return next();
    }
    catch (_a) {
        throw new Error('JWT invalid');
    }
}
exports.default = ensureAuthentication;
