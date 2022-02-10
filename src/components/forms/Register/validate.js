import { formatEmail } from '@utils/format';

export default function validate(values) {
  const { email, password, phone, name, npwp, retypepassword } = values;

  return {
    email: !email && 'required' || !formatEmail(email) && 'Format email salah',
    password: !password && 'required' || password.length < 6 && 'minimal 6 karakter',
    phone: !phone && 'required',
    name: !name && 'required',
    npwp: !npwp && 'required',
    retypepassword: !retypepassword && 'required' || retypepassword !== password && 'password tidak match'
  };
}
