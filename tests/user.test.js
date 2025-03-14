const request = require('supertest');
const app = require('../src/server');  // Assuming the app instance is exported from server.js

describe('User API', () => {
  it('should create a new user and return a success message', async () => {
    const res = await request(app)
      .post('/api/users/register')
      .send({
        username: 'testuser',
        password: 'testpassword'
      });

    expect(res.status).toBe(201);
    expect(res.body.message).toBe('User created');
  });

  it('should log in a user and return a token', async () => {
    const res = await request(app)
      .post('/api/users/login')
      .send({
        username: 'testuser',
        password: 'testpassword'
      });

    expect(res.status).toBe(200);
    expect(res.body.token).toBeDefined();
  });
});
