"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const bcryptjs_1 = require("bcryptjs");
const User_1 = require("../../entities/User");
class UpdateUserService {
    async execute(data, id) {
        const usersRepository = typeorm_1.getRepository(User_1.User);
        if (data.email) {
            const checkUserExists = await usersRepository.findOne({ where: { email: data.email } });
            if (checkUserExists) {
                throw new Error('Email address already used');
            }
        }
        if (data.password) {
            const hashedPassword = await bcryptjs_1.hash(data.password, 8);
            data.password = hashedPassword;
        }
        await usersRepository.update(id, data);
        const user = await usersRepository.findOneOrFail(id);
        return user;
    }
}
exports.default = UpdateUserService;
