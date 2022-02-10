import validate from '../validate';

describe('src/components/forms/Register/validate', () => {

  test('validate empty', () => {
    const input1 = { email: '', password: '', phone:'',name:'',npwp:'', retypepassword:'' };
    expect(validate(input1)).toMatchObject({
      email: 'required',
      password: 'required',
      phone: 'required',
      name: 'required',
      npwp: 'required',
    });
  });

  test('minimal 6 karakter', () => {
    const input2 = { email: '', password: 'ddd', phone:'',name:'',npwp:'', retypepassword:'ddd' };
    expect(validate(input2)).toMatchObject({
      password: 'minimal 6 karakter',
    });
  });


  test('validate retype', () => {
    const input3 = { email: '', password: 'dddddddddddd', phone:'',name:'',npwp:'', retypepassword:'aaaaaaaaaaaa' };
    expect(validate(input3)).toMatchObject({
      retypepassword: 'password tidak match',
    });
  });


  test('validate email', () => {
    const input3 = { email: 'qwe qw ewq e', password: '123123', phone:'',name:'',npwp:'', retypepassword:'123123' };
    expect(validate(input3)).toMatchObject({
      email: 'Format email salah',
    });
  });



});
