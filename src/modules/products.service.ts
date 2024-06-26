
import { Order,  Product} from "./porducts.model";
import { TProduct, TProductPurchase } from "./products.interfece";



const createProduct=async (payLoad:TProduct)=>{
     const result= await Product.create(payLoad);
     return result.save() ;
}
const getAllProducts = async()=>{
    const result=await Product.find();
    return result;
}

export const singleProductGetById= async (id:string)=>{
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

// create a new order
export const creteOrder = async (orderData: TProductPurchase)=>{
    const orderProduct =new Order (orderData);
    return await orderProduct .save()
}

// get all orders
export const getAllOrder = async () =>{
    return await Order.find()
}

// update inventory 
export const updateInventory = async (productId: string, orderedQuantity: number) => {
    
        const product = await Product.findById(productId);
        if (!product) {
            throw new Error('Product not found');
        }

       
        if (orderedQuantity > product.inventory.quantity) {
            throw new Error('Insufficient stock');
        }

        product.inventory.quantity -= orderedQuantity;
        
        
        product.inventory.inStock = product.inventory.quantity > 0;

        // Save the updated product
        await product.save();
   
};
export const ProductServices={
    createProduct,
    getAllProducts,
    singleProductGetById,
    updateProductById,
    deleteProductById,
    searchProducts,
  
}

