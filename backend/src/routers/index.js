const express = require('express');
const router = express.Router();
const rootRouter = require('./root.router');
const productRouter = require('./product.router');

router.use('/products', productRouter);

router.use('/', rootRouter);

module.exports = router;
