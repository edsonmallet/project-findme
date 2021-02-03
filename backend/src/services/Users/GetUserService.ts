import { getRepository } from 'typeorm'
import { User } from '../../entities/User'

class GetUserService {
  public async execute(id?: string | null): Promise<User[]> {
    const usersRepository = getRepository(User)

    const user = await usersRepository.find(id ? { id } : null)

    return user
  }
}

export default GetUserService