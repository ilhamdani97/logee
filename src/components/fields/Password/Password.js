import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scoped.css';
import compareProps from '../../../utils/compareProps';

function Password(props) {
  const { className, input, inputProps, label, meta } = props;
  const { dirty, error, touched } = meta;
  const [show, setShow] = useState(false);

  const classes =   [
    styles.root,
    !!input.value || styles.empty,
    !!error && (dirty || touched) && styles.error,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      <label>{label}</label>
      <div className={className}>
        <input id={input.name} type={show ? 'text' : 'password'} {...input} {...inputProps} />
        <button onClick={() => setShow(!show)} type="button">
          <img alt={show ? 'show' : 'hide'} src={`/assets/ic-password-${show ? 'show' : 'hide'}.svg`} />
        </button>
      </div>
      {!!error && (dirty || touched) && <small className={styles.error}>{error}</small>}
    </div>
  );
}

export default React.memo(Password, compareProps);

Password.defaultProps = {
  className: '',
  input: {},
  inputProps: {},
  label: '',
  meta:{},
};

Password.propTypes = {
  className: PropTypes.string,
  input: PropTypes.object,
  inputProps: PropTypes.object,
  label: PropTypes.string,
  meta: PropTypes.object,
};
