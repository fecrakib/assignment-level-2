import { Product } from './porducts.model';
import express from 'express'
import { ProductController } from './products.controller'

const router=express.Router()

router.post('/',ProductController.createProduct);
 router.get('/',ProductController.getAllProducts)
 router.get('/:id', ProductController.singleProductById)
 router.put('/:productId', ProductController.updateProductById); 
export const ProductRoutes=router;