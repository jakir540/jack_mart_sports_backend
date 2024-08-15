"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const globalErrorHandler_1 = __importDefault(require("./middlewares/globalErrorHandler"));
const notFoundRoutes_1 = __importDefault(require("./middlewares/notFoundRoutes"));
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// app route
app.use('/api', routes_1.default);
app.get('/', (req, res) => {
    res.send('jack mart sport shop running');
});
//not found routes
app.use(notFoundRoutes_1.default);
// global error handling
app.use(globalErrorHandler_1.default);
exports.default = app;
