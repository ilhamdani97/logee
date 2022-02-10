import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scoped.css';

export default function Text(props) {
  const { className, input, inputProps, label, meta, helper, icon, wording, onClickIcon } = props;
  const { dirty, error, touched } = meta;

  const classes =   [
    styles.root,
    !!input.value || styles.empty,
    !!error && (dirty || touched) && styles.error,
    onClickIcon && styles.clickable,
    className
  ].filter(Boolean).join(' ');
  return (
    <div className={classes}>
      <label>{label}</label>
      <div className={styles.wrapper}>
        <input className={classes} id={input.name} {...input} {...inputProps}  />
        { icon &&
          <span className={styles.icon} onClick={onClickIcon}>
            <img alt="icon" src={`../../../assets/${icon}.svg`}/>
          </span>
        }
        { wording &&
          <span className={styles.wording}>
            <a>{wording}</a>
          </span>
        }
      </div>
      {!!error && (dirty || touched) && <small className={styles.error}>{error}</small>}
      <span>{helper}</span>
    </div>
  );
}

Text.defaultProps = {
  className: '',
  helper:'',
  icon:'',
  input: {},
  inputProps: {},
  label: '',
  meta:{},
  onClickIcon: null,
  wording: ''

};

Text.propTypes = {
  className: PropTypes.string,
  helper: PropTypes.string,
  icon: PropTypes.string,
  input: PropTypes.object,
  inputProps: PropTypes.object,
  label: PropTypes.string,
  meta: PropTypes.object,
  onClickIcon: PropTypes.func,
  wording: PropTypes.string
};
