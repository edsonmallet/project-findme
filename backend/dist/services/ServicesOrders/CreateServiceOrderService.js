"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const ServiceOrder_1 = require("../../entities/ServiceOrder");
class CreateServiceOrderService {
    async execute(data) {
        const ServiceOrdersRepository = typeorm_1.getRepository(ServiceOrder_1.ServiceOrder);
        const serviceOrder = ServiceOrdersRepository.create(data);
        await ServiceOrdersRepository.save(serviceOrder);
        return serviceOrder;
    }
}
exports.default = CreateServiceOrderService;
