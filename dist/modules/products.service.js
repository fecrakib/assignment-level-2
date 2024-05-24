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
exports.ProductServices = exports.updateInventory = exports.getAllOrder = exports.creteOrder = exports.singleProductGetById = void 0;
const porducts_model_1 = require("./porducts.model");
const createProduct = (payLoad) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield porducts_model_1.Product.create(payLoad);
    return result.save();
});
const getAllProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield porducts_model_1.Product.find();
    return result;
});
const singleProductGetById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield porducts_model_1.Product.findById(id);
    return result;
});
exports.singleProductGetById = singleProductGetById;
// for update
const updateProductById = (id, updateData) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield porducts_model_1.Product.findById(id);
    if (!product) {
        return null;
    }
    Object.assign(product, updateData);
    return yield product.save();
});
const deleteProductById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield porducts_model_1.Product.findByIdAndDelete(id);
    return product;
});
// search option
const searchProducts = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    const regex = new RegExp(searchTerm, 'i');
    const result = yield porducts_model_1.Product.find({
        $or: [
            { name: { $regex: regex } },
            { description: { $regex: regex } },
            { category: { $regex: regex } },
            { tags: { $in: [searchTerm] } }
        ]
    });
    return result;
});
// create a new order
const creteOrder = (orderData) => __awaiter(void 0, void 0, void 0, function* () {
    const orderProduct = new porducts_model_1.Order(orderData);
    return yield orderProduct.save();
});
exports.creteOrder = creteOrder;
// get all orders
const getAllOrder = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield porducts_model_1.Order.find();
});
exports.getAllOrder = getAllOrder;
// update inventory 
const updateInventory = (productId, orderedQuantity) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield porducts_model_1.Product.findById(productId);
    if (!product) {
        throw new Error('Product not found');
    }
    if (orderedQuantity > product.inventory.quantity) {
        throw new Error('Insufficient stock');
    }
    product.inventory.quantity -= orderedQuantity;
    product.inventory.inStock = product.inventory.quantity > 0;
    // Save the updated product
    yield product.save();
});
exports.updateInventory = updateInventory;
exports.ProductServices = {
    createProduct,
    getAllProducts,
    singleProductGetById: exports.singleProductGetById,
    updateProductById,
    deleteProductById,
    searchProducts,
};
