import express from 'express';
import { listOrders, renderOrderDetails, updateOrderStatus } from '../controllers/orderController.js';

const router = express.Router();

router.get('/list', listOrders);
router.get('/details/:id', renderOrderDetails);
router.post('/update/:id', updateOrderStatus);

export default router;
