"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = require("bcryptjs");
const typeorm_1 = require("typeorm");
const User_1 = require("../../entities/User");
const jsonwebtoken_1 = require("jsonwebtoken");
const auth_1 = __importDefault(require("../../config/auth"));
class AuthenticateUserService {
    async execute({ email, password }) {
        const userRepositoriy = typeorm_1.getRepository(User_1.User);
        const user = await userRepositoriy.findOne({ where: { email } });
        if (!user) {
            throw new Error('Incorrect mail/password combination');
        }
        const passwordMatched = bcryptjs_1.compare(password, user.password);
        if (!passwordMatched) {
            throw new Error('Incorrect mail/password combination');
        }
        const { secret, expiresIn } = auth_1.default.jwt;
        const token = jsonwebtoken_1.sign({}, secret, {
            subject: user.id,
            expiresIn: expiresIn
        });
        return {
            user,
            token
        };
    }
}
exports.default = AuthenticateUserService;
