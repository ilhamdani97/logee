import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import styles from './styles.scoped.css';
import { Button } from 'logeeport-ui';
import { useSelector } from 'react-redux';
import Password from '@components/fields/Password';

const ResetPassword = (props) => {
  const { handleSubmit, valid } = props;

  const passwordInputs = { placeholder: 'Masukan kata sandi baru' };
  const repasswordInputs = { placeholder: 'Masukan ulang kata sandi baru' };

  const { message, isLoading } = useSelector((s) => s.resetPassword);
  return (
    <>
      <h3>
        Ubah Kata Sandi
      </h3>
      <form className={styles.root}>
        <Field
          className={styles.passwordSpacing}
          component={Password}
          inputProps={passwordInputs}
          label="Kata sandi baru"
          name="newPassword"
        />
        <Field
          component={Password}
          inputProps={repasswordInputs}
          label="Ulangi kata sandi baru"
          name="confirmPassword"
        />
        <Button
          disabled={isLoading || !valid}
          isLoading={isLoading}
          onClick={handleSubmit}
        >
          Ubah Kata Sandi
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
