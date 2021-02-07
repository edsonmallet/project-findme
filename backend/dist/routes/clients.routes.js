"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientsRoutes = void 0;
const express_1 = require("express");
const CreateClientService_1 = __importDefault(require("../services/Clients/CreateClientService"));
const GetClientService_1 = __importDefault(require("../services/Clients/GetClientService"));
const UpdateClientService_1 = __importDefault(require("../services/Clients/UpdateClientService"));
const DeleteClientService_1 = __importDefault(require("../services/Clients/DeleteClientService"));
const ensureAuthentication_1 = __importDefault(require("../middlewares/ensureAuthentication"));
const clientsRoutes = express_1.Router();
exports.clientsRoutes = clientsRoutes;
clientsRoutes.use(ensureAuthentication_1.default);
clientsRoutes.get('/', async (request, response) => {
    try {
        const getAllClient = new GetClientService_1.default();
        const Clients = await getAllClient.execute();
        return response.json(Clients);
    }
    catch (error) {
        return response.status(400).json({ error: error.message });
    }
});
clientsRoutes.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const getOneClient = new GetClientService_1.default();
        const Clients = await getOneClient.execute(id);
        return response.json(Clients);
    }
    catch (error) {
        return response.status(400).json({ error: error.message });
    }
});
clientsRoutes.post('/', async (request, response) => {
    try {
        const data = request.body;
        const createClient = new CreateClientService_1.default();
        const Client = await createClient.execute(data);
        return response.json(Client);
    }
    catch (error) {
        return response.status(400).json({ error: error.message });
    }
});
clientsRoutes.put('/:id', async (request, response) => {
    try {
        const data = request.body;
        const id = request.params.id;
        const updateClient = new UpdateClientService_1.default();
        const Client = await updateClient.execute(data, id);
        return response.json(Client);
    }
    catch (error) {
        return response.status(400).json({ error: error.message });
    }
});
clientsRoutes.delete('/:id', async (request, response) => {
    try {
        const id = request.params.id;
        const deleteUser = new DeleteClientService_1.default();
        await deleteUser.execute(id);
        return response.status(200).json();
    }
    catch (error) {
        return response.status(400).json({ error: error.message });
    }
});
