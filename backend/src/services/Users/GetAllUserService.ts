import { getRepository } from 'typeorm'
import { User } from '../../entities/User'

class GetAllUserService {
  public async execute(): Promise<User[]> {
    const usersRepository = getRepository(User)

    const user = await usersRepository.find()

    return user
  }
}

export default GetAllUserService