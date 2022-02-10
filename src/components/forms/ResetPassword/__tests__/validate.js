import validate from '../validate';

describe('src/components/forms/ResetPassword/validate', () => {

  test('email kosong', () => {
    const input1 = { email: '' };
    expect(validate(input1)).toMatchObject({
      email: 'required',
    });
  });
  test('email kosong', () => {
    const input1 = { email: 'asd234  asd' };
    expect(validate(input1)).toMatchObject({
      email: 'Format email salah',
    });
  });
});
