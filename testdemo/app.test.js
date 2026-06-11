const request = require('supertest');
const app = require('./app');
test('GET /hello', async() => {
    const response = await request(app).get('/hello');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello World!'); 
});
test('POST /hello', async() => {
    const response = await request(app)
        .post('/hello')
        .send({ name: 'Alice' });
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('Hello Alice!');
});
