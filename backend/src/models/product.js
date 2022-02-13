'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate() {}
  }
  Product.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.NUMBER,
      category: DataTypes.STRING,
      count: DataTypes.INTEGER,
      rating: DataTypes.NUMBER,
    },
    {
      sequelize,
      modelName: 'Product',
      freezeTableName: true,
    }
  );
  return Product;
};
