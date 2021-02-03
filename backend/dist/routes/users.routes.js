"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRoutes = void 0;
const express_1 = require("express");
const CreateUser_1 = require("../useCases/CreateUser");
const usersRoutes = express_1.Router();
exports.usersRoutes = usersRoutes;
usersRoutes.post('/', (request, response) => {
    return CreateUser_1.createUserController.handle(request, response);
});
usersRoutes.get('/:id', (request, response) => {
    return CreateUser_1.createUserController.handle(request, response);
});
