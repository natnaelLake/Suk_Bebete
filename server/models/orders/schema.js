import mongoose from "mongoose";
import { modelNames } from "../../utils/constants.js";

const orderDB = new mongoose.Schema(
  {
    amount: { type: Number, default:1},
    endDate: { type: Number },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: `${modelNames.users}`,
      required: true,
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: `${modelNames.products}`,
      required: true,
    },
  },
  { timestamps: true }
);

export default orderDB;
