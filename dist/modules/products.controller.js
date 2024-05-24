"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = exports.getAllOrders = exports.createOrderHandler = void 0;
const products_service_1 = require("./products.service");
const productValidation_1 = require("./productValidation");
const ordervalidation_1 = require("./ordervalidation");
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productData = req.body;
        // data validation
        const zodParsedData = productValidation_1.ProductValidationSchema.parse(productData);
        const result = yield products_service_1.ProductServices.createProduct(zodParsedData);
        res.json(({
            success: true,
            message: "Product  create successfully ",
            data: result,
        }));
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Could not create product!",
            error: error
        });
    }
});
// getall products
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield products_service_1.ProductServices.getAllProducts();
        if (result.length > 0) {
            res.json({
                success: true,
                message: "Product fetched successfully",
                data: result,
            });
        }
        else {
            res.status(404).json({
                success: false,
                message: "Product not found",
            });
        }
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Could not found product!",
            error: error
        });
    }
});
// retrieve a specific product by id
const singleProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.productId;
        const result = yield (0, products_service_1.singleProductGetById)(productId);
        if (result) {
            res.json({
                success: true,
                message: 'Product fetched successfully',
                data: result,
            });
        }
        else {
            res.status(404).json({
                success: false,
                message: 'Product not found',
            });
        }
    }
    catch (error) {
        console.error('Error fetching product:', error);
        res.status(500).json({
            success: false,
            message: 'Could not fetch product!',
        });
    }
});
//Update Product Information
const updateProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.productId; // Ensure this matches your route parameter
        const updateData = productValidation_1.UpdateProductSchema.parse(req.body);
        const result = yield products_service_1.ProductServices.updateProductById(productId, updateData);
        if (result) {
            res.json({
                success: true,
                message: "Product updated successfully!",
                data: result,
            });
        }
        else {
            res.status(404).json({
                success: false,
                message: "Product not found",
            });
        }
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Could not update product!",
            error: error,
        });
    }
});
// deleted data 
const deleteProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.productId;
        const result = yield products_service_1.ProductServices.deleteProductById(productId);
        if (result) {
            res.json({
                success: true,
                message: "Product deleted successfully!",
                data: null,
            });
        }
        else {
            res.status(404).json({
                success: false,
                message: "Product not found",
            });
        }
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Could not delete product!",
            error: error,
        });
    }
});
// search option
const searchProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const searchTerm = req.query.searchTerm;
        const result = yield products_service_1.ProductServices.searchProducts(searchTerm);
        if (result.length > 0) {
            res.json({
                success: true,
                message: `Products matching search term '${searchTerm}' fetched successfully!`,
                data: result,
            });
        }
        else {
            res.status(404).json({
                success: false,
                message: `No products found matching search term '${searchTerm}'`,
            });
        }
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Could not search products!",
            error: error,
        });
    }
});
// Create a new order
const createOrderHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderData = ordervalidation_1.orderSchema.parse(req.body);
        const newOrder = yield (0, products_service_1.creteOrder)(orderData);
        // Update inventory after creating the order
        yield (0, products_service_1.updateInventory)(orderData.productId, orderData.quantity);
        res.status(201).json({
            success: true,
            message: 'Order created successfully!',
            data: newOrder,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: 'Order creation failed!',
        });
    }
});
exports.createOrderHandler = createOrderHandler;
//    get all order
const getAllOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, products_service_1.getAllOrder)();
        if (result.length > 0) {
            res.json({
                success: true,
                message: "Order  fetched successfully",
                data: result,
            });
        }
        else {
            res.status(404).json({
                success: false,
                message: "Order  not found",
            });
        }
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Could not found product!",
            error: error
        });
    }
});
exports.getAllOrders = getAllOrders;
exports.ProductController = {
    createProduct,
    getAllProducts,
    singleProductById,
    updateProductById,
    deleteProductById,
    searchProducts,
};
