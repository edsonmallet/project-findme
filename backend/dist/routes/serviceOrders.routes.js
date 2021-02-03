"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceOrdersRoutes = void 0;
const express_1 = require("express");
const CreateServiceOrderService_1 = __importDefault(require("../services/ServicesOrders/CreateServiceOrderService"));
const GetServiceOrderService_1 = __importDefault(require("../services/ServicesOrders/GetServiceOrderService"));
const UpdateServiceOrderService_1 = __importDefault(require("../services/ServicesOrders/UpdateServiceOrderService"));
const DeleteServiceOrderService_1 = __importDefault(require("../services/ServicesOrders/DeleteServiceOrderService"));
const serviceOrdersRoutes = express_1.Router();
exports.serviceOrdersRoutes = serviceOrdersRoutes;
serviceOrdersRoutes.get('/', async (request, response) => {
    try {
        const getAllServiceOrders = new GetServiceOrderService_1.default();
        const serviceOrders = await getAllServiceOrders.execute();
        return response.json(serviceOrders);
    }
    catch (error) {
        return response.status(400).json({ error: error.message });
    }
});
serviceOrdersRoutes.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const getOneServiceOrders = new GetServiceOrderService_1.default();
        const serviceOrder = await getOneServiceOrders.execute(id);
        return response.json(serviceOrder);
    }
    catch (error) {
        return response.status(400).json({ error: error.message });
    }
});
serviceOrdersRoutes.post('/', async (request, response) => {
    try {
        const data = request.body;
        const createServiceOrders = new CreateServiceOrderService_1.default();
        const serviceOrders = await createServiceOrders.execute(data);
        return response.json(serviceOrders);
    }
    catch (error) {
        return response.status(400).json({ error: error.message });
    }
});
serviceOrdersRoutes.put('/:id', async (request, response) => {
    try {
        const data = request.body;
        const id = request.params.id;
        const updateServiceOrders = new UpdateServiceOrderService_1.default();
        const updateService = await updateServiceOrders.execute(data, id);
        return response.json(updateService);
    }
    catch (error) {
        return response.status(400).json({ error: error.message });
    }
});
serviceOrdersRoutes.delete('/:id', async (request, response) => {
    try {
        const id = request.params.id;
        const deleteServiceOrder = new DeleteServiceOrderService_1.default();
        await deleteServiceOrder.execute(id);
        return response.status(200).json();
    }
    catch (error) {
        return response.status(400).json({ error: error.message });
    }
});
