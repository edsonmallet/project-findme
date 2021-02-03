"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRoutes = void 0;
const express_1 = require("express");
const CreateUserService_1 = __importDefault(require("../services/Users/CreateUserService"));
const GetUserService_1 = __importDefault(require("../services/Users/GetUserService"));
const UpdateUserService_1 = __importDefault(require("../services/Users/UpdateUserService"));
const DeleteUserService_1 = __importDefault(require("../services/Users/DeleteUserService"));
const usersRoutes = express_1.Router();
exports.usersRoutes = usersRoutes;
usersRoutes.get('/', async (request, response) => {
    try {
        const getAllUser = new GetUserService_1.default();
        const users = await getAllUser.execute();
        return response.json(users);
    }
    catch (error) {
        return response.status(400).json({ error: error.message });
    }
});
usersRoutes.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const getOneUser = new GetUserService_1.default();
        const user = await getOneUser.execute(id);
        return response.json(user);
    }
    catch (error) {
        return response.status(400).json({ error: error.message });
    }
});
usersRoutes.post('/', async (request, response) => {
    try {
        const data = request.body;
        const createUser = new CreateUserService_1.default();
        const user = await createUser.execute(data);
        delete user.password;
        return response.json(user);
    }
    catch (error) {
        return response.status(400).json({ error: error.message });
    }
});
usersRoutes.put('/:id', async (request, response) => {
    try {
        const data = request.body;
        const { id } = request.params;
        const updateUser = new UpdateUserService_1.default();
        const user = await updateUser.execute(data, id);
        delete user.password;
        return response.json(user);
    }
    catch (error) {
        return response.status(400).json({ error: error.message });
    }
});
usersRoutes.delete('/:id', async (request, response) => {
    try {
        const id = request.params.id;
        const deleteUser = new DeleteUserService_1.default();
        await deleteUser.execute(id);
        return response.status(200).json();
    }
    catch (error) {
        return response.status(400).json({ error: error.message });
    }
});
