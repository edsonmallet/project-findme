import { Router } from 'express'
import CreateServiceOrderService from '../services/ServicesOrders/CreateServiceOrderService'
import GetServiceOrderService from '../services/ServicesOrders/GetServiceOrderService'
import UpdateServiceOrderService from '../services/ServicesOrders/UpdateServiceOrderService'
import DeleteServiceOrderService from '../services/ServicesOrders/DeleteServiceOrderService'

const serviceOrdersRoutes = Router()

serviceOrdersRoutes.get('/', async (request, response)=>{
  try {
    const getAllServiceOrders = new GetServiceOrderService()
    const serviceOrders = await getAllServiceOrders.execute()
    
    return response.json(serviceOrders)
  } catch (error) {
    return response.status(400).json({ error: error.message})
  }
})
serviceOrdersRoutes.get('/:id', async (request, response)=>{
  try {
    const { id } = request.params

    const getOneServiceOrders = new GetServiceOrderService()
    const serviceOrder = await getOneServiceOrders.execute(id)

    return response.json(serviceOrder)
  } catch (error) {
    return response.status(400).json({ error: error.message})
  }
})

serviceOrdersRoutes.post('/',async (request, response) => {

  try {
    const data = request.body
    const createServiceOrders = new CreateServiceOrderService()

    const serviceOrders = await createServiceOrders.execute(data)

    return response.json(serviceOrders)
  } catch (error) {
    return response.status(400).json({ error: error.message})
  }

})

serviceOrdersRoutes.put('/:id',async (request, response) => {

  try {
    const data = request.body
    const id = request.params.id

    const updateServiceOrders = new UpdateServiceOrderService()
    const updateService = await updateServiceOrders.execute(data, id)

    return response.json(updateService)
  } catch (error) {
    return response.status(400).json({ error: error.message})
  }

})
serviceOrdersRoutes.delete('/:id',async (request, response) => {
  try {
    const id = request.params.id

    const deleteServiceOrder = new DeleteServiceOrderService()
    
    await deleteServiceOrder.execute(id)
    return response.status(200).json()
  } catch (error) {
    return response.status(400).json({ error: error.message})
  }

})

export { serviceOrdersRoutes }