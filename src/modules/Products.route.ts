import {  } from './products.service';
import { Product } from './porducts.model';
import express from 'express'
import { ProductController, createOrderHandler } from './products.controller'

const router=express.Router()

router.post('/',ProductController.createProduct);
 router.get('/',ProductController.getAllProducts)
 router.get('/:ProductId', ProductController.singleProductById)
 router.delete('/:productId', ProductController.deleteProductById);
 router.get('/search', ProductController.searchProducts);
const orderRouter= express.Router()
 orderRouter.post ('/',createOrderHandler)
 
export const ProductRoutes={
    
    router,
    orderRouter,
}