import { formatEmail } from '@utils/format';
export default function validate(values) {
  const { email, phone } = values;

  return {
    email: !email && 'required' || !formatEmail(email) && 'Format email salah',
    phone: !phone && 'required',
  };
}
