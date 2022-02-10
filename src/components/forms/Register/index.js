import { reduxForm } from 'redux-form';
import Component from './Register';
import validate from './validate';

export default reduxForm({
  form: 'register',
  initialValues: {
    email:'',
    password:''
  },
  validate,
})(Component);
