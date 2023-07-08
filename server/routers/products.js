import express  from 'express'
import { createProductController, getProductController } from "../controllers/product.js";
import fileUploader from '../config/fileuploader.js';

const router = express.Router()


router.post('/createProduct',fileUploader,createProductController)
router.get('/getProduct',getProductController)

export default router