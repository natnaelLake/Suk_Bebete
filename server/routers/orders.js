import express from 'express';
import { createOrderController, getOrdersController } from '../controllers/order.js';

const router = express.Router();


router.get('/getOrders',getOrdersController)
router.post('/createOrder',createOrderController)

export default router;