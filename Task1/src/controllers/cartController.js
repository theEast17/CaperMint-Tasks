
import Cart from "../models/cartModel.js";
import Product from "../models/productModel.js";

export const addToCart = async (req, res) => {
    const { userId, productId, quantity } = req.body;
    
    try {
        const product = await Product.findById(productId);
        if (!product) return res.status(404).json({ message: 'Product not found' });

        if (quantity > product.quantity) {
            return res.status(400).json({ message: `Only ${product.quantity} qty is available for this product` });
        }

        let cart = await Cart.findOne({ userId });

        if (!cart) {
            cart = new Cart({ userId, products: [{ productId, quantity }] });
        } else {
            const productInCart = cart.products.find(item => item.productId.equals(productId));
            if (productInCart) {
                productInCart.quantity = quantity;
            } else {
                cart.products.push({ productId, quantity });
            }
        }
        await cart.save();
        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const removeFromCart = async (req, res) => {
    const { userId, productId } = req.body;

    try {
        let cart = await Cart.findOne({ userId });

        if (!cart) return res.status(404).json({ message: 'Cart not found' });

        cart.products = cart.products.filter(item => !item.productId.equals(productId));

        await cart.save();
        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
