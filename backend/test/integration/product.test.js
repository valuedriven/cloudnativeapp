const supertest = require('supertest');
const app = require('../../src/app');
const request = supertest(app);
const { Product } = require('../../src/models');

test('Get Product', async () => {
  const response = await request.get('/products');
  expect(response.status).toBe(200);
  expect(response.text.length).toBeGreaterThanOrEqual(0);
});

test('Insert product', async () => {
  const product = {
    name: 'Product 1',
    price: 1.1,
    category: 'Category 1',
    count: 10,
    rating: 1.1,
  };
  const response = await request.post('/products').send(product);
  expect(response.status).toBe(200);
  expect(response.text).toBe('Product inserted successfully');
});

test('Delete product', async () => {
  const productData = {
    name: 'Product to be deleted',
    price: 1.1,
    category: 'Category to be deleted',
    count: 10,
    rating: 1.1,
  };
  let product = await Product.create(productData);
  const response = await request.delete(`/products/${product.id}`);
  expect(response.status).toBe(200);
  expect(response.text).toBe('Product deleted successfully');
});

test('Update product', async () => {
  let productData = {
    name: 'Product to update',
    price: 1.1,
    category: 'Category to update',
    count: 10,
    rating: 1.1,
  };
  let product = await Product.create(productData);
  productData.name = 'Product updated';
  productData.category = 'Category updated';
  const response = await request
    .put(`/products/${product.id}`)
    .send(productData);
  expect(response.status).toBe(200);
  expect(response.body.name).toBe(productData.name);
  expect(response.body.category).toBe(productData.category);
});

test('Get product by id', async () => {
  let productData = {
    name: 'Product to get',
    price: 1.1,
    category: 'Category',
    count: 10,
    rating: 1.1,
  };
  let product = await Product.create(productData);
  const response = await request.get(`/products/${product.id}`);
  expect(response.status).toBe(200);
  expect(response.body.name).toBe(productData.name);
  expect(response.body.category).toBe(productData.category);
});
