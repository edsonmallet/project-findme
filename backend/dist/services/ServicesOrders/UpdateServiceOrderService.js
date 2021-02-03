"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const ServiceOrder_1 = require("../../entities/ServiceOrder");
class UpdateServiceOrderService {
    async execute(data, id) {
        const ServiceOrdersRepository = typeorm_1.getRepository(ServiceOrder_1.ServiceOrder);
        await ServiceOrdersRepository.update(id, data);
        const serviceOrder = await ServiceOrdersRepository.findOneOrFail(id);
        return serviceOrder;
    }
}
exports.default = UpdateServiceOrderService;
