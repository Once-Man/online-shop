const express = require('express');
const router = express.Router();

const categoryController = require('../controllers/categoryConroller');

router.get('/add-category', categoryController.addCategory);
router.post('/add-category', categoryController.addCategoryStore);

module.exports = router;