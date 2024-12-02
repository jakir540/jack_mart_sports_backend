import { TCustomerReview } from './customer.interface';
import { CustomerReviewModel } from './customer.model';

// create a cusomter
const createCustomerReviewIntoDB = async (payload: TCustomerReview) => {
  const result = await CustomerReviewModel.create(payload);
  return result;
};
// create a product
const getAllCustomerReviewsIntoDB = async () => {
  const result = await CustomerReviewModel.find();
  return result;
};

export const customerReviewServices = {
  createCustomerReviewIntoDB,
  getAllCustomerReviewsIntoDB,
};
