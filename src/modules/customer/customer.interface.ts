export type TCustomerReview = {
  id: number;
  name: string;
  avatar: string; // URL to the customer's avatar
  review: string; // The customer's review
  rating: number; // Rating out of 5
  date: string; // ISO date string
  location: string; // Customer's location
};
