import { getRepository } from 'typeorm'
import { hash } from 'bcryptjs' 
import { User } from '../../entities/User'

interface Request {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  public async execute(data: Request): Promise<User> {
    const usersRepository = getRepository(User)

    const checkUserExists = await usersRepository.findOne( { where: { email: data.email }})

    if(checkUserExists){
      throw new Error('Email address already used')
    }

    const hashedPassword = await hash(data.password, 8)
    data.password = hashedPassword

    const user = usersRepository.create(data)

    await usersRepository.save(user)

    return user
  }
}

export default CreateUserService