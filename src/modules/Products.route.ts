import {  } from './products.service';
import { Product } from './porducts.model';
import express from 'express'
import { ProductController, createOrderHandler, getAllOrders } from './products.controller'

const router=express.Router()

router.post('/',ProductController.createProduct);
 router.get('/',ProductController.getAllProducts)

 router.get('/:productId', ProductController.singleProductById)

 router.delete('/:productId', ProductController.deleteProductById);
 router.get('/', ProductController.searchProducts);

const orderRouter= express.Router()
 orderRouter.post ('/',createOrderHandler)
 orderRouter.get('/',getAllOrders) 
 
export const ProductRoutes={
    
    router,
    orderRouter,
}