import app from '../src/server';
import request from 'supertest';

describe('Server is running',() => {
    test('GET / returns status 200', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
    })

    test('GET / returns Hello World', async () => {
        const response = await request(app).get('/');
        expect(response.text).toBe('Hello World');
    })
})