"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRoutes = void 0;
const express_1 = __importDefault(require("express"));
const product_controllers_1 = require("./product.controllers");
const router = express_1.default.Router();
router.post("/create-product", product_controllers_1.ProductControllers.createProduct);
router.get("/products", product_controllers_1.ProductControllers.getAllProduct);
router.delete("/:id", product_controllers_1.ProductControllers.deleteProduct);
router.get("/:id", product_controllers_1.ProductControllers.getSingleProduct);
router.patch("/:id", product_controllers_1.ProductControllers.updateSingleProduct);
router.post("/updateStockQuantity", product_controllers_1.ProductControllers.updateStockQuantity);
exports.productRoutes = router;
