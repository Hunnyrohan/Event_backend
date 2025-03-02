const request = require('supertest');
const app = require('../server.js');

describe('Bookings Routes', () => {
  it('should create a new booking', async () => {
    const token = 'your-jwt-token'; // Mock or obtain from login test
    const res = await request(app)
      .post('/api/v1/bookings')
      .set('Authorization', `Bearer ${token}`)
      .send({ user_id: 1, service_id: 1, venue_id: 1, date: '2025-03-15T14:00:00', status: 'pending' });
    expect(res.statusCode).toBe(201);
    expect(res.body.message).toBe('Congratulations! You have successfully booked. We will respond soon.');
    expect(res.body.booking).toHaveProperty('id');
  });

  it('should delete a booking', async () => {
    const token = 'your-jwt-token'; // Mock or obtain from login test
    const res = await request(app)
      .delete('/api/v1/bookings/1') // Assuming seeded data has ID 1
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Booking deleted successfully');
  });
});