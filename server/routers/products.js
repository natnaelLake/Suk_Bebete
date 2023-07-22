import express from "express";
import {
  createProductController,
  getProductController,
  searchController,
  sortByCostController,
} from "../controllers/product.js";
import fileUploader from "../config/fileuploader.js";
import { createProductValidator } from "../validators/product.validator.js";
import parseValidations from "../validators/errors.parser.js";
const router = express.Router();

router.post(
  "/createProduct",
  fileUploader,
  createProductValidator(),
  parseValidations,
  createProductController
);
router.get("/getProduct", getProductController);
router.get('/searchProduct',searchController);
router.get('/sortByCost',sortByCostController);

export default router;
