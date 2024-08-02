import { Router } from "express";
import { productRoutes } from "../modules/product/product.route";

const router = Router();

const moduleRoute = [
  {
    path: "/product",
    route: productRoutes,
  },
];

moduleRoute.forEach((route) => router.use(route.path, route.route));

export default router;
