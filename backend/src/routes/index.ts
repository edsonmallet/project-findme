import { Router } from "express";

import { usersRoutes } from "./users.routes";
import { clientsRoutes } from "./clients.routes";
import { serviceOrdersRoutes } from "./serviceOrders.routes";
import { sessionRoutes } from "./sessions.routes";
const router = Router()

router.use('/users', usersRoutes)
router.use('/clients', clientsRoutes)
router.use('/services_orders', serviceOrdersRoutes)
router.use('/sessions', sessionRoutes)

export { router }