import { formatEmail } from '@utils/format';

export default function validate(values) {
  const { email } = values;

  return {
    email: !email && 'required' || !formatEmail(email) && 'Format email salah',
  };
}
