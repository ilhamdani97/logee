import React from 'react';
import styles from './styles.scoped.css';
import PropTypes from 'prop-types';
import compareProps from '../../../utils/compareProps';

function Loader(props) {
  const root = [props.className, styles.root].join(' ');
  return (
    <div {...props} className={root}>
      <div className={styles.loading}/>
    </div>
  );
}

export default React.memo(Loader, compareProps);

Loader.defaultProps = {
  className: ''
};

Loader.propTypes = {
  className: PropTypes.string
};
