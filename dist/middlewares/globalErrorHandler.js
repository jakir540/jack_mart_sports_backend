"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const handleValidationError_1 = __importDefault(require("../errors/handleValidationError"));
const handleCastError_1 = __importDefault(require("../errors/handleCastError"));
const appError_1 = __importDefault(require("../errors/appError"));
const globalErrorHandler = (err, req, res, next) => {
    //set default values
    let statusCode = 500;
    let message = "something went wrong";
    let errorSources = [
        {
            path: "",
            message: "something went wrong",
        },
    ];
    if ((err.name = "ValidationError")) {
        const simplifiedErr = (0, handleValidationError_1.default)(err);
        statusCode = simplifiedErr.statusCode;
        message = simplifiedErr.message;
        errorSources = simplifiedErr.errorSources;
    }
    else if ((err === null || err === void 0 ? void 0 : err.name) === "CastError") {
        const simplifiedErr = (0, handleCastError_1.default)(err);
        statusCode = simplifiedErr.statusCode;
        message = simplifiedErr.message;
        errorSources = simplifiedErr.errorSources;
    }
    else if (err instanceof appError_1.default) {
        statusCode = err === null || err === void 0 ? void 0 : err.statusCode;
        message = err.message;
        errorSources = [
            {
                path: "",
                message: err === null || err === void 0 ? void 0 : err.message,
            },
        ];
    }
    // finally return
    return res.status(statusCode).json({
        success: false,
        message,
        errorSources,
    });
};
exports.default = globalErrorHandler;
