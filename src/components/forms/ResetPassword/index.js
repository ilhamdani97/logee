import { reduxForm } from 'redux-form';
import Component from './ResetPassword';
import validate from './validate';

export default reduxForm({
  form: 'resetpassword',
  initialValues: {
    email:'',
  },
  validate,
})(Component);
