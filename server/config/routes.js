import express from 'express';
import testCode from '../routers/testCode.js';
import users from '../routers/user.js'
import products from '../routers/products.js'
import adminLogin from '../routers/admin.js'
import order from '../routers/orders.js'

const router = express.Router();

    router.use('/test',testCode)
    router.use('/user',users)
    router.use('/product',products)
    router.use('/admin',adminLogin)
    router.use('/order',order)

export default router