const Product = require('../models/Product');
const Category = require('../models/Category');

const addProduct = async(req, res) => {
    try {
        const categories = await Category.find({});
        res.render('admin/add-product', {categories: categories, isUser: true});
    }catch(error) {
        console.log(error.message);
    }
}

const addProductStore = async(req, res) => {
    const image_name = req.file.filename;
    const category_name = await Category.find({_id: req.body.category});

    try {
        
        const product = await new Product({
            name: req.body.name,
            image: image_name,
            price: req.body.price,
            description: req.body.description,
            category: category_name[0]._id
            
        });

        const product_save = await product.save();      
         res.redirect('/');
    }catch(error){
        console.log(error.message);
    }
}

const detailProduct = async(req, res) => {
    const product_id = req.params.id;
    const product = await Product.findById({_id: product_id});
    res.render('product-detail', {product: product, isUser: true});
}

module.exports = {
    addProduct,
    addProductStore,
    detailProduct
}