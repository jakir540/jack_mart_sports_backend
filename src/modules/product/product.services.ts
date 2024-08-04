import { query } from "express";
import { TProuduct } from "./product.interface";
import { Product } from "./product.model";
// create a product
const createProductIntoDB = async (payload: TProuduct) => {
  const result = await Product.create(payload);
  return result;
};
// get all product
const getAllProductIntoDB = async (req: any) => {
  // get product based on category
  const { category, search, sort, priceMin, priceMax, brand, rating } =
    req.query;
  console.log("category", category);

  let query: any = {};

  if (category) {
    query.category = category;
  }

  if (search) {
    query.name = { $regex: search, $options: "i" };
  }

  if (priceMin !== undefined && priceMax !== undefined) {
    query.price = { $gte: priceMin, $lte: priceMax };
  }
  // serace by brand
  if (brand) {
    query.brand = { $regex: brand, $options: "i" };
  }

  if (rating !== undefined) {
    query.rating = { $lte: rating };
  }

  // sorting

  console.log("query ", query);
  console.log("query ", query.search);
  let result = await Product.find(query);
  if (!result || result.length === 0) {
    result = await Product.find();
  }

  if (sort === "priceAsc") {
    result = result.sort((a, b) => a.price - b.price);
  } else if (sort === "priceDesc") {
    result = result.sort((a, b) => b.price - a.price);
  }

  return result;
};

// Delete single product
const deleteSingleProductIntoDB = async (id: string) => {
  const product = await Product.findById(id);
  if (!product) {
    throw new Error("Product not find");
  }
  const deletedProduct = await Product.findByIdAndDelete(id);
  return deletedProduct;
};
// get single product
const getSingleProductIntoDB = async (id: string) => {
  const product = await Product.findById(id);
  if (!product) {
    throw new Error("Product not find");
  }
  return product;
};
// update single product
const updateSingleProductIntoDB = async (
  id: string,
  payload: Partial<TProuduct>
) => {
  const product = await Product.findById(id);
  if (!product) {
    throw new Error("Product not find");
  }

  const updatedProduct = await Product.findByIdAndUpdate(id, payload, {
    new: true,
  });

  return updatedProduct;
};

// update product stock qunatity
const updateStockQuantityProductIntoDB = async (
  productIds: string[],
  stockQuantity: number[]
) => {
  // console.log("ids", productIds, stockQuantity);

  const updatePromises = productIds.map(async (id: string, index: number) => {
    const qunatityToUpdate = stockQuantity[index];
    console.log("notoUpdate", qunatityToUpdate);

    const product = await Product.findById(id.toString());
    if (!product) {
      throw new Error(`Product with ${id} not find`);
    }

    const newQuantity = product.stockQuantity - qunatityToUpdate;
    if (newQuantity < 0) {
      throw new Error(`Insufficient stock for product ID ${id}`);
    }

    console.log("poran", product.stockQuantity);
    console.log("noton", newQuantity);

    const updateProduct = await Product.findByIdAndUpdate(
      id.toString(),
      { stockQuantity: newQuantity },
      { new: true }
    );
    return updateProduct;
  });

  // Wait for all the update promises to complete

  await Promise.all(updatePromises);
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductIntoDB,
  deleteSingleProductIntoDB,
  getSingleProductIntoDB,
  updateSingleProductIntoDB,
  updateStockQuantityProductIntoDB,
};
