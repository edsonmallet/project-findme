import { getRepository } from 'typeorm'
import { ServiceOrder } from '../../entities/ServiceOrder'

interface Request {
  problem: string;
  client_id: string;
  user_id: string;
  latlng: string;
}

class CreateServiceOrderService {
  public async execute(data: Request): Promise<ServiceOrder> {
    const ServiceOrdersRepository = getRepository(ServiceOrder)

    const serviceOrder = ServiceOrdersRepository.create(data)

    await ServiceOrdersRepository.save(serviceOrder)

    return serviceOrder
  }
}

export default CreateServiceOrderService