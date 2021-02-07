"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const ServiceOrder_1 = require("../../entities/ServiceOrder");
class GetAllServiceOrderService {
    async execute(id) {
        const ServiceOrdersRepository = typeorm_1.getRepository(ServiceOrder_1.ServiceOrder);
        const serviceOrder = await ServiceOrdersRepository.find({
            where: id ? { id } : {},
            relations: ['client', 'user'],
        });
        return serviceOrder;
    }
}
exports.default = GetAllServiceOrderService;
