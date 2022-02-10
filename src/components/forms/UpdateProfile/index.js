import { reduxForm } from 'redux-form';
import Component from './UpdateProfile';
import validate from './validate';

export default reduxForm({
  form: 'updatePassword',
  initialValues: {
    email:'',
    nohp:''
  },
  validate,
})(Component);
