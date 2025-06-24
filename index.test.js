const request = require('supertest');
const app = require('./index');

describe('API Tests', () => {
  it('should return welcome message', async () => {
    const res = await request(app)
      .get('/')
      .expect('Content-Type', /json/)
      .expect(200);
    
    expect(res.body.message).toBe('Welcome to Cloud Native Guide!');
    expect(res.body.timestamp).toBeDefined();
  });

  it('should return health status', async () => {
    const res = await request(app)
      .get('/health')
      .expect('Content-Type', /json/)
      .expect(200);
    
    expect(res.body.status).toBe('healthy');
  });
});
