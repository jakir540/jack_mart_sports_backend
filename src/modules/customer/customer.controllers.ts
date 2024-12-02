import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { customerReviewServices } from './customer.services';

const createCustomerReview = catchAsync(async (req, res) => {
  const result = await customerReviewServices.createCustomerReviewIntoDB(
    req.body,
  );
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Customer Review created successfully',
    data: result,
  });
});

// get all product
const getAllCustomerReviews = catchAsync(async (req, res) => {
  const result = await customerReviewServices.getAllCustomerReviewsIntoDB();
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Customer Review gets successfully',
    data: result,
  });
});

export const CustomerReviewControllers = {
  createCustomerReview,
  getAllCustomerReviews,
};
