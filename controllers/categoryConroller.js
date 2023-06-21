const Category = require('../models/Category');

const addCategory = async(req, res) => {
    res.render('admin/add-category', {isUser: true});
}

const addCategoryStore = async(req, res) => {
    try {
        const cat_name = req.body.category;
        
        const cat_name_save = await new Category({
            name: cat_name
        });
        const category_name = await cat_name_save.save();
        res.send('ok')
    }catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    addCategory,
    addCategoryStore
}