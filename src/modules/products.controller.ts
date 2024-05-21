import { Request, Response } from 'express';
import { ProductServices } from './products.service';
import { ProductValidationSchema } from './productValidation';


const createProduct=async (req:Request,res:Response)=>{
    try {
     
        const productData=req.body;
        // data validation
        const zodParsedData=ProductValidationSchema.parse(productData)
        const result =await ProductServices.createProduct(zodParsedData);
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
        if (result.length >0) {
            res.json({
                success: true,
                message: "Product fetched successfully",
                data: result,
            });
        } else {
            res.status(404).json({
                success: false,
                message: "Product not found",
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Could not found product!",
            error: error
          });
        
    }
}

// retrieve a specific product by id
const singleProductById= async (req:Request,res:Response)=>{
    
    try {
            const productId=req.params.id;
            const result= await ProductServices.singleProductGetById(productId);
            if (result) {
                res.json({
                    success: true,
                    message: "Product fetched successfully",
                    data: result,
                });
            } else {
                res.status(404).json({
                    success: false,
                    message: "Product not found",
                });
            }

    } catch (error) {
        

        res.status(500).json({
            success: false,
            message: "Could not fetch product!",
            error: error
        });
    }

}

export const ProductController={
    createProduct,
    getAllProducts,
    singleProductById,

}