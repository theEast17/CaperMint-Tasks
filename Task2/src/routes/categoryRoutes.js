import express from 'express';
import { listCategories, addCategory, renderAddCategory } from '../controllers/categoryController.js';

const router = express.Router();

router.get('/list', listCategories);
router.get('/add', renderAddCategory);
router.post('/add', addCategory);

export default router;
