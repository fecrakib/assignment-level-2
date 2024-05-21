
// src/modules/products.validation.ts
import { z } from 'zod';

// Define the Zod schema for a variant
const VariantValidationSchema = z.object({
    type: z.string(),
    value: z.string(),
});

// Define the Zod schema for inventory
const InventoryValidationSchema = z.object({
    quantity: z.number(),
    inStock: z.boolean(),
});

// Define the Zod schema for a product
const ProductValidationSchema = z.object({
    name: z.string(),
    description: z.string(),
    price: z.number(),
    category: z.string(),
    tags: z.array(z.string()),
    variants: z.array(VariantValidationSchema),
    inventory: InventoryValidationSchema,
});

// Export the schemas for use
export { ProductValidationSchema  };
