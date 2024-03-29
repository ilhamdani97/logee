import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scoped.css';

export default function Select(props) {
  const { className, input, inputProps, meta, options, onChange } = props;
  const { dirty, error, touched } = meta;
  const classes = [
    styles.root,
    (!!input.value || !!inputProps.value) || styles.empty,
    !!error && (dirty || touched) && styles.error,
    className
  ].filter(Boolean).join(' ');

  return (
    <div>
      <label className={styles.label}>{inputProps.label}</label>
      <div className={styles.wrapper}>
        <span className={styles.arrow}>
          <img alt="icon arrow" src="../../../assets/ic-expand.svg" />
        </span>
        <select className={classes} id={input.name} onChange={onChange} {...input} {...inputProps}>
          <option value="">{inputProps.placeholder}</option>
          {options.map((i, idx) => (
            <option key={idx} value={i.value}>{i.text}</option>
          ))}
        </select>
      </div>
      {!!error && (dirty || touched) && <small className={styles.error}>{error}</small>}
    </div>
  );
}

Select.defaultProps = {
  className: '',
  input: {},
  inputProps: {},
  meta: {},
  onChange: ()=> {},
  options: []
};

Select.propTypes = {
  className: PropTypes.string,
  input: PropTypes.object,
  inputProps: PropTypes.object,
  meta: PropTypes.object,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    value: PropTypes.string,
  }))
};
