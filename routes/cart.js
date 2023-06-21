const express = require('express');
const router = express.Router();
const check = require('express-validator').check;
const cartController = require('../controllers/cartController');
const isAuth = require('../middlewares/isAuth');

router.post('/cart',isAuth.isAuthTest,check('amount')
                                        .not()
                                        .isEmpty()
                                        .withMessage('amount is required!')
                                        .isInt({ min: 1 })
.withMessage('amount must be grater than 0') ,cartController.addCart);

router.get('/cart', isAuth.isAuthTest, cartController.getCart);

module.exports = router;