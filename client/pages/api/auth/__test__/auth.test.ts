import request from 'supertest';

/**
 * If on dev environment please run the server
 * for this to work.
 */

describe('The api login path', () => {
  const testRequest = request('http://localhost:3000');

  it('returns 200 when correct', async () => {
    const response = await testRequest.get('/api/auth/fhwuihewuifh');

    console.log(response);
    expect(response.statusCode).toBe(200);
  });
});
