import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { PostgresUsersRepository } from "../../repositories/implementations/PostgresUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const mailttrapMailProvider = new MailtrapMailProvider()
const postgressUsersRepository = new PostgresUsersRepository()

const createUserUseCase = new CreateUserUseCase(postgressUsersRepository, mailttrapMailProvider)

const createUserController = new CreateUserController(createUserUseCase)

export { createUserUseCase, createUserController }