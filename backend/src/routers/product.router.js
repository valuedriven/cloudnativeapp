const express = require('express');
const router = express.Router();
const productMessage = 'Products list';

router.get('/', (req, res) => {
  res.send(productMessage);
});

module.exports = router;
