import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import Text from '../../fields/Text_V2';
import styles from './styles.scoped.css';
import { Button } from 'logeeport-ui';
import { useSelector } from 'react-redux';

const ResetPassword = (props) => {
  const { handleSubmit, valid } = props;

  const textInputProps = { placeholder: 'Cth. ganendra@gmail.com' };

  const { message, isLoading } = useSelector((s) => s.resetPassword);
  return (
    <>
      <form className={styles.root}>
        <Field
          component={Text}
          inputProps={textInputProps}
          label="Email"
          name="email"
        />
        <Button
          disabled={isLoading || !valid}
          isLoading={isLoading}
          onClick={handleSubmit}
        >
          Kirim
        </Button>
      </form>
      {message && <span className={styles.error}>{message}</span>}
    </>
  );
};

ResetPassword.defaultProps = {
  handleSubmit: () => {},
  valid: true,
};

ResetPassword.propTypes = {
  handleSubmit: PropTypes.func,
  valid: PropTypes.bool,
};

export default ResetPassword;
