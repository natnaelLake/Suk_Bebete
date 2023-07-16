import { body, check } from "express-validator";

const createProductValidator = () => [
  body("productName").isString().withMessage("Product Name Must Be String. "),
  body("productName").notEmpty().withMessage("Product Name Is Required. "),
  body("productCost").isInt().withMessage("Product Cost Must Be Number. "),
  body("productCost").notEmpty().withMessage("Product Cost Is Required. "),
  check("image").custom((value, { req }) => {
    if (!req.files || req.files.size === 0) {
      throw new Error("File is Required.");
    }
    return true;
  }),
];

export { createProductValidator };
