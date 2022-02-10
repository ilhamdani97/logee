import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scoped.css';

export default function IconButton(props) {
  const { buttonProps, children, className, disabled, icon, onClick, type } = props;
  const classes = [styles.root, className].filter(Boolean).join(' ');

  return (
    <button className={classes} disabled={disabled} onClick={onClick} type={type} {...buttonProps}>
      {icon ? <img alt={icon} src={`/assets/ic-${icon}.svg`} /> : children}
    </button>
  );
}

IconButton.defaultProps = {
  buttonProps: {},
  children: null,
  className: '',
  disabled: false,
  icon: '',
  onClick: () => { },
  type: 'button',
};

IconButton.propTypes = {
  buttonProps: PropTypes.object,
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
};
