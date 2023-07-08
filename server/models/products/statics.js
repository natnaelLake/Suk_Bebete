import { modelNames } from "../../utils/constants.js";

export async function createProduct(productInfo) {
  const { productName, productImage, productCost, productDesc } = productInfo;

  const createdProduct = this.model(modelNames.products).create({
    productName,
    productImage,
    productCost,
    productDesc,
  });
  return createdProduct;
}

export async function getProduct() {
  const regesteredProducts = this.model(modelNames.products)
    .find()
    .sort({ updatedAt: -1 });
  return regesteredProducts;
}
