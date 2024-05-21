import { Product } from './porducts.model';
import express from 'express'
import { ProductController } from './products.controller'

const router=express.Router()

router.post('/',ProductController.createProduct);
 router.get('/',ProductController.getAllProducts)
 router.get('/:id', ProductController.singleProductById)
 router.delete('/:productId', ProductController.deleteProductById);
 router.get('/search', ProductController.searchProducts);
export const ProductRoutes=router;