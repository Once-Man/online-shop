const Cart = require('../models/Cart');
const validationResult = require('express-validator').validationResult;
const addCart = async(req, res) => {
    try{
        if(validationResult(req).isEmpty()) {
            const cart_new = await new Cart({
                name: req.body.name,
                price: req.body.price,
                amount: req.body.amount,
                productId: req.body.productId,
                userId: req.session.userId
            });
           const cart = await cart_new.save();
            
            res.render('cart', {isUser: false});
        }else{
            req.flash('validationErrors', validationResult(req).array());
            res.redirect(req.body.redirectTo); 
        }
    }catch(error){
        console.log(error.message);
    }
}

const getCart = async(req, res) => {
    try {
        const carts = await Cart.find({userId: req.session.userId},{}, {sort: {timestamps: 1}});
        res.render('cart', {carts: carts, isUser: true})
    }catch(error){
        console.log(error.message);
    }
}

module.exports = {
    addCart,getCart
}
