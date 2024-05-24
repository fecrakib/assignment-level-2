"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = exports.Product = void 0;
const mongoose_1 = require("mongoose");
const orderSchema = new mongoose_1.Schema({
    email: { type: String, required: true, trim: true },
    productId: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true }
}, {
    timestamps: true
});
// Define the schema for a variant
const VariantSchema = new mongoose_1.Schema({
    type: { type: String, required: true },
    value: { type: String, required: true },
});
// Define the schema for inventory
const InventorySchema = new mongoose_1.Schema({
    quantity: { type: Number, required: true },
    inStock: { type: Boolean, required: true },
});
// Define the schema for a product
const ProductSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    tags: { type: [String], required: true },
    variants: { type: [VariantSchema], required: true },
    inventory: { type: InventorySchema, required: true },
});
exports.Product = (0, mongoose_1.model)('Product', ProductSchema);
// create model
exports.Order = (0, mongoose_1.model)('Order', orderSchema);
