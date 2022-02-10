import React from 'react';
import styles from './styles.scoped.css';
import PropTypes from 'prop-types';


const SectionLogee = ({ children, className }) => {
  const classes = [styles.root, className].join(' ');
  return (
    <div className={classes}>
      {children}
    </div>
  );
};


SectionLogee.defaultProps = {
  children : null,
  className: '',
};

SectionLogee.propTypes = {
  children : PropTypes.node,
  className: PropTypes.string,
};

export default SectionLogee;
