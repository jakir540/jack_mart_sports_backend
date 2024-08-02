import express from "express";
import { ProductControllers } from "./product.controllers";

const router = express.Router();

router.post("/create-product", ProductControllers.createProduct);
router.get("/products", ProductControllers.getAllProduct);
router.delete("/:id", ProductControllers.deleteProduct);
router.get("/:id", ProductControllers.getSingleProduct);
router.patch("/:id", ProductControllers.updateSingleProduct);

router.post("/updateStockQuantity", ProductControllers.updateStockQuantity);
export const productRoutes = router;
