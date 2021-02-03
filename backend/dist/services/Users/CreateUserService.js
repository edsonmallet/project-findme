"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const bcryptjs_1 = require("bcryptjs");
const User_1 = require("../../entities/User");
class CreateUserService {
    async execute(data) {
        const usersRepository = typeorm_1.getRepository(User_1.User);
        const checkUserExists = await usersRepository.findOne({ where: { email: data.email } });
        if (checkUserExists) {
            throw new Error('Email address already used');
        }
        const hashedPassword = await bcryptjs_1.hash(data.password, 8);
        data.password = hashedPassword;
        const user = usersRepository.create(data);
        await usersRepository.save(user);
        return user;
    }
}
exports.default = CreateUserService;
