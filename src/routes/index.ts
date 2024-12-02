import { Router } from 'express';
import { productRoutes } from '../modules/product/product.route';
import { customerReviewRoutes } from '../modules/customer/customer.route';

const router = Router();

const moduleRoute = [
  {
    path: '/product',
    route: productRoutes,
  },
  {
    path: '/customer',
    route: customerReviewRoutes,
  },
];

moduleRoute.forEach((route) => router.use(route.path, route.route));

export default router;
