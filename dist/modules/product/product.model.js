"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    stockQuantity: { type: Number, required: true },
    brand: { type: String, required: true },
    rating: { type: Number, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
}, {
    timestamps: true,
});
exports.Product = (0, mongoose_1.model)("product", productSchema);
