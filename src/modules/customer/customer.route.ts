import express from 'express';
import { CustomerReviewControllers } from './customer.controllers';

const router = express.Router();

router.post(
  '/create-customer-review',
  CustomerReviewControllers.createCustomerReview,
);
router.get('/customer-review', CustomerReviewControllers.getAllCustomerReviews);
// router.delete("/:id", ProductControllers.deleteProduct);
// router.get("/:id", ProductControllers.getSingleProduct);
// router.patch("/:id", ProductControllers.updateSingleProduct);

export const customerReviewRoutes = router;
