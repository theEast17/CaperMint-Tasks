import Category from '../models/categoryModel.js';

export const listCategories = async (req, res) => {
  const categories = await Category.find().populate('parentCategory');
  res.render('category/categoryList', { categories });
};

export const addCategory = async (req, res) => {
  const { name, parentCategory } = req.body;
  const category = new Category({ name,  parentCategory: parentCategory ? parentCategory : null });
  await category.save();
  res.redirect('/category/list');
};

export const renderAddCategory = async (req, res) => {
  const categories = await Category.find();
  res.render('category/addCategory', { categories });
};
