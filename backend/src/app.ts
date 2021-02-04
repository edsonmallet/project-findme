import express, { NextFunction, Request, Response } from 'express'
import { router } from './routes'
import './database'
import cors from 'cors'

const app = express()

app.use((request: Request, response: Response, next: NextFunction) => {
  response.header("Access-Control-Allow-Origin", "*")
  response.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE')
  app.use(cors())
  
  next()
});

app.use(express.json())
app.use(router)

export { app }