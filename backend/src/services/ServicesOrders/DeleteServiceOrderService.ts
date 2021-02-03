import { getRepository } from 'typeorm'
import { ServiceOrder } from '../../entities/ServiceOrder'

class DeleteServiceOrderService {
  public async execute(id: string): Promise<Boolean> {
    const ServiceOrdersRepository = getRepository(ServiceOrder)

    const checkServiceOrderExists = await ServiceOrdersRepository.find({ id })

    if(!checkServiceOrderExists){
      throw new Error('Service Order not found!')
    }

    await ServiceOrdersRepository.delete(id)

    return true
  }
}

export default DeleteServiceOrderService