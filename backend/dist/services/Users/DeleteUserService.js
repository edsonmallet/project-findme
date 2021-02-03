"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const User_1 = require("../../entities/User");
class DeleteUserService {
    async execute(id) {
        const usersRepository = typeorm_1.getRepository(User_1.User);
        const checkUserExists = await usersRepository.find({ id });
        if (!checkUserExists) {
            throw new Error('User not found!');
        }
        await usersRepository.delete(id);
        return true;
    }
}
exports.default = DeleteUserService;
