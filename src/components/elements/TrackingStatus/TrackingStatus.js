import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scoped.css';
import { STATUS_DELIVERY_MESSAGE } from '@utils/constants';
import compareProps from '@utils/compareProps';


function TrackingStatus(props) {
  const { code, destinationCount } = props;
  const classes = [styles.rootTracking, styles[`trackingStatus${code}`]].filter(Boolean).join(' ');

  const _renderStatusImage = (code) => (
    <>
      <img src={`/assets/${STATUS_DELIVERY_MESSAGE[code].icon}.svg`} />
      <p>{STATUS_DELIVERY_MESSAGE[code].label}</p>
    </>
  );

  const _renderStatus = (code, destinationCount) => (
    <>
      {destinationCount &&
        <div>
          {destinationCount}
        </div>
      }
      <p>{destinationCount ? `${STATUS_DELIVERY_MESSAGE[code].label} ${destinationCount}` :
        STATUS_DELIVERY_MESSAGE[code].label}</p>
    </>
  );

  return (
    <div className={classes}>
      {(!destinationCount && STATUS_DELIVERY_MESSAGE[code].icon) ? _renderStatusImage(code) :
        _renderStatus(code, destinationCount)}
    </div>
  );
}



TrackingStatus.defaultProps = {
  code: '',
  destinationCount: ''
};

TrackingStatus.propTypes = {
  code: PropTypes.string,
  destinationCount: PropTypes.string,
};

export default React.memo(TrackingStatus, compareProps);

