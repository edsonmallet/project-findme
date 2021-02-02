import { Router } from "express";

const router = Router()

router.get('/', () => {
    return 'Hello World!'
})

export { router }