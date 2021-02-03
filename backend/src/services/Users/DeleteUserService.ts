import { getRepository } from 'typeorm'
import { User } from '../../entities/User'

class DeleteUserService {
  public async execute(id: string): Promise<Boolean> {
    const usersRepository = getRepository(User)

    const checkUserExists = await usersRepository.find({ id })

    if(!checkUserExists){
      throw new Error('User not found!')
    }

    await usersRepository.delete(id)

    return true
  }
}

export default DeleteUserService