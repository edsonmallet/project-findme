import { compare } from "bcryptjs"
import { getRepository } from "typeorm"
import { User } from "../../entities/User"
import { sign } from 'jsonwebtoken'

interface Request{
  email: string;
  password: string;
}

interface Response {
  user: User;
  token: string;
}

class AuthenticateUserService {
  public async execute({email, password}: Request): Promise<Response>{
    const userRepositoriy = getRepository(User)

    const user = await userRepositoriy.findOne({where: { email }})

    if(!user){
      throw new Error('Incorrect mail/password combination')
    }

    const passwordMatched = compare(password, user.password)

    if(!passwordMatched){
      throw new Error('Incorrect mail/password combination')
    }

    const token = sign({}, process.env.HASH, {
      subject: user.id,
      expiresIn: '1d'
    })

    return {
      user,
      token
    }


  }
  
}

export default AuthenticateUserService