const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');

router.get('/', productController.get);

router.post('/', productController.insert);

module.exports = router;
