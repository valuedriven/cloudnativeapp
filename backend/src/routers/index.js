const express = require('express');
const router = express.Router();
const rootRouter = require('./root.router');
const productsRouter = require('./products.router');

router.use('/products', productsRouter);

router.use('/', rootRouter);

module.exports = router;
