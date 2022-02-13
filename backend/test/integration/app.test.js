const supertest = require('supertest');
const app = require('../../src/app');
const request = supertest(app);

test('App test', async () => {
  const response = await request.get('/');
  expect(response.status).toBe(200);
  expect(response.text).toBe('Welcome to the backend module...');
});
