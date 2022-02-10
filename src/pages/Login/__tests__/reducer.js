import { FAILED, LOADING } from '../constants';
import reducer from '../reducer';

describe('src/pages/Login/reducer', () => {
  test('Login', async () => {
    const result1 = reducer(undefined, { isLoading: true, type: LOADING, key: '' });
    expect(result1.isLoading).toBe(true);

    const result3 = reducer(undefined, { message: 'err', type: FAILED, key: '' });
    expect(result3.message).toBe('err');

    const result4 = reducer('tes', { type: 'default' });
    expect(result4).toBe('tes');
  });
});
