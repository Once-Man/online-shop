const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema({
    name: String
}, {timestamps: true}, );

const Category = mongoose.model('Category', CategorySchema);

module.exports = Category;