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

exports.getById = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findByPk(id);
    res.status(200).send(product);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

exports.delete = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findByPk(id);
    await product.destroy(id);
    res.status(200).send('Product deleted successfully');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    let product = await Product.findByPk(id);
    product.set(req.body);
    await product.save();
    res.status(200).send(product);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
