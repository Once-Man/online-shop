const mongoose = require('mongoose');

const CartSchema = mongoose.Schema({
    name: String,
    price: Number,
    amount: Number,
    userId: String,
    productId: String,
}, {timestamps: true},);

const Cart = mongoose.model('Cart', CartSchema);
module.exports = Cart;

