import { Router } from "express";

import { usersRoutes } from "./users.routes";
import { clientsRoutes } from "./clients.routes";
import { serviceOrdersRoutes } from "./serviceOrders.routes";
const router = Router()

router.use('/users', usersRoutes)
router.use('/clients', clientsRoutes)
router.use('/services_orders', serviceOrdersRoutes)

export { router }