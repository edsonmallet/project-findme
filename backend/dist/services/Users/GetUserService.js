"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const User_1 = require("../../entities/User");
class GetUserService {
    async execute(id) {
        const usersRepository = typeorm_1.getRepository(User_1.User);
        const user = await usersRepository.find(id ? { id } : null);
        return user;
    }
}
exports.default = GetUserService;
