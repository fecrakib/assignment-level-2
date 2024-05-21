import { Request, Response } from 'express';
import { ProductServices } from './products.service';
import { ProductValidationSchema, UpdateProductSchema } from './productValidation';
import { Product } from './porducts.model';


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

//Update Product Information
const updateProductById = async (req: Request, res: Response) => {
    try {
        const productId = req.params.productId;  // Ensure this matches your route parameter
        const updateData = UpdateProductSchema.parse(req.body);
        const result = await ProductServices.updateProductById(productId, updateData);
        if (result) {
            res.json({
                success: true,
                message: "Product updated successfully!",
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
            message: "Could not update product!",
            error: error,
        });
    }
};

// deleted data 
const deleteProductById= async (req:Request,res:Response)=>{
    try {
         const productId=req.params.productId;
         const result= await ProductServices.deleteProductById(productId)
         if (result) {
            res.json({
                success: true,
                message: "Product deleted successfully!",
                data: null,
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
            message: "Could not delete product!",
            error: error,
        });
    }
}

// search option
const searchProducts = async (req: Request, res: Response) => {
    try {
        const searchTerm = req.query.searchTerm as string;
        const result = await ProductServices.searchProducts(searchTerm);
        if (result.length > 0) {
            res.json({
                success: true,
                message: `Products matching search term '${searchTerm}' fetched successfully!`,
                data: result,
            });
        } else {
            res.status(404).json({
                success: false,
                message: `No products found matching search term '${searchTerm}'`,
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Could not search products!",
            error: error,
        });
    }
};



export const ProductController={
    createProduct,
    getAllProducts,
    singleProductById,
    updateProductById,
    deleteProductById,
    searchProducts,

}