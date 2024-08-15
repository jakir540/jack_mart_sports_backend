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
exports.ProductServices = void 0;
const product_model_1 = require("./product.model");
// create a product
const createProductIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.create(payload);
    return result;
});
// get all product
const getAllProductIntoDB = (req) => __awaiter(void 0, void 0, void 0, function* () {
    // get product based on category
    const { category } = req.query;
    console.log("category", category);
    const query = {};
    if (category) {
        query.category = category;
    }
    let result = yield product_model_1.Product.find(query);
    if (!result || result.length === 0) {
        result = yield product_model_1.Product.find({});
    }
    return result;
});
// Delete single product
const deleteSingleProductIntoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield product_model_1.Product.findById(id);
    if (!product) {
        throw new Error("Product not find");
    }
    const deletedProduct = yield product_model_1.Product.findByIdAndDelete(id);
    return deletedProduct;
});
// get single product
const getSingleProductIntoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield product_model_1.Product.findById(id);
    if (!product) {
        throw new Error("Product not find");
    }
    return product;
});
// update single product
const updateSingleProductIntoDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield product_model_1.Product.findById(id);
    if (!product) {
        throw new Error("Product not find");
    }
    const updatedProduct = yield product_model_1.Product.findByIdAndUpdate(id, payload, {
        new: true,
    });
    return updatedProduct;
});
// update product stock qunatity
const updateStockQuantityProductIntoDB = (productIds, stockQuantity) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log("ids", productIds, stockQuantity);
    const updatePromises = productIds.map((id, index) => __awaiter(void 0, void 0, void 0, function* () {
        const qunatityToUpdate = stockQuantity[index];
        console.log("notoUpdate", qunatityToUpdate);
        const product = yield product_model_1.Product.findById(id.toString());
        if (!product) {
            throw new Error(`Product with ${id} not find`);
        }
        const newQuantity = product.stockQuantity - qunatityToUpdate;
        if (newQuantity < 0) {
            throw new Error(`Insufficient stock for product ID ${id}`);
        }
        console.log("poran", product.stockQuantity);
        console.log("noton", newQuantity);
        const updateProduct = yield product_model_1.Product.findByIdAndUpdate(id.toString(), { stockQuantity: newQuantity }, { new: true });
        return updateProduct;
    }));
    // Wait for all the update promises to complete
    yield Promise.all(updatePromises);
});
exports.ProductServices = {
    createProductIntoDB,
    getAllProductIntoDB,
    deleteSingleProductIntoDB,
    getSingleProductIntoDB,
    updateSingleProductIntoDB,
    updateStockQuantityProductIntoDB,
};
