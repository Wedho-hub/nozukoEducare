import request from 'supertest';
import app from '../app.js';

describe('GET /api/blogs', () => {
  it('should return 200 and an array (integration test)', async () => {
    const res = await request(app).get('/api/blogs');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
