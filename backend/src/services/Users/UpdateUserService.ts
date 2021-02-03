import { getRepository } from 'typeorm'
import { hash } from 'bcryptjs' 
import { User } from '../../entities/User'

interface Request {
  name?: string;
  email?: string;
  password?: string;
}

class UpdateUserService {
  public async execute(data: Request, id: any): Promise<User> {
    const usersRepository = getRepository(User)

    if(data.email){
      const checkUserExists = await usersRepository.findOne( { where: { email: data.email }})
      if(checkUserExists){
        throw new Error('Email address already used')
      }
    }

    if(data.password){
      const hashedPassword = await hash(data.password, 8)
      data.password = hashedPassword
    }

    await usersRepository.update(id, data)
    const user = await usersRepository.findOneOrFail(id)
    return user
  }
}

export default UpdateUserService