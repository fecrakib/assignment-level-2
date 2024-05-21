import { string } from "zod";
import { Product } from "./porducts.model";
import { TProduct } from "./products.interfece";


const createProduct=async (payLoad:TProduct)=>{
     const result= await Product.create(payLoad);
     return result.save() ;
}
const getAllProducts = async()=>{
    const result=await Product.find();
    return result;
}

const singleProductGetById= async (id:string)=>{
    const result =await Product.findById(id);
    return result;
} 

// for update
const updateProductById = async (id: string, updateData: Partial<TProduct>) => {
    const product = await Product.findById(id);
    if (!product) {
        return null;
    }
    Object.assign(product, updateData);
    return await product.save();
};

const deleteProductById= async (id:string)=>{
    const product=await Product.findByIdAndDelete(id);
    return product;
}

// search option
const searchProducts = async (searchTerm: string) => {
    const regex = new RegExp(searchTerm, 'i');
    const result = await Product.find({
        $or: [
            { name: { $regex: regex } },
            { description: { $regex: regex } },
            { category: { $regex: regex } },
            { tags: { $in: [searchTerm] } }
        ]
    });
    return result;
};
export const ProductServices={
    createProduct,
    getAllProducts,
    singleProductGetById,
    updateProductById,
    deleteProductById,
    searchProducts,
}

