import mongoose, { Schema, Document, Model, model } from 'mongoose';
import {TInventory, TProduct, TProductPurchase, TVariant} from './products.interfece'

const orderSchema = new Schema <TProductPurchase> ({
    email: { type: String, required: true, trim: true },
    productId: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true }
}, {
    timestamps: true
})


// Define the schema for a variant
const VariantSchema = new Schema<TVariant> ({
    type: { type: String, required: true },
    value: { type: String, required: true },
});

// Define the schema for inventory
const InventorySchema = new Schema<TInventory> ({
    quantity: { type: Number, required: true },
    inStock: { type: Boolean, required: true },
});

// Define the schema for a product
const ProductSchema= new Schema<TProduct> ({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    tags: { type: [String], required: true },
    variants: { type: [VariantSchema], required: true },
    inventory: { type: InventorySchema, required: true },
});

export const Product= model <TProduct>('Product',ProductSchema)


// create model
export const Order = model <TProductPurchase> ('Order',orderSchema)