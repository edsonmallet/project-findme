import { Router } from 'express'
import CreateClientService from '../services/Clients/CreateClientService'
import GetClientService from '../services/Clients/GetClientService'
import UpdateClientService from '../services/Clients/UpdateClientService'
import DeleteClientService from '../services/Clients/DeleteClientService'

const clientsRoutes = Router()

clientsRoutes.get('/', async (request, response)=>{
  try {
    const getAllClient = new GetClientService()
    const Clients = await getAllClient.execute()
    return response.json(Clients)
  } catch (error) {
    return response.status(400).json({ error: error.message})
  }
})

clientsRoutes.get('/:id', async (request, response)=>{
  try {
    const { id } = request.params
    
    const getOneClient = new GetClientService()
    const Clients = await getOneClient.execute(id)

    return response.json(Clients)
  } catch (error) {
    return response.status(400).json({ error: error.message})
  }
})

clientsRoutes.post('/',async (request, response) => {

  try {
    const data = request.body
    const createClient = new CreateClientService()

    const Client = await createClient.execute(data)

    return response.json(Client)
  } catch (error) {
    return response.status(400).json({ error: error.message})
  }

})

clientsRoutes.put('/:id',async (request, response) => {

  try {
    const data = request.body
    const id = request.params.id

    const updateClient = new UpdateClientService()

    const Client = await updateClient.execute(data, id)

    return response.json(Client)
  } catch (error) {
    return response.status(400).json({ error: error.message})
  }

})
clientsRoutes.delete('/:id',async (request, response) => {
  try {
    const id = request.params.id

    const deleteUser = new DeleteClientService()
    
    await deleteUser.execute(id)
    return response.status(200).json()
  } catch (error) {
    return response.status(400).json({ error: error.message})
  }

})

export { clientsRoutes }