import { getRepository } from 'typeorm'
import { Client } from '../../entities/Client'

interface Request {
  name: string;
}

class CreateClientService {
  public async execute(data: Request): Promise<Client> {
    const clientsRepository = getRepository(Client)

    const user = clientsRepository.create(data)

    await clientsRepository.save(user)

    return user
  }
}

export default CreateClientService