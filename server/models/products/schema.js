import mongoose from "mongoose";

const productDB = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    productImage: {
      type: [String],
      required: true,
    },
    productCost: {
      type: Number,
      required: true,
    },
    productDesc: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default productDB;
