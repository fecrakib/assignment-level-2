"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const express_1 = __importDefault(require("express"));
const products_controller_1 = require("./products.controller");
const router = express_1.default.Router();
router.post('/', products_controller_1.ProductController.createProduct);
router.get('/', products_controller_1.ProductController.getAllProducts);
router.get('/:productId', products_controller_1.ProductController.singleProductById);
router.delete('/:productId', products_controller_1.ProductController.deleteProductById);
router.get('/search', products_controller_1.ProductController.searchProducts);
const orderRouter = express_1.default.Router();
orderRouter.post('/', products_controller_1.createOrderHandler);
orderRouter.get('/', products_controller_1.getAllOrders);
exports.ProductRoutes = {
    router,
    orderRouter,
};
