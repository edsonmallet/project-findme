"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Client_1 = require("../../entities/Client");
class UpdateClientService {
    async execute(data, id) {
        const clientsRepository = typeorm_1.getRepository(Client_1.Client);
        await clientsRepository.update(id, data);
        const user = await clientsRepository.findOneOrFail(id);
        return user;
    }
}
exports.default = UpdateClientService;
