import express, { NextFunction, Request, Response } from 'express'
import { router } from './routes'
import './database'
import cors from 'cors'

const app = express()
app.use(cors())

app.use(express.json())
app.use(router)

export { app }