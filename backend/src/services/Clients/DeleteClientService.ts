import { getRepository } from 'typeorm'
import { Client } from '../../entities/Client'

class DeleteClientService {
  public async execute(id: string): Promise<Boolean> {
    const clientsRepository = getRepository(Client)

    const checkUserExists = await clientsRepository.find({ id })

    if(!checkUserExists){
      throw new Error('User not found!')
    }

    await clientsRepository.delete(id)

    return true
  }
}

export default DeleteClientService