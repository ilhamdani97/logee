import { formatEmail } from '@utils/format';
export default function validate(values) {
  const { email, password } = values;

  return {
    email: !email && 'required' || !formatEmail(email) && 'Format email salah',
    password: !password && 'required',
  };
}
