const supertest = require('supertest');
const app = require('../../src/app');
const request = supertest(app);

test('Get Product', async () => {
  const response = await request.get('/products');
  expect(response.status).toBe(200);
  expect(response.text).toBe('[]');
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
