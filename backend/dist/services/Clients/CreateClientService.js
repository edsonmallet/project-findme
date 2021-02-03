"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Client_1 = require("../../entities/Client");
class CreateClientService {
    async execute(data) {
        const clientsRepository = typeorm_1.getRepository(Client_1.Client);
        const user = clientsRepository.create(data);
        await clientsRepository.save(user);
        return user;
    }
}
exports.default = CreateClientService;
