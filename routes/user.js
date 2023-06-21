const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const {isAuth, notAuth} = require('../middlewares/isAuth');

router.get('/signup', userController.signup);
router.get('/login', userController.login);
router.post('/signup', userController.signupStore);
router.post('/login', userController.loginStore);
router.all('/logout', userController.logout);

module.exports = router;