import Product from '../models/productModel.js';
import Category from '../models/categoryModel.js';  // Import the Category model
import multer from 'multer';
import path from 'path';

// Setup multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));  // Save the file with a timestamp
  }
});

const upload = multer({ storage: storage });

// List all products
export const listProducts = async (req, res) => {
  try {
    const products = await Product.find().populate('category');
    res.render('product/productList', { products });
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Failed to load products' });
  }
};

// Render the add product page
export const renderAddProduct = async (req, res) => {
  try {
    const categories = await Category.find();
    res.render('product/addProduct', { categories });
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({ error: 'Failed to load categories' });
  }
};

// Add a new product
export const addProduct = async (req, res) => {
  try {
    const { title, qty, color, size, category, description, amount } = req.body;
    
    // Create a new product with form data and image path
    const product = new Product({
      title,
      qty,
      color,
      size,
      category,
      description,
      amount,
      image: req.file.path  // Store file path
    });
    
    await product.save();  // Save the product to the database
    res.redirect('/product/list');  // Redirect to the product list page after saving
  } catch (error) {
    console.error('Error adding product:', error);
    res.status(500).json({ error: 'Failed to add product' });
  }
};

// Add the route for handling product image uploads
export const uploadProductImage = upload.single('image');  // Middleware for single image upload
