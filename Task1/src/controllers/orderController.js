import Cart from "../models/cartModel.js";
import Order from "../models/orderModel.js";

export const placeOrder = async (req, res) => {
    const { userId, billingAddress, deliveryAddress } = req.body;

    try {
        const cart = await Cart.findOne({ userId });

        if (!cart || cart.products.length === 0) {
            return res.status(400).json({ message: 'Cart is empty' });
        }

        const order = new Order({
            userId,
            products: cart.products,
            billingAddress,
            deliveryAddress
        });

        await order.save();
        await Cart.deleteOne({ userId }); // Clear the cart after placing the order

        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getOrders = async (req, res) => {
    const { userId } = req.params;

    try {
        const orders = await Order.find({ userId });
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
