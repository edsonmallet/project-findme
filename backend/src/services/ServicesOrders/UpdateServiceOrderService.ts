import { getRepository } from 'typeorm'
import { ServiceOrder } from '../../entities/ServiceOrder'

interface Request {
  problem: string;
  client_id: string;
  latlng: string;
}

class UpdateServiceOrderService {
  public async execute(data: Request, id: any): Promise<ServiceOrder> {
    const ServiceOrdersRepository = getRepository(ServiceOrder)

    await ServiceOrdersRepository.update(id, data)
    const serviceOrder = await ServiceOrdersRepository.findOneOrFail(id)
    return serviceOrder
  }
}

export default UpdateServiceOrderService