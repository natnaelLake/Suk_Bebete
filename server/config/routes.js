import express from 'express';
import testCode from '../routers/testCode.js';
import users from '../routers/user.js'
import products from '../routers/products.js'


const router = express.Router();

router.use('/test',testCode)
router.use('/user',users)
router.use('/product',products)


export default router