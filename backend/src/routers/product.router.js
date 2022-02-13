const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');

router.get('/', productController.get);

router.post('/', productController.insert);

router.put('/:id', productController.update);

router.get('/:id', productController.getById);

router.delete('/:id', productController.delete);

module.exports = router;
