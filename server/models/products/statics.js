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

export async function searchProduct(searchProduct) {
  const searchedProduct = this.model(modelNames.products).aggregate([
    { $match: { productName: searchProduct } },
    {
      $project: {
        _id: 0,
        createdAt: 0,
        updatedAt: 0,
        __v: 0,
      },
    },
  ]);
  return searchedProduct;
}
export async function sortByCostProduct() {
  const sortedProduct = this.model(modelNames.products).aggregate([
    { $sort: { productCost: 1 } },
  ]);
  return sortedProduct
}
