import { getRepository } from 'typeorm'
import { Client } from '../../entities/Client'

class GetAllClientService {
  public async execute(id ?: string): Promise<Client[]> {
    const clientsRepository = getRepository(Client)

    const user = await clientsRepository.find(id ? { id } : null)

    return user
  }
}

export default GetAllClientService