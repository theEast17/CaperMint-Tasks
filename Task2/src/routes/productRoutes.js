import express from 'express';
import { listProducts, renderAddProduct, addProduct } from '../controllers/productController.js';
import multer from 'multer';

const upload = multer({ dest: 'uploads/' });
const router = express.Router();

router.get('/list', listProducts);
router.get('/add', renderAddProduct);
router.post('/add', upload.single('image'), addProduct);

export default router;
