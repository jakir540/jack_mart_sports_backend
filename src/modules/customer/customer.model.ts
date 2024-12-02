import { model, Schema } from 'mongoose';
import { TCustomerReview } from './customer.interface';

const customerReviewSchema = new Schema<TCustomerReview>(
  {
    name: { type: String, required: true },
    avatar: { type: String, required: true }, // URL of the avatar
    review: { type: String, required: true },
    rating: { type: Number, required: true, min: 0, max: 5 },
    date: { type: String, required: true }, // ISO date string
    location: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

export const CustomerReviewModel = model<TCustomerReview>(
  'CustomerReview',
  customerReviewSchema,
);
