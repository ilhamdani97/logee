import React from 'react';
import styles from './styles.scoped.css';
import PropTypes from 'prop-types';
import { Typography } from 'logeeport-ui';

const HeaderCollaps = ({ data }) => {
  return (
    <div>
      <Typography className={styles.colapHead} type="p">
        {data.title}
      </Typography>
      <Typography className={styles.colapSubHead} type="p">
        {data.subTitle}
      </Typography>
    </div>
  );
};

HeaderCollaps.defaultProps = {
  data:{},
};

HeaderCollaps.propTypes = {
  data:PropTypes.object,
};


export default HeaderCollaps;
