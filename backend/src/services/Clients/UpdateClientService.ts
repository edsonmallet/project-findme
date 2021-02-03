import { getRepository } from 'typeorm'
import { Client } from '../../entities/Client'

interface Request {
  name: string;
}

class UpdateClientService {
  public async execute(data: Request, id: any): Promise<Client> {
    const clientsRepository = getRepository(Client)
    await clientsRepository.update(id, data)
    const user = await clientsRepository.findOneOrFail(id)
    return user
  }
}

export default UpdateClientService