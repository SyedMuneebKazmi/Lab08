const request = require('supertest');
const app = require('../src/server');  // Import app instance

describe('Event API', () => {
  let token;

  beforeAll(async () => {
    // Register a user
    const res = await request(app)
      .post('/api/users/register')
      .send({ username: 'testuser', password: 'testpassword' });

    // Log in to get token
    const loginRes = await request(app)
      .post('/api/users/login')
      .send({ username: 'testuser', password: 'testpassword' });

    token = loginRes.body.token;
  });

  afterAll(() => {
    // Here you can handle cleanup, such as closing any server connections if needed
    // e.g. app.close();
  });

  it('should create an event', async () => {
    const res = await request(app)
      .post('/api/events')
      .set('Authorization', `Bearer ${token}`)
      .send({
        name: 'Meeting',
        description: 'Discuss project',
        date: '2025-03-14',
        time: '10:00',
        category: 'Meeting',
        reminder: true
      });

    expect(res.status).toBe(201);
    expect(res.body.name).toBe('Meeting');
  });
});
