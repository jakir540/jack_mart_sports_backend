"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_route_1 = require("../modules/product/product.route");
const router = (0, express_1.Router)();
const moduleRoute = [
    {
        path: "/product",
        route: product_route_1.productRoutes,
    },
];
moduleRoute.forEach((route) => router.use(route.path, route.route));
exports.default = router;
