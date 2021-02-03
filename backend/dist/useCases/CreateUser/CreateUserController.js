"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserController = void 0;
class CreateUserController {
    constructor(CreateUserUseCase) {
        this.CreateUserUseCase = CreateUserUseCase;
    }
    async handle(request, response) {
        const { name, email, password } = request.body;
        try {
            await this.CreateUserUseCase.execute({ name, email, password });
            return response.status(201).send();
        }
        catch (error) {
            return response.status(400).json({
                message: error.message || "Unexpected Error"
            });
        }
    }
}
exports.CreateUserController = CreateUserController;
