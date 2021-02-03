"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const ServiceOrder_1 = require("../../entities/ServiceOrder");
class DeleteServiceOrderService {
    async execute(id) {
        const ServiceOrdersRepository = typeorm_1.getRepository(ServiceOrder_1.ServiceOrder);
        const checkServiceOrderExists = await ServiceOrdersRepository.find({ id });
        if (!checkServiceOrderExists) {
            throw new Error('Service Order not found!');
        }
        await ServiceOrdersRepository.delete(id);
        return true;
    }
}
exports.default = DeleteServiceOrderService;
