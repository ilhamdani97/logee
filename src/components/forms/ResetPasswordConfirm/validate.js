export default function validate(values) {
  const { newPassword, confirmPassword } = values;

  return {
    newPassword: !newPassword && 'required' || newPassword.length < 6 && 'minimal 6 karakter',
    confirmPassword: !confirmPassword && 'required' || confirmPassword !== newPassword && 'tidak sesuai' || confirmPassword.length < 6 && 'minimal 6 karakter',
  };
}
