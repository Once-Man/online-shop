const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const productController = require('../controllers/productController');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "images");
    },
    filename: function (req, file, cb) {
      cb(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    },
  });
  const upload = multer({ storage: storage });

router.get('/add-product', productController.addProduct);
router.post('/add-product',upload.single("image"), productController.addProductStore);
router.get('/product/:id', productController.detailProduct);

module.exports = router;