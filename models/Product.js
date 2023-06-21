const mongoose = require('mongoose');
const Category = require('./Category');

const ProductSchema = mongoose.Schema({
    name: String,
    image: String,
    price: Number,
    description: String,
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref:Category
    }
}, {timestamps: true},);

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;