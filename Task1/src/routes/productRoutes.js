import express from 'express';
import { getProducts } from '../controllers/productController.js';
import { getCategories } from '../controllers/categoryController.js';
import { addToCart, removeFromCart } from '../controllers/cartController.js';
import { getOrders, placeOrder } from '../controllers/orderController.js';
import { isAuth } from '../middlewares/isAuth.js';

const productRoutes = express.Router();

// Products listing
productRoutes.get('/products', getProducts);

// Category listing
productRoutes.get('/categories', getCategories);

// Cart management
productRoutes.post('/cart/add', addToCart);
productRoutes.post('/cart/remove', removeFromCart);

// Orders
productRoutes.post('/order/place', isAuth(), placeOrder); 
productRoutes.get('/orders/:userId', isAuth(), getOrders); 

export default productRoutes;
