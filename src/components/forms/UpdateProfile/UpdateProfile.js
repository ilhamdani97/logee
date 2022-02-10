import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import Button from '../../elements/Button';
import Text from '../../fields/Text_V2';
import styles from './styles.scoped.css';
import { useSelector } from 'react-redux';

export default function UpdateProfile(props) {
  const { handleSubmit } = props;
  const textInputProps = { placeholder: 'Email' };
  const phoneInputProps = { placeholder: 'Phone' };
  const { isLoading } = useSelector((s) => s.login);

  return (
    <>
      <form className={styles.root} onSubmit={handleSubmit}>
        <Field
          component={Text}
          inputProps={textInputProps}
          label="Email PPJK"
          name="email"
        />
        <Field
          component={Text}
          inputProps={phoneInputProps}
          label="No. HP PPJK"
          name="nohp"
        />

        <Button
          disabled={true}
          isLoading={isLoading}
          onSubmit={handleSubmit}
        >
          Simpan
        </Button>
      </form>
    </>
  );
}

UpdateProfile.defaultProps = {
  handleSubmit: () => {},
  invalid: true,
};

UpdateProfile.propTypes = {
  handleSubmit: PropTypes.func,
  invalid: PropTypes.bool
};

