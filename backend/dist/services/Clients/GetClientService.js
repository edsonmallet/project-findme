"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Client_1 = require("../../entities/Client");
class GetAllClientService {
    async execute(id) {
        const clientsRepository = typeorm_1.getRepository(Client_1.Client);
        const user = await clientsRepository.find(id ? { id } : null);
        return user;
    }
}
exports.default = GetAllClientService;
