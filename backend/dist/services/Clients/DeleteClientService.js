"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Client_1 = require("../../entities/Client");
class DeleteClientService {
    async execute(id) {
        const clientsRepository = typeorm_1.getRepository(Client_1.Client);
        const checkUserExists = await clientsRepository.find({ id });
        if (!checkUserExists) {
            throw new Error('User not found!');
        }
        await clientsRepository.delete(id);
        return true;
    }
}
exports.default = DeleteClientService;
