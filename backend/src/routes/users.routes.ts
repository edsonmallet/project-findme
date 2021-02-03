import { Router } from 'express'
import CreateUserService from '../services/Users/CreateUserService'
import GetAllUserService from '../services/Users/GetAllUserService'
import UpdateUserService from '../services/Users/UpdateUserService'
import DeleteUserService from '../services/Users/DeleteUserService'

const usersRoutes = Router()

usersRoutes.get('/', async (request, response)=>{
  try {
    const getAllUser = new GetAllUserService()
    const users = await getAllUser.execute()
    return response.json(users)
  } catch (error) {
    return response.status(400).json({ error: error.message})
  }
})

usersRoutes.post('/',async (request, response) => {

  try {
    const data = request.body
    const createUser = new CreateUserService()

    const user = await createUser.execute(data)
    delete user.password

    return response.json(user)
  } catch (error) {
    return response.status(400).json({ error: error.message})
  }

})

usersRoutes.put('/:id',async (request, response) => {

  try {
    const data = request.body
    const id = request.params.id

    const createUser = new UpdateUserService()

    const user = await createUser.execute(data, id)
    delete user.password

    return response.json(user)
  } catch (error) {
    return response.status(400).json({ error: error.message})
  }

})
usersRoutes.delete('/:id',async (request, response) => {
  try {
    const id = request.params.id

    const deleteUser = new DeleteUserService()
    
    await deleteUser.execute(id)
    return response.status(200).json()
  } catch (error) {
    return response.status(400).json({ error: error.message})
  }

})

export { usersRoutes }