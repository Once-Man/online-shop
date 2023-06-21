const Product = require('../models/Product');

const homePage = async(req, res) => {
    const products = await Product.find();
    res.render('index', {
        products: products,
        isUser: req.session.userId,
        validationError: req.flash('validationErrors')[0]
    });
    console.log(req.session.userId + ' ' + 'hello')
}

module.exports = {
    homePage
}