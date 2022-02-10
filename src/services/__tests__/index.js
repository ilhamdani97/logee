import { post } from 'axios';
import * as user from '../user';

jest.mock('axios', () => ({
  get: jest.fn(),
  post: jest.fn()
}));

describe('src/services', () => {
  test('loginUser', async () => {
    post.mockRejectedValueOnce({ response: {
      data: {
        message: 'error'
      }
    } });
    try { await user.loginUser('tes'); }
    catch (e) { expect(e.message).toBe('error'); }

    post.mockResolvedValueOnce({ data: 'sukses' });
    const result = await user.loginUser('tes');
    expect(result).toBe('sukses');

    post.mockRejectedValueOnce({});
    try { await user.loginUser('tes'); }
    catch (e) { expect(e.status).toBe('error'); }

    // post.mockRejectedValueOnce({ response: {} });
    // try { await user.loginUser('tes'); }
    // catch (e) { expect(e.status).toBe('error'); }

    post.mockRejectedValueOnce({ response: { data: 'gagal' } });
    try { await user.loginUser('tes'); }
    catch (e) { expect(e).toBe('gagal'); }

  });

});
