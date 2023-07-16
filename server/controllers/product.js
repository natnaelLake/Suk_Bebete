import Products from "../models/products/index.js";
import { join } from "path";

export const createProductController = async (req, res,next) => {
  const { productName, productCost, productDesc } = req.body;
  const images = [];
  let productImage = req.files.image;
  const path = join(process.cwd(), "./public/uploads/");
  if (productImage.length > 1) {
    for (let i = 0; i < productImage.length; i++) {
      productImage[i].mv(path + productImage[i].name, function (err) {
        if (err) {
          return res.status(500).send(err);
        }
      });
    }
    for (let i = 0; i < productImage.length; i++) {
      images.push(productImage[i].name);
    }
    productImage = images;
  } else {
    productImage.mv(path + productImage.name, function (err) {
      if (err) {
        return res.status(500).send(err);
      }
    });
    productImage = productImage.name;
  }
  try {
    const productInfo = {
      productName,
      productCost,
      productDesc,
      productImage,
    };
    const newProduct = await Products.createProduct(productInfo);
    res.json(newProduct);
  } catch (error) {
    next(error)
  }
};

export const getProductController = async (req, res) => {
  try {
    const newProduct = await Products.getProduct();
    res.json(newProduct);
  } catch (error) {
    next(error)
  }
};
