import validate from '../validate';

describe('src/components/forms/ResetPasswordConfirm/validate', () => {

  test('validate', () => {
    const input1 = { newPassword: '', confirmPassword: '' };
    expect(validate(input1)).toMatchObject({
      newPassword: 'required',
      confirmPassword: 'required',
    });
  });


  test('validate tidak sesuai', () => {
    const input1 = { newPassword: '345435435435435435', confirmPassword: '324ewrwersd' };
    expect(validate(input1)).toMatchObject({
      confirmPassword: 'tidak sesuai',
    });
  });

  test('validate minimal 6 karakter', () => {
    const input1 = { newPassword: 'eee', confirmPassword: 'eee' };
    expect(validate(input1)).toMatchObject({
      newPassword: 'minimal 6 karakter',
      confirmPassword: 'minimal 6 karakter',
    });
  });
});
