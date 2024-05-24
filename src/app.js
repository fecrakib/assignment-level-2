"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var Products_route_1 = require("./modules/Products.route");
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api/products', Products_route_1.ProductRoutes.router);
app.use('/api/orders', Products_route_1.ProductRoutes.orderRouter);
app.get('/', function (req, res) {
    res.send('Hello World dfd!');
});
exports.default = app;
