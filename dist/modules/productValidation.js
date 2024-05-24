"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProductSchema = exports.ProductValidationSchema = void 0;
// src/modules/products.validation.ts
const zod_1 = require("zod");
// Define the Zod schema for a variant
const VariantValidationSchema = zod_1.z.object({
    type: zod_1.z.string(),
    value: zod_1.z.string(),
});
// Define the Zod schema for inventory
const InventoryValidationSchema = zod_1.z.object({
    quantity: zod_1.z.number(),
    inStock: zod_1.z.boolean(),
});
// Define the Zod schema for a product
const ProductValidationSchema = zod_1.z.object({
    name: zod_1.z.string(),
    description: zod_1.z.string(),
    price: zod_1.z.number(),
    category: zod_1.z.string(),
    tags: zod_1.z.array(zod_1.z.string()),
    variants: zod_1.z.array(VariantValidationSchema),
    inventory: InventoryValidationSchema,
});
exports.ProductValidationSchema = ProductValidationSchema;
// Create a zod schema for TProductPurchase
// Define the Zod schema for updating a product
const UpdateProductSchema = ProductValidationSchema.partial();
exports.UpdateProductSchema = UpdateProductSchema;
