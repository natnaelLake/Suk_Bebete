import Order from "../models/orders/index.js";

export const createOrderController = async (req, res, next) => {
  let orderInfo = {};
  console.log('dasfjk akjfhd skafhdsfdsf ......',{...req.body})
  try {
    orderInfo = { ...req.body };
    const orderedData = await Order.createOrder(orderInfo);
    res.json(orderedData);
  } catch (error) {
    next(error)
  }
};

export const getOrdersController = async (req,res,next)=>{
try {
  const orderInformation = await Order.getOrder();
  console.log(orderInformation)
  res.json(orderInformation)
} catch (error) {
  console.error(error)
}
}
