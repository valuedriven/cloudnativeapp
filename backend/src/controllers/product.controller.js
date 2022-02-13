const { Product } = require('../models');

exports.get = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.insert = async (req, res) => {
  try {
    await Product.create(req.body);
    return res.status(200).send('Product inserted successfully');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
