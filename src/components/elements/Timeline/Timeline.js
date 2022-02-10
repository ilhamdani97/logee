import React from 'react';
import styles from './styles.scoped.css';
import moment from 'moment';
import line from '../../../assets/draw-timeline.svg';
import dot from '../../../assets/ic-timeline-dot.svg';
import { STATUS_DELIVERY_MESSAGE } from '@utils/constants';
import PropTypes from 'prop-types';
import compareProps from '@utils/compareProps';
import { formatFullDate } from '@utils/format';

function Timeline({ code, date, destinationId, isFirst }) {
  return (
    <div className={styles.content}>
      <img src={isFirst ? dot : line} />
      <div>
        <p>{destinationId ? `${STATUS_DELIVERY_MESSAGE[code].label} ${destinationId}` :
          STATUS_DELIVERY_MESSAGE[code].label}</p>
        <p>{date && `${formatFullDate(date, 2)}, ${moment(date).format('HH.mm')}`}</p>
      </div>
    </div>
  );
}

export default React.memo(Timeline, compareProps);

Timeline.defaultProps = {
  code: '',
  date: '',
  destinationId: '',
  isFirst: true,
  name: ''
};

Timeline.propTypes = {
  code: PropTypes.string,
  date: PropTypes.string,
  destinationId: PropTypes.string,
  isFirst: PropTypes.bool,
  name: PropTypes.string
};
