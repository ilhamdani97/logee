import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scoped.css';

export default function Webp(props) {
  const { alt, className, name, style } = props;

  return (
    <picture className={[styles.bgContainer,className].join(' ')} style={style}>
      <img alt={alt} className={styles.bgImages} src={`/assets/${name}`}/>
    </picture>
  );
}

Webp.defaultProps = {
  alt: '',
  className: '',
  name: '',
  style: {},
};

Webp.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  style: PropTypes.object,
};
