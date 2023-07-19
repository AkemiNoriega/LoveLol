const Product = require('../models/product');
const dotenv = require('dotenv');
const connectDatabase = require('../config/database');

const products = require('../data/products');

// Setting dotenv file
dotenv.config({ path: 'backend/config/config.env' })

connectDatabase();

const seedProducts = async () => {
    try {
        await Product.deleteMany(); // Delete all products
        console.log('Products are deleted'); // Display message

        await Product.insertMany(products); // Insert all products
        console.log('All products are added.'); // Display message

        process.exit();
    } catch (error) {
        console.log(error.message);
        process.exit();
    }
}

seedProducts();
