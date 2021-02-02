import { Router } from "express";

const router = Router()

router.get('/', () => {
    return { start: 'Hello World!' }
})

export { router }