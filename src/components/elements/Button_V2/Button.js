import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scoped.css';

export default function Button(props) {
  const { buttonProps, children, className, disabled, isLoading, onClick } = props;
  const classes = [styles.root, className].filter(Boolean).join(' ');

  return (
    <button className={classes} disabled={disabled || isLoading} onClick={onClick} {...buttonProps}>
      {isLoading ? (
        <>
          <div className={styles.loading}>
            <img src="/assets/ic-loader-bnw.svg"/>
          </div>
          Memproses...
        </>
      ) : children}
    </button>
  );
}

Button.defaultProps = {
  buttonProps: {},
  children: null,
  className: '',
  disabled:false,
  isLoading:false,
  onClick: () => {},
};

Button.propTypes = {
  buttonProps: PropTypes.object,
  children: PropTypes.node,
  className: PropTypes.string,
  disabled:PropTypes.bool,
  isLoading:PropTypes.bool,
  onClick: PropTypes.func,
};
