

import express, { Request, Response } from 'express'
import { ProductRoutes } from './modules/Products.route'

const app = express()
app.use(express.json())

app.use('/api/products',ProductRoutes.router)

app.use('/api/orders',ProductRoutes.orderRouter)

app.get('/', (req:Request, res:Response) => {
  res.send('Hello World dfd!')
})



export default app