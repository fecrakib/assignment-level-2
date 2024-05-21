

// Define a type for a variant
export type TVariant = {
    type: string;
    value: string;
};

// Define a type for inventory details
export type TInventory = {
    quantity: number;
    inStock: boolean;
};

// Define a type for the main product
export type TProduct = {
    name: string;
    description: string;
    price: number;
    category: string;
    tags: string[];
    variants: TVariant[];
    inventory: TInventory;
};
