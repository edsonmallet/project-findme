import { getRepository } from 'typeorm'
import { ServiceOrder } from '../../entities/ServiceOrder'

class GetAllServiceOrderService {
  public async execute(id?: string): Promise<ServiceOrder[]> {
    const ServiceOrdersRepository = getRepository(ServiceOrder)

    const serviceOrder = await ServiceOrdersRepository.find(id ? { id } : null)

    return serviceOrder
  }
}

export default GetAllServiceOrderService