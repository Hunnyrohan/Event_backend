const request = require('supertest');
const app = require('../server.js');

describe('Auth Routes', () => {
  it('should register a new user', async () => {
    const res = await request(app)
      .post('/api/v1/auth/signup')
      .send({ name: 'Test User', email: 'test4@example.com', password: 'password123' });
    expect(res.statusCode).toBe(201);
    expect(res.body.message).toBe('Signup successful');
    expect(res.body.user).toHaveProperty('id');
    expect(res.body.user.email).toBe('test4@example.com');
  });

  it('should login a user with valid credentials', async () => {
    const res = await request(app)
      .post('/api/v1/auth/login')
      .send({ email: 'rohan45@gmail.com', password: '12345678' }); // Assume seeded user
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Login successful');
    expect(res.body.token).toBeDefined();
    expect(res.body.user).toHaveProperty('id');
  });
});