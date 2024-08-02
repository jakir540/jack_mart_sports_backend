import httpStatus from "http-status";
import sendResponse from "../../utils/sendResponse";
import { ProductServices } from "./product.services";
import catchAsync from "../../utils/catchAsync";
// create product in controller function
const createProduct = catchAsync(async (req, res) => {
  const result = await ProductServices.createProductIntoDB(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Product created successfully",
    data: result,
  });
});
// get all product
const getAllProduct = catchAsync(async (req, res) => {
  const result = await ProductServices.getAllProductIntoDB(req);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Product gets successfully",
    data: result,
  });
});
// delete product
const deleteProduct = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ProductServices.deleteSingleProductIntoDB(id);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Product deleted successfully",
    data: result,
  });
});
// get single product
const getSingleProduct = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ProductServices.getSingleProductIntoDB(id);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Product retried successfully",
    data: result,
  });
});
// update single product
const updateSingleProduct = catchAsync(async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;
  const result = await ProductServices.updateSingleProductIntoDB(
    id,
    updateData
  );
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Product retried successfully",
    data: result,
  });
});

//updateStockQuantity controllers function
const updateStockQuantity = catchAsync(async (req, res) => {
  const { productIds, stockQuantity } = req.body;
  const updateStockQuantity =
    await ProductServices.updateStockQuantityProductIntoDB(
      productIds,
      stockQuantity
    );
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Product stock qunatities updated successfully",
    data: updateStockQuantity,
  });
});

export const ProductControllers = {
  createProduct,
  getAllProduct,
  deleteProduct,
  getSingleProduct,
  updateSingleProduct,
  updateStockQuantity,
};
