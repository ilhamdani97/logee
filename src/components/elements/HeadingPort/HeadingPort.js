import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scoped.css';
import { Typography } from 'logeeport-ui';

const HeadingPort = ({ title }) => {
  return (
    <div className={styles.root}>
      <Typography variant="h4">{title}</Typography>
    </div>
  );
};

HeadingPort.defaultProps = {
  title:'',
};

HeadingPort.propTypes = {
  title:PropTypes.string,
};

export default HeadingPort;
