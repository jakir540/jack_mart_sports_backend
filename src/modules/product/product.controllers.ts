import httpStatus from "http-status";
import sendResponse from "../../utils/sendResponse";
import { ProductServices } from "./product.services";
import catchAsync from "../../utils/catchAsync";

const createProduct = catchAsync(async (req, res) => {
  const result = await ProductServices.createProductIntoDB(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Product created successfully",
    data: result,
  });
});

export const ProductControllers = {
  createProduct,
};
