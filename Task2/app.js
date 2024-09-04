import express from 'express';
import session from 'express-session';
import mongoose from 'mongoose';
import adminRoutes from './src/routes/adminRoutes.js';
import categoryRoutes from './src/routes/categoryRoutes.js';
import productRoutes from './src/routes/productRoutes.js';
import orderRoutes from './src/routes/orderRoutes.js';
import path from 'path';

const app = express();
const __dirname = path.resolve();


mongoose.connect('mongodb://localhost:27017/adminPanel');
app.set('views', path.join(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());




app.use(session({
  secret: 'poorvnagar123',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false } 
}));

// Admin routes
app.use('/admin', adminRoutes);

// Category routes
app.use('/category', categoryRoutes);

// Product routes
app.use('/product', productRoutes);

// Order routes
app.use('/order', orderRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
