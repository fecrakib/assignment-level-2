import { Product } from "./porducts.model";
import { TProduct } from "./products.interfece";


const createProduct=async (payLoad:TProduct)=>{
     const result= await Product.create(payLoad);
     result ;
}
export const ProductServices={
    createProduct
}