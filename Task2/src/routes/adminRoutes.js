import express from 'express';
import { renderLoginPage, loginAdmin, dashboard,renderRegisterPage, registerAdmin } from '../controllers/adminController.js';

const router = express.Router();

router.get('/login', renderLoginPage);
router.post('/login', loginAdmin);
router.get('/dashboard', dashboard);
router.get('/register', renderRegisterPage); 
router.post('/register', registerAdmin);

export default router;
