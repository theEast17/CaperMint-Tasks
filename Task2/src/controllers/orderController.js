import Order from '../models/orderModel.js';

export const listOrders = async (req, res) => {
  const orders = await Order.find().populate('user').populate('products.product');
  res.render('order/orderList', { orders });
};

export const renderOrderDetails = async (req, res) => {
  const { id } = req.params;
  const order = await Order.findById(id).populate('user').populate('products.product');
  res.render('order/orderDetails', { order });
};

export const updateOrderStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  await Order.findByIdAndUpdate(id, { orderStatus: status });
  res.redirect('/order/list');
};
