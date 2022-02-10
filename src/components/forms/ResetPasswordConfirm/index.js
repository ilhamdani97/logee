import { reduxForm } from 'redux-form';
import Component from './ResetPasswordConfirm';
import validate from './validate';

export default reduxForm({
  form: 'resetpasswordconfirm',
  initialValues: {
    newPassword:'',
    confirmPassword:''
  },
  validate,
})(Component);
