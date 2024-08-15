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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductControllers = void 0;
const http_status_1 = __importDefault(require("http-status"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const product_services_1 = require("./product.services");
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
// create product in controller function
const createProduct = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_services_1.ProductServices.createProductIntoDB(req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Product created successfully",
        data: result,
    });
}));
// get all product
const getAllProduct = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_services_1.ProductServices.getAllProductIntoDB(req);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Product gets successfully",
        data: result,
    });
}));
// delete product
const deleteProduct = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield product_services_1.ProductServices.deleteSingleProductIntoDB(id);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Product deleted successfully",
        data: result,
    });
}));
// get single product
const getSingleProduct = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield product_services_1.ProductServices.getSingleProductIntoDB(id);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Product retried successfully",
        data: result,
    });
}));
// update single product
const updateSingleProduct = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const updateData = req.body;
    const result = yield product_services_1.ProductServices.updateSingleProductIntoDB(id, updateData);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Product retried successfully",
        data: result,
    });
}));
//updateStockQuantity controllers function
const updateStockQuantity = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productIds, stockQuantity } = req.body;
    const updateStockQuantity = yield product_services_1.ProductServices.updateStockQuantityProductIntoDB(productIds, stockQuantity);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Product stock qunatities updated successfully",
        data: updateStockQuantity,
    });
}));
exports.ProductControllers = {
    createProduct,
    getAllProduct,
    deleteProduct,
    getSingleProduct,
    updateSingleProduct,
    updateStockQuantity,
};
