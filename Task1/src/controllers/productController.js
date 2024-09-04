import Product from "../models/productModel.js";


export const getProducts = async (req, res) => {
    const { minPrice, maxPrice, category, search, sort } = req.query;
    
    let query = {};
    
    // Filtering
    if (minPrice || maxPrice) {
        query.price = {};
        if (minPrice) query.price.$gte = Number(minPrice);
        if (maxPrice) query.price.$lte = Number(maxPrice);
    }

    // Category filtering
    if (category) query.category = category;

    // Search functionality
    if (search) query.name = new RegExp(search, 'i');

    let sortOption = {};
    if (sort === 'name_asc') sortOption.name = 1;
    if (sort === 'name_desc') sortOption.name = -1;
    if (sort === 'price_asc') sortOption.price = 1;
    if (sort === 'price_desc') sortOption.price = -1;
    if (sort === 'date_asc') sortOption.dateAdded = 1;
    if (sort === 'date_desc') sortOption.dateAdded = -1;

    try {
        const products = await Product.find(query).sort(sortOption);
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
