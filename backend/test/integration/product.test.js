const supertest = require('supertest');
const app = require('../../src/app');
const request = supertest(app);

test('Get products', async () => {
  const response = await request.get('/products');
  expect(response.status).toBe(200);
  expect(response.text).toBe('Products list');
});
