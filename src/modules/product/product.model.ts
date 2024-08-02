import { model, Schema } from "mongoose";
import { TProuduct } from "./product.interface";

const productSchema = new Schema<TProuduct>(
  {
    name: { type: String, required: true },
    category: { type: String, required: true },
    stockQuantity: { type: Number, required: true },
    brand: { type: String, required: true },
    rating: { type: Number, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const Product = model<TProuduct>("product", productSchema);
