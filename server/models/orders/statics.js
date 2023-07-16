import { modelNames } from "../../utils/constants.js";

export async function createOrder(orderInfo) {
  let extrInfo = {};
  extrInfo = { ...orderInfo };
  console.log(extrInfo);
  const order = this.model(modelNames.orders).create({
    ...extrInfo,
  });
  return order;
}

export async function getOrder() {
  console.log("fdasljfdlasjfdlkfd");
  const regesteredProducts = await this.model(modelNames.orders)
    .find()
    .populate("product")
    .populate("user")
    .sort({ updatedAt: -1 });
  return regesteredProducts;
}
