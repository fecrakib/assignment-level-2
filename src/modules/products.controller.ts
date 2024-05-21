import { Request, Response } from 'express';
import { ProductServices } from './products.service';


const createProduct=async (req:Request,res:Response)=>{
    try {
     
        const productData=req.body;
        const result =await ProductServices.createProduct(productData);
        res.json(({
            success:true,
            message:"Product  create successfully ",
            data:result,
        }))

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Could not create product!",
            error: error
          });
        
    }



}

// getall products
const getAllProducts=async (req:Request,res:Response)=>{
 
    try {
     
        const productData=req.body;
        const result =await ProductServices.getAllProducts();
        res.json(({
            success:true,
            message:"Product  are fetched successfully ",
            data:result,
        }))

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Could not found product!",
            error: error
          });
        
    }
}


export const ProductController={
    createProduct,
    getAllProducts,

}