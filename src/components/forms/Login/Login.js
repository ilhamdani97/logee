import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import Button from '../../elements/Button';
import Text from '../../fields/Text_V2';
import Password from '../../fields/Password';
import styles from './styles.scoped.css';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { routes } from '@configs/routes';

export default function Login(props) {
  const { handleSubmit } = props;
  const history = useHistory();
  const { message, isLoading } = useSelector((s) => s.login);
  const textInputProps = { placeholder: 'Email' };
  const passwordInputProps = { placeholder: 'Password' };

  return (
    <>
      <form className={styles.root} onSubmit={handleSubmit}>
        <Field
          component={Text}
          inputProps={textInputProps}
          label="Email"
          name="email"
        />
        <Field
          component={Password}
          inputProps={passwordInputProps}
          label="Password"
          name="password"
        />

        <div
          className={styles.forgotpassword}
          onClick={() => history.push(routes.RESETPASSWORD())}
        >
          Lupa Password?
        </div>

        <Button
          disabled={isLoading}
          isLoading={isLoading}
          onSubmit={handleSubmit}
        >
          MASUK
        </Button>
      </form>

      {message && <p className={styles.error}>{message}</p>}
    </>
  );
}

Login.defaultProps = {
  handleSubmit: () => {},
  invalid: true,
};

Login.propTypes = {
  handleSubmit: PropTypes.func,
  invalid: PropTypes.bool,
};
