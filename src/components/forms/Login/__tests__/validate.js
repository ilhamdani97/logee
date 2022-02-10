import validate from '../validate';

describe('src/components/forms/Login/validate', () => {
  test('validate', () => {
    const input1 = { email: '', password: '' };
    expect(validate(input1)).toMatchObject({
      email: 'required',
      password: 'required',
    });

  });
  test('validate', () => {
    const input1 = { email: ' rew ewr ewrw ewer', password: '' };
    expect(validate(input1)).toMatchObject({
      email: 'Format email salah',
    });
  });
});
